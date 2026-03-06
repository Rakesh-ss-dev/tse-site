<?php
require_once 'vendor/autoload.php';
require_once 'dbconfig.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PhonePe\payments\v2\standardCheckout\StandardCheckoutClient;
use PhonePe\Env;

// PhonePe sends the transaction ID back in the redirect URL
$merchantOrderId = $_GET['tid'] ?? $_POST['merchantOrderId'] ?? '';

$isSuccess = false;
$txnDetails = [];

if ($merchantOrderId) {
    $client = StandardCheckoutClient::getInstance(
        $_ENV['CLIENT_ID'], $_ENV['CLIENT_VERSION'], $_ENV['CLIENT_SECRET'], Env::PRODUCTION
    );

    try {
        $response = $client->getOrderStatus($merchantOrderId);
        if ($response->getState() === "COMPLETED") {
            $isSuccess = true;
            // Immediate UI update in case webhook is slow
            $pTxnId = $response->getOrderId();
            $conn->query("UPDATE payments SET status = 'COMPLETED', transaction_id = '$pTxnId' WHERE merchant_order_id = '$merchantOrderId'");
            
            // Fetch details for the receipt
            $res = $conn->query("SELECT p.*, c.title FROM payments p JOIN certifications c ON p.cert_id = c.id WHERE p.merchant_order_id = '$merchantOrderId'");
            $txnDetails = $res->fetch_assoc();
        }
    } catch (Exception $e) { $error = $e->getMessage(); }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Payment Status - TSE</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <style>
        body { background-color: #f4f7f6; }
        .status-card { max-width: 600px; margin: 80px auto; border-radius: 15px; overflow: hidden; }
        .icon-box { font-size: 4rem; margin-bottom: 20px; }
        .success-text { color: #28a745; }
        .fail-text { color: #dc3545; }
    </style>
</head>
<body>

<div class="container">
    <div class="card status-card shadow-lg border-0">
        <div class="card-body p-5 text-center">
            <?php if ($isSuccess): ?>
                <div class="icon-box success-text"><i class="bi bi-check-circle-fill"></i></div>
                <h2 class="fw-bold mb-3">Payment Successful!</h2>
                <p class="text-muted mb-4">Thank you for your purchase. Your certification is now being processed.</p>
                
                <div class="bg-light p-4 rounded-3 text-start mb-4">
                    <div class="d-flex justify-content-between mb-2">
                        <span class="text-muted">Item:</span>
                        <strong><?php echo $txnDetails['title']; ?></strong>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <span class="text-muted">Order ID:</span>
                        <span class="small"><?php echo $merchantOrderId; ?></span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span class="text-muted">Amount Paid:</span>
                        <strong class="text-dark">₹<?php echo number_format($txnDetails['amount_paid'], 2); ?></strong>
                    </div>
                </div>
                
                <a href="index.php" class="btn btn-primary btn-lg w-100 rounded-pill">Back to Home</a>

            <?php else: ?>
                <div class="icon-box fail-text"><i class="bi bi-x-circle-fill"></i></div>
                <h2 class="fw-bold mb-3">Payment Failed</h2>
                <p class="text-muted">Something went wrong with your transaction. No money was deducted from your account.</p>
                <a href="index.php" class="btn btn-outline-danger mt-3">Try Again</a>
            <?php endif; ?>
        </div>
    </div>
</div>

</body>
</html>