<?php 
require_once 'vendor/autoload.php'; 
require_once 'dbconfig.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PhonePe\payments\v2\standardCheckout\StandardCheckoutClient;
use PhonePe\Env;
use PhonePe\payments\v2\models\request\builders\StandardCheckoutPayRequestBuilder;

// 1. Collect POST Data
$certId = $_POST['cert_id']; 
$email  = $_POST['email']; 
$phone  = $_POST['phone'];
$name   = $_POST['name'];

// 2. Fetch from DB
$stmt = $conn->prepare("SELECT title, amount FROM certifications WHERE id = ?");
$stmt->bind_param("i", $certId);
$stmt->execute();
$stmt->bind_result($title, $amount);

// Fetch the data into variables
if ($stmt->fetch()) {
    $amountInRupees = $amount;
    $message = $title;
} else {
    $stmt->close(); // Close here even on failure
    die("Invalid Certification");
}
$stmt->close();

$merchantOrderId = "TSE_" . time() . "_" . bin2hex(random_bytes(2));

// 3. Convert to Paise for PhonePe (CRITICAL)
$amountInPaise = (int)($amountInRupees * 100);

// 4. Update Payments Table
$ins = $conn->prepare("INSERT INTO payments (cert_id, customer_name, customer_email, customer_phone, merchant_order_id, amount_paid) VALUES (?, ?, ?, ?, ?, ?)");
$ins->bind_param("issssd", $certId, $name, $email, $phone, $merchantOrderId, $amountInRupees);
$ins->execute();
$ins->close();
// 5. PhonePe Configuration
$clientId      = $_ENV['CLIENT_ID'];
$clientVersion = $_ENV['CLIENT_VERSION'];
$clientSecret  = $_ENV['CLIENT_SECRET'];
$env           = Env::PRODUCTION; 
$redirectUrl   = "https://tseedu.com/status.php?tid=".$merchantOrderId;
$client = StandardCheckoutClient::getInstance($clientId, $clientVersion, $clientSecret, $env); 

// 6. Build Request (Standard V2 Pattern)
$payRequest = StandardCheckoutPayRequestBuilder::builder()
    ->merchantOrderId($merchantOrderId)
    ->amount($amountInPaise)
    ->redirectUrl($redirectUrl)
    ->message($message)  //Optional Message
    ->udf1($name)
    ->udf2($email)
    ->udf3($phone)
    ->build();

try {
    $payResponse = $client->pay($payRequest);

    if ($payResponse->getState() === "PENDING") {
        // SUCCESS: Redirect to PhonePe
        header("Location: " . $payResponse->getRedirectUrl());
        exit();
    } else {
        echo "Payment initiation failed. State: " . $payResponse->getState();
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>