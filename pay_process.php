<?php
require_once 'vendor/autoload.php';
require_once 'dbconfig.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PhonePe\payments\v2\standardCheckout\StandardCheckoutClient;
use PhonePe\Env;
use PhonePe\payments\v2\models\request\builders\StandardCheckoutPayRequestBuilder;

// 1. Collect and Sanitize POST Data
$certId = (int) $_POST['cert_id'];
$customerName = trim($_POST['name']);
$customerEmail = trim($_POST['email']);
$customerPhone = trim($_POST['phone']);
$customerType = $_POST['customer_type'] ?? 'individual';
$billingAddress = trim($_POST['billing_address'] ?? '');

// Initialize Corporate Variables
$orgName = $orgPan = $gstNumber = $shippingAddress = null;

if ($customerType === 'corporate') {
    $orgName = trim($_POST['org_name']);
    $orgPan = strtoupper(trim($_POST['org_pan']));
    $gstNumber = strtoupper(trim($_POST['gst_number']));
    $shippingAddress = !empty($_POST['shipping_address']) ? trim($_POST['shipping_address']) : $billingAddress;
} else {
    $shippingAddress = $billingAddress;
}

// 2. Fetch Certification Details from DB
$stmt = $conn->prepare("SELECT title, amount FROM certifications WHERE id = ?");
$stmt->bind_param("i", $certId);
$stmt->execute();
$stmt->bind_result($title, $baseAmount);

if ($stmt->fetch()) {
    $taxInRupees = $baseAmount * 0.18;
    $totalPayableInRupees = $baseAmount + $taxInRupees;
    $message = $title;
} else {
    $stmt->close();
    die("Error: Invalid Certification selected.");
}
$stmt->close();

// 3. Generate Unique Order ID and Convert to Paise
$merchantOrderId = "TSE_" . time() . "_" . bin2hex(random_bytes(2));
$totalPayableInPaise = (int) round($totalPayableInRupees * 100);

// 4. Update Payments Table (Matched to your 16-column schema)
$sql = "INSERT INTO payments (
            cert_id, customer_name, customer_email, customer_phone, 
            customer_type, org_name, org_pan, gst_number, 
            billing_address, shipping_address, merchant_order_id, 
            amount_paid, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'INITIATED')";

$ins = $conn->prepare($sql);

// Bind mapping: i (1), s (10), d (1)
$ins->bind_param(
    "issssssssssd",
    $certId,
    $customerName,
    $customerEmail,
    $customerPhone,
    $customerType,
    $orgName,
    $orgPan,
    $gstNumber,
    $billingAddress,
    $shippingAddress,
    $merchantOrderId,
    $totalPayableInRupees
);

if (!$ins->execute()) {
    die("Database Error: " . $ins->error);
}
$ins->close();

// 5. PhonePe Integration
$client = StandardCheckoutClient::getInstance(
    $_ENV['CLIENT_ID'],
    $_ENV['CLIENT_VERSION'],
    $_ENV['CLIENT_SECRET'],
    Env::PRODUCTION
);

$redirectUrl = "https://tseedu.com/status.php?tid=" . $merchantOrderId;

$payRequest = StandardCheckoutPayRequestBuilder::builder()
    ->merchantOrderId($merchantOrderId)
    ->amount($totalPayableInPaise)
    ->redirectUrl($redirectUrl)
    ->message("Payment for " . $message)
    ->udf1($customerName)
    ->udf2($customerEmail)
    ->udf3($customerPhone)
    ->build();

try {
    $payResponse = $client->pay($payRequest);

    if ($payResponse->getState() === "PENDING") {
        header("Location: " . $payResponse->getRedirectUrl());
        exit();
    } else {
        echo "Payment initiation failed. State: " . $payResponse->getState();
    }
} catch (Exception $e) {
    error_log("PhonePe Error: " . $e->getMessage());
    echo "Something went wrong. Please try again later.";
}
?>