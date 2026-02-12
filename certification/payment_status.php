<?php require 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Payment Status</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light d-flex align-items-center justify-content-center" style="height: 100vh;">

<div class="card text-center p-5 shadow" style="max-width: 500px;">
    <?php
    // Debugging: Uncomment the line below if you face issues again to see exact data
    // print_r($_POST); 

    // FIX: Check for 'transactionId' instead of 'merchantTransactionId'
    if (isset($_POST['code']) && isset($_POST['transactionId'])) {
        
        $status = $_POST['code'];
        $txnId = $_POST['transactionId']; // This matches the "TXN..." ID you sent
        $providerRefId = $_POST['providerReferenceId'] ?? '';

        // Determine DB Status
        $dbStatus = ($status == 'PAYMENT_SUCCESS') ? 'SUCCESS' : 'FAILED';

        // Update Database
        $stmt = $conn->prepare("UPDATE transactions SET status = ?, provider_ref_id = ? WHERE merchant_txn_id = ?");
        $stmt->bind_param("sss", $dbStatus, $providerRefId, $txnId);
        
        if ($stmt->execute()) {
            // UI Logic
            if ($dbStatus == 'SUCCESS') {
                echo '
                    <div class="mb-3 text-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </div>
                    <h2 class="text-success">Payment Successful!</h2>
                    <p>Transaction ID: <strong>' . htmlspecialchars($txnId) . '</strong></p>
                    <a href="index.php" class="btn btn-primary mt-3">Back to Courses</a>
                ';
            } else {
                echo '
                    <div class="mb-3 text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </div>
                    <h2 class="text-danger">Payment Failed</h2>
                    <p>Status: ' . htmlspecialchars($status) . '</p>
                    <a href="index.php" class="btn btn-warning mt-3">Try Again</a>
                ';
            }
        } else {
            echo '<h3 class="text-danger">Database Update Failed</h3>';
        }

    } else {
        echo '<h3 class="text-danger">Invalid Access</h3>';
        echo '<p>Missing parameters in response.</p>';
        // Uncomment below to see what IS being received
        // echo '<pre>'; print_r($_POST); echo '</pre>';
    }
    ?>
</div>

</body>
</html>