<?php
require __DIR__.'/dbconfig.php';
require __DIR__ . '/vendor/autoload.php';
use PhonePe\payments\v2\standardCheckout\StandardCheckoutClient;
use PhonePe\Env;
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$html_content = file_get_contents('email_templates\payment.html');
$sql = "SELECT p.customer_name, p.customer_email, p.updated_at, p.amount_paid, p.merchant_order_id, c.title AS cert_title 
        FROM payments p 
        JOIN certifications c ON p.cert_id = c.id 
        WHERE p.id = 2";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$customer_name= $row['customer_name'];
$customer_email=$row['customer_email'];
$payment_date=date('d - m - Y',strtotime($row['updated_at']));
$amount_paid=$row['amount_paid'];
$merchantOrderId=$row['merchant_order_id'];
$cert_Title=$row['cert_title'];
$client = StandardCheckoutClient::getInstance(
        $_ENV['CLIENT_ID'], $_ENV['CLIENT_VERSION'], $_ENV['CLIENT_SECRET'], Env::PRODUCTION
    );
 try {
        $response = $client->getOrderStatus($merchantOrderId);
        $orderId=$response->getOrderId();
        $state=$response->getState();
        if($state==='COMPLETED'){
        $html_content = str_replace('{{OrderID}}',$orderId,$html_content); 
        $html_content = str_replace('{{CustomerName}}',$customer_name,$html_content);
        $html_content = str_replace('{{TransactionDate}}',$payment_date,$html_content);
        $html_content = str_replace('{{ItemName}}',$cert_Title,$html_content);
        $html_content = str_replace('{{AmountPaid}}',$amount_paid,$html_content);

        }
        } catch (Exception $e) { 
        $error = $e->getMessage(); 
    }

$resend = Resend::client($_ENV['EMAIL_API']);

$resend->emails->send([
  'from' => 'THE SKILL ENHANCERS <no-reply@email.skillsigma.com>',
  'to' => [$customer_email],
  'subject' => 'Payment Receipt | THE SKILL ENHANCERS',
  'html' => $html_content,
]);