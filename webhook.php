<?php
/**
 * Webhook Handler - Updates DB in the background
 */
require_once 'vendor/autoload.php';
require_once 'dbconfig.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PhonePe\payments\v2\standardCheckout\StandardCheckoutClient;
use PhonePe\Env;

// 1. Basic Auth Check (Matching your screenshot)
$expectedUser = "olivia19"; 
$expectedPass = "olivia123";

if (!isset($_SERVER['PHP_AUTH_USER']) || 
    ($_SERVER['PHP_AUTH_USER'] !== $expectedUser || $_SERVER['PHP_AUTH_PW'] !== $expectedPass)) {
    header('WWW-Authenticate: Basic realm="Webhook"');
    header('HTTP/1.0 401 Unauthorized');
    exit;
}

// 2. Process Input
$requestBody = file_get_contents('php://input');
$headers = getallheaders();

try {
    $client = StandardCheckoutClient::getInstance(
        $_ENV['CLIENT_ID'], $_ENV['CLIENT_VERSION'], $_ENV['CLIENT_SECRET'], Env::PRODUCTION
    );
    
    $callbackResponse = $client->verifyCallbackResponse($headers, $requestBody,$expectedUser,$expectedPass);

    if ($callbackResponse->getState() === 'COMPLETED') {
        $mOrderId = $callbackResponse->getMerchantOrderId();
        $pTxnId = $callbackResponse->getTransactionId();

        // Update the 'payments' table
        $stmt = $conn->prepare("UPDATE payments SET status = 'COMPLETED', transaction_id = ? WHERE merchant_order_id = ? AND status != 'COMPLETED'");
        $stmt->bind_param("ss", $pTxnId, $mOrderId);
        $stmt->execute();
        
        http_response_code(200);
        echo "OK";
    }
} catch (Exception $e) {
    error_log("Webhook Error: " . $e->getMessage());
    http_response_code(400);
}