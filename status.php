<?php
require_once 'vendor/autoload.php';
require_once 'dbconfig.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PhonePe\payments\v2\standardCheckout\StandardCheckoutClient;
use PhonePe\Env;

$merchantOrderId = $_GET['tid'] ?? $_POST['merchantOrderId'] ?? '';

$isSuccess = false;
$txnDetails = [];

if ($merchantOrderId) {
    $client = StandardCheckoutClient::getInstance(
        $_ENV['CLIENT_ID'],
        $_ENV['CLIENT_VERSION'],
        $_ENV['CLIENT_SECRET'],
        Env::PRODUCTION
    );

    try {
        $response = $client->getOrderStatus($merchantOrderId);

        if ($response->getState() === "COMPLETED") {
            $pTxnId = $response->getOrderId();

            // 1. Update status using Prepared Statement
            $upd = $conn->prepare("UPDATE payments SET status = 'COMPLETED', transaction_id = ? WHERE merchant_order_id = ? AND status != 'COMPLETED'");
            $upd->bind_param("ss", $pTxnId, $merchantOrderId);
            $upd->execute();

            // Check if this is the first time we are marking it as completed to avoid duplicate emails
            $isFirstTimeSuccess = ($upd->affected_rows > 0);
            $upd->close();

            // 2. Fetch details for UI and Email
            $sql = "SELECT p.amount_paid, p.customer_email, p.customer_name, p.updated_at, c.title 
                    FROM payments p 
                    JOIN certifications c ON p.cert_id = c.id 
                    WHERE p.merchant_order_id = ?";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $merchantOrderId);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($row = $result->fetch_assoc()) {
                $isSuccess = true;
                $txnDetails = $row;
                $payment_date = date('d - m - Y', strtotime($row['updated_at']));
                $amount = $row['amount_paid'];
                // 3. Email Logic (Only send if the status was just updated to COMPLETED)
                if ($isFirstTimeSuccess) {
                    $templatePath = __DIR__ . '/email_templates/payment.html';

                    if (file_exists($templatePath)) {
                        $html_content = file_get_contents($templatePath);

                        // Replace placeholders with actual data
                        $html_content = str_replace('{{OrderID}}', $pTxnId, $html_content);
                        $html_content = str_replace('{{CustomerName}}', $row['customer_name'], $html_content);
                        $html_content = str_replace('{{TransactionDate}}', $payment_date, $html_content);
                        $html_content = str_replace('{{ItemName}}', $row['title'], $html_content);
                        $html_content = str_replace('{{AmountPaid}}', number_format($amount, 2), $html_content);

                        try {
                            $resend = Resend::client($_ENV['EMAIL_API']);
                            $resend->emails->send([
                                'from' => 'THE SKILL ENHANCERS <no-reply@email.skillsigma.com>',
                                'to' => [$row['customer_email']],
                                'subject' => 'Payment Receipt | THE SKILL ENHANCERS',
                                'html' => $html_content,
                            ]);
                        } catch (Exception $mailEx) {
                            error_log("Resend Mail Error: " . $mailEx->getMessage());
                        }
                    } else {
                        error_log("Email Template Error: payment.html not found at " . $templatePath);
                    }
                }
            }
            $stmt->close();
        }
    } catch (Exception $e) {
        error_log("PhonePe Status Check Error: " . $e->getMessage());
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Status - TSE</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <style>
        body {
            background-color: #03153b !important;
            font-family: 'Poppins', sans-serif;
            color: #e0e6ed;
        }

        /* Centering the card vertically and horizontally */
        .status-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
        }

        /* Dark Theme Card */
        .status-card {
            width: 100%;
            max-width: 500px;
            background-color: #0b2252;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }

        /* Glowing Icons */
        .icon-box {
            font-size: 5rem;
            margin-bottom: 15px;
            line-height: 1;
        }

        .success-text {
            color: #20c997;
            text-shadow: 0 0 25px rgba(32, 201, 151, 0.4);
        }

        .fail-text {
            color: #ff4d4d;
            text-shadow: 0 0 25px rgba(255, 77, 77, 0.4);
        }

        /* Receipt Details Box */
        .receipt-box {
            background-color: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
        }

        .text-light-muted {
            color: #adb5bd;
        }

        /* Custom Button */
        .btn-status {
            padding: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
    </style>
</head>

<body>

    <div class="status-container">
        <div class="card status-card">
            <div class="card-body p-4 p-md-5 text-center">

                <?php if ($isSuccess): ?>

                    <div class="icon-box success-text">
                        <i class="bi bi-check-circle-fill"></i>
                    </div>
                    <h2 class="fw-bold mb-2 text-white">Payment Successful!</h2>
                    <p class="text-light-muted mb-4 small">Thank you for your purchase. Your certification is now being
                        processed.</p>

                    <div class="receipt-box text-start mb-4">
                        <div
                            class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                            <span class="text-light-muted">Item:</span>
                            <strong
                                class="text-white text-end ms-3"><?php echo htmlspecialchars($txnDetails['title'] ?? 'Certification'); ?></strong>
                        </div>
                        <div
                            class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                            <span class="text-light-muted">Order ID:</span>
                            <span
                                class="small text-white text-break text-end ms-3 font-monospace"><?php echo htmlspecialchars($merchantOrderId); ?></span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center pt-1">
                            <span class="text-light-muted">Amount Paid:</span>
                            <strong
                                class="text-info fs-4">₹<?php echo number_format($txnDetails['amount_paid'] ?? 0, 2); ?></strong>
                        </div>
                    </div>

                    <a href="./" class="btn btn-primary btn-lg w-100 rounded-3 btn-status">
                        <i class="bi bi-house-door-fill me-2"></i>Back to Home
                    </a>

                <?php else: ?>

                    <div class="icon-box fail-text">
                        <i class="bi bi-x-circle-fill"></i>
                    </div>
                    <h2 class="fw-bold mb-2 text-white">Payment Failed</h2>
                    <p class="text-light-muted mb-4 small">Something went wrong with your transaction. If money was
                        deducted, it will be refunded automatically by your bank.</p>

                    <div class="receipt-box mb-4 bg-danger bg-opacity-10 border-danger border-opacity-25 text-start">
                        <p class="small text-danger mb-0">
                            <i class="bi bi-exclamation-triangle-fill me-2"></i>Please check your internet connection or try
                            a different payment method.
                        </p>
                    </div>

                    <a href="certifications.php" class="btn btn-outline-danger btn-lg w-100 rounded-3 btn-status">
                        <i class="bi bi-arrow-counterclockwise me-2"></i>Try Again
                    </a>

                <?php endif; ?>

            </div>
        </div>
    </div>

</body>

</html>