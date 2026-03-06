<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Checkout - TSE</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .checkout-container { max-width: 500px; margin: 50px auto; }
        .card { border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .btn-phonepe { background-color: #5f259f; color: white; font-weight: 600; }
        .btn-phonepe:hover { background-color: #4b1d7d; color: white; }
    </style>
</head>
<body>

<?php
require_once 'dbconfig.php';
// Fetch certification details based on URL parameter
$certId = isset($_GET['cert_id']) ? intval($_GET['cert_id']) : 0;
$stmt = $conn->prepare("SELECT title, amount FROM certifications WHERE id = ?");
$stmt->bind_param("i", $certId);
$stmt->execute();
$cert = $stmt->get_result()->fetch_assoc();

if (!$cert) {
    die("<div class='container mt-5 alert alert-danger'>Invalid Certification Selected.</div>");
}
?>

<div class="container checkout-container">
    <div class="card">
        <div class="card-body p-4">
            <h3 class="text-center mb-4">Checkout</h3>
            
            <div class="alert alert-light border mb-4">
                <div class="d-flex justify-content-between">
                    <strong>Item:</strong> <span><?php echo htmlspecialchars($cert['title']); ?></span>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <strong>Total:</strong> <span class="text-primary h5">₹<?php echo number_format($cert['amount'], 2); ?></span>
                </div>
            </div>

            <form action="pay_process.php" method="POST">
                <input type="hidden" name="cert_id" value="<?php echo $certId; ?>">
                
                <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" name="name" class="form-control" placeholder="John Doe" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <input type="email" name="email" class="form-control" placeholder="john@example.com" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Phone Number</label>
                    <input type="tel" name="phone" class="form-control" placeholder="9876543210" pattern="[0-9]{10}" title="Please enter 10 digit mobile number" required>
                </div>

                <div class="d-grid gap-2 mt-4">
                    <button type="submit" class="btn btn-phonepe btn-lg">
                        Pay with PhonePe
                    </button>
                </div>
            </form>
        </div>
        <div class="card-footer text-center text-muted small">
            Secure Encrypted Transaction
        </div>
    </div>
</div>

</body>
</html>