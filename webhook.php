<?php

require_once "vendor/autoload.php";

use PhonePe\payments\v2\standardCheckout\StandardCheckoutClient;
use PhonePe\common\exceptions\PhonePeException;
error_log("flow entered in webhook");
// Load Env & DB Connection (Assuming $conn is initialized in a separate file)
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
require_once "dbconfig.php"; // Ensure $conn is defined here
$logFile = __DIR__ . '/phonepe_webhook.log';
function log_debug($message)
{
    if (!is_writable(__DIR__)) {
        error_log("Permissions Error: PHP cannot write to " . __DIR__);
    }
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}
$headers = getallheaders();
$requestBody = file_get_contents("php://input");
$currentTime = date('Y-m-d H:i:s');

log_debug("--- NEW WEBHOOK ATTEMPT ---");
log_debug("Raw Input: " . file_get_contents("php://input"));

// Write to file (appends to existing content)
file_put_contents($logFile, $logEntry, FILE_APPEND);


$username = $_ENV['WEBHOOK_USERNAME'];
$password = $_ENV['WEBHOOK_PASSWORD'];

$standardCheckoutClient = StandardCheckoutClient::getInstance(
    $_ENV['CLIENT_ID'],
    $_ENV['CLIENT_VERSION'],
    $_ENV['CLIENT_SECRET'],
    \PhonePe\Env::PRODUCTION
);

try {
    $callbackResponse = $standardCheckoutClient->verifyCallbackResponse(
        $headers,
        json_decode($requestBody, true),
        $username,
        $password
    );

    $payload = $callbackResponse->getPayload();
    $merchantOrderId = $payload->getOriginalMerchantOrderId();
    $phonePeOrderId = $payload->getOrderId();
    $state = $payload->getState();
    $amount = $payload->getAmount() / 100;
    log_debug($payload);
    // 1. Only update and email if state is COMPLETED
    if ($state === 'COMPLETED') {

        // Use prepared statements for the UPDATE to prevent SQL injection
        $upd = $conn->prepare("UPDATE payments SET status = 'COMPLETED', transaction_id = ? WHERE merchant_order_id = ? AND status != 'COMPLETED'");
        $upd->bind_param("ss", $phonePeOrderId, $merchantOrderId);
        $upd->execute();

        // Check if a row was actually updated (prevents duplicate email triggers)
        if ($upd->affected_rows > 0 || $upd->errno === 0) {

            // 2. Fetch Details for Email
            $stmt = $conn->prepare("SELECT p.customer_email, p.customer_name, p.updated_at, c.title 
                                   FROM payments p 
                                   JOIN certifications c ON p.cert_id = c.id 
                                   WHERE p.merchant_order_id = ?");
            $stmt->bind_param("s", $merchantOrderId);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($row = $result->fetch_assoc()) {
                $customer_name = $row['customer_name'];
                $customer_email = $row['customer_email'];
                $payment_date = date('d-m-Y', strtotime($row['updated_at']));
                $cert_Title = $row['title'];

                // 3. Prepare Email Template
                // Ensure $html_content is loaded from a file or string before this
                $placeholders = [
                    '{{OrderID}}' => $phonePeOrderId,
                    '{{CustomerName}}' => $customer_name,
                    '{{TransactionDate}}' => $payment_date,
                    '{{ItemName}}' => $cert_Title,
                    '{{AmountPaid}}' => number_format($amount, 2)
                ];
                $email_html = str_replace(array_keys($placeholders), array_values($placeholders), $html_content);

                // 4. Send via Resend
                $resend = Resend::client($_ENV['EMAIL_API']);
                $resend->emails->send([
                    'from' => 'THE SKILL ENHANCERS <no-reply@email.skillsigma.com>',
                    'to' => [$customer_email],
                    'subject' => 'Payment Receipt | THE SKILL ENHANCERS',
                    'html' => $email_html,
                ]);
            }
            $stmt->close();
        }
        $upd->close();
    }

    // Always respond with 200 to acknowledge receipt
    http_response_code(200);
    echo json_encode(["status" => "OK"]);

} catch (PhonePeException $e) {
    error_log("PhonePe Webhook Error: " . $e->getMessage());
    http_response_code(400); // Tell PhonePe to retry later
} catch (Exception $e) {
    error_log("General Error: " . $e->getMessage());
    http_response_code(500);
}
?>