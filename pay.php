<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Checkout - TSE</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

    <style>
        body {
            background-color: #03153b !important;
            font-family: 'Poppins', sans-serif;
            color: #e0e6ed;
        }

        .checkout-container {
            max-width: 500px;
            margin: 60px auto;
        }

        /* Dark Theme Card */
        .card {
            background-color: #0b2252;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        /* Summary Box */
        .summary-box {
            background-color: rgba(13, 110, 253, 0.1);
            border: 1px solid rgba(13, 110, 253, 0.2);
            border-radius: 12px;
            color: #fff;
        }

        .summary-box hr {
            border-color: rgba(255, 255, 255, 0.2);
        }

        /* Dark Form Inputs */
        .form-label {
            color: #adb5bd;
            font-size: 0.9rem;
            margin-bottom: 5px;
        }

        .form-control {
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
            border-radius: 8px;
        }

        .form-control:focus {
            background-color: rgba(255, 255, 255, 0.1);
            border-color: #0d6efd;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
            color: #fff;
        }

        .form-control::placeholder {
            color: #6c757d;
        }

        /* PhonePe Button */
        .btn-phonepe {
            background: linear-gradient(135deg, #5f259f 0%, #4b1d7d 100%);
            color: white;
            font-weight: 600;
            border: none;
            border-radius: 8px;
            padding: 12px;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-phonepe:hover {
            background: linear-gradient(135deg, #4b1d7d 0%, #3a1661 100%);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(95, 37, 159, 0.4);
        }

        .card-footer {
            background-color: rgba(0, 0, 0, 0.2);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom-left-radius: 16px !important;
            border-bottom-right-radius: 16px !important;
        }
    </style>
</head>

<body>

    <?php
    require_once 'dbconfig.php';

    // Fetch certification details based on URL parameter
    $certId = isset($_GET['cert_id']) ? intval($_GET['cert_id']) : 0;

    if ($certId > 0) {
        $stmt = $conn->prepare("SELECT title, amount FROM certifications WHERE id = ?");
        $stmt->bind_param("i", $certId);
        $stmt->execute();
        $stmt->bind_result($boundTitle, $boundAmount);

        if ($stmt->fetch()) {
            $message = $boundTitle;
            $amountInRupees = $boundAmount;
        } else {
            die("<div class='container mt-5 alert alert-danger border-danger bg-danger bg-opacity-10 text-white'>Error: Certification not found.</div>");
        }

        // VERY IMPORTANT: Close the statement so the connection is free
        $stmt->close();
    } else {
        die("<div class='container mt-5 alert alert-danger border-danger bg-danger bg-opacity-10 text-white'>Invalid Request.</div>");
    }
    ?>

    <div class="container checkout-container">
        <div class="card">
            <div class="card-body p-4 p-md-5">

                <div class="text-center mb-4">
                    <i class="bi bi-shield-lock-fill text-primary" style="font-size: 2.5rem;"></i>
                    <h3 class="text-white mt-2 fw-bold">Secure Checkout</h3>
                </div>

                <div class="summary-box p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-light-muted small">Certification:</span>
                        <span class="fw-semibold text-end"><?php echo htmlspecialchars($message); ?></span>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-light-muted">Total Payable:</span>
                        <span class="text-info h4 mb-0 fw-bold">₹<?php echo number_format($amountInRupees, 2); ?></span>
                    </div>
                </div>

                <form action="pay_process.php" method="POST">
                    <input type="hidden" name="cert_id" value="<?php echo $certId; ?>">

                    <div class="mb-3">
                        <label class="form-label"><i class="bi bi-person me-2"></i>Full Name</label>
                        <input type="text" name="name" class="form-control" placeholder="Enter your full name" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label"><i class="bi bi-envelope me-2"></i>Email Address</label>
                        <input type="email" name="email" class="form-control" placeholder="name@example.com" required>
                    </div>

                    <div class="mb-4">
                        <label class="form-label"><i class="bi bi-telephone me-2"></i>Phone Number</label>
                        <input type="tel" name="phone" class="form-control" placeholder="10-digit mobile number"
                            pattern="[0-9]{10}" title="Please enter a valid 10 digit mobile number" required>
                    </div>

                    <div class="d-grid gap-2">
                        <button type="submit"
                            class="btn btn-phonepe btn-lg d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-phone-vibrate me-2" viewBox="0 0 16 16">
                                <path
                                    d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z" />
                                <path
                                    d="M11.5 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zM2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5z" />
                            </svg>
                            Pay securely
                        </button>
                    </div>
                </form>

            </div>
            <div class="card-footer text-center text-light small py-3">
                <i class="bi bi-lock-fill text-success me-1"></i> 256-bit SSL Encrypted Transaction
            </div>
        </div>
    </div>

</body>

</html>