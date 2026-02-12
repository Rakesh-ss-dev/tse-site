<?php
require 'db.php';
$env = 'UAT'; 
if ($env == 'PROD') {
    $baseUrl = 'https://api.phonepe.com/apis/hermes';
} else {
    $baseUrl = 'https://api-preprod.phonepe.com/apis/pg-sandbox';
}

$merchantId = "PGTESTPAYUAT86"; 
$saltKey = "96434309-7796-489d-8924-ab56988a6076";
$saltIndex = 1;
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['course_id'])) {
    
    $courseId = intval($_POST['course_id']);

    // 1. Fetch Price from DB (Security Best Practice)
    $stmt = $conn->prepare("SELECT price FROM courses WHERE id = ?");
    $stmt->bind_param("i", $courseId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 0) {
        die("Invalid Course Selected");
    }
    
    $course = $result->fetch_assoc();
    $amount = $course['price']; // Amount in Rupees
    $amountInPaise = $amount * 100;

    // 2. Generate Transaction Data
    $transactionId = "TXN" . time() . rand(1000, 9999);
    $merchantUserId = "USER" . rand(1000, 9999);

    // 3. Insert into DB as PENDING
    $insertStmt = $conn->prepare("INSERT INTO transactions (merchant_txn_id, course_id, amount, status) VALUES (?, ?, ?, 'PENDING')");
    $insertStmt->bind_param("sid", $transactionId, $courseId, $amount);
    $insertStmt->execute();

    // 4. Prepare PhonePe Payload
    $data = [
        'merchantId' => $merchantId,
        'merchantTransactionId' => $transactionId,
        'merchantUserId' => $merchantUserId,
        'amount' => $amountInPaise,
        'redirectUrl' => 'http://localhost/TSE/tsesite/certification/payment_status.php', // UPDATE THIS
        'redirectMode' => 'POST',
        'callbackUrl' => 'http://localhost/TSE/tsesite/certification/payment_status.php',
        'paymentInstrument' => ['type' => 'PAY_PAGE']
    ];

    $payload = base64_encode(json_encode($data));
    $xVerify = hash('sha256', $payload . "/pg/v1/pay" . $saltKey) . '###' . $saltIndex;

    // 5. Call API
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => $baseUrl . "/pg/v1/pay",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode(['request' => $payload]),
        CURLOPT_HTTPHEADER => [
            "Content-Type: application/json",
            "X-VERIFY: " . $xVerify,
            "accept: application/json"
        ],
    ]);

    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    if ($err) {
        echo "cURL Error: " . $err;
    } else {
        $res = json_decode($response, true);
        if (isset($res['success']) && $res['success'] == '1') {
            header("Location: " . $res['data']['instrumentResponse']['redirectInfo']['url']);
            exit();
        } else {
            echo "API Error: " . ($res['message'] ?? 'Unknown');
        }
    }
}
?>