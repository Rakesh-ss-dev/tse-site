<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('metaTags.php'); ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
            max-width: 550px;
            margin: 40px auto;
        }

        .card {
            background-color: #0b2252;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .summary-box {
            background-color: rgba(13, 110, 253, 0.1);
            border: 1px solid rgba(13, 110, 253, 0.2);
            border-radius: 12px;
        }

        .form-control {
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
        }

        .form-control:focus {
            background-color: rgba(255, 255, 255, 0.1);
            border-color: #0d6efd;
            color: #fff;
        }

        .form-control:disabled,
        .form-control[readonly] {
            background-color: rgba(0, 0, 0, 0.2);
            border-color: rgba(255, 255, 255, 0.05);
            color: #888;
        }

        .btn-phonepe {
            background: linear-gradient(135deg, #5f259f 0%, #4b1d7d 100%);
            color: white;
            font-weight: 600;
            border-radius: 8px;
            padding: 12px;
            border: none;
        }

        .btn-phonepe:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(95, 37, 159, 0.4);
            color: white;
        }
    </style>
</head>

<body>

    <?php
    require_once 'dbconfig.php';
    $certId = isset($_GET['cert_id']) ? intval($_GET['cert_id']) : 0;

    if ($certId > 0) {
        $stmt = $conn->prepare("SELECT title, amount FROM certifications WHERE id = ?");
        $stmt->bind_param("i", $certId);
        $stmt->execute();
        $stmt->bind_result($message, $amountInRupees);

        if (!$stmt->fetch()) {
            die("<div class='container mt-5 alert alert-danger'>Certification not found.</div>");
        }
        $taxInRupees = $amountInRupees * 0.18;
        $totalPayable = $amountInRupees + $taxInRupees;
        $stmt->close();
    } else {
        die("<div class='container mt-5 alert alert-danger'>Invalid Request.</div>");
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
                    <div class="d-flex justify-content-between small mb-1">
                        <span class="text-light-muted">Item:</span>
                        <span class="text-white fw-bold"><?php echo htmlspecialchars($message); ?></span>
                    </div>
                    <div class="d-flex justify-content-between small mb-1">
                        <span class="text-light-muted">Base Cost:</span>
                        <span>₹<?php echo number_format($amountInRupees, 2); ?></span>
                    </div>
                    <div class="d-flex justify-content-between small mb-2">
                        <span class="text-light-muted">GST (18%):</span>
                        <span>₹<?php echo number_format($taxInRupees, 2); ?></span>
                    </div>
                    <div class="d-flex justify-content-between border-top pt-2">
                        <span class="fw-bold">Total Payable:</span>
                        <span class="text-info h4 mb-0 fw-bold">₹<?php echo number_format($totalPayable, 2); ?></span>
                    </div>
                </div>

                <form action="pay_process.php" method="POST">
                    <input type="hidden" name="cert_id" value="<?php echo $certId; ?>">
                    <input type="hidden" name="amount" value="<?php echo $totalPayable; ?>">

                    <div class="mb-4">
                        <label class="form-label d-block fw-bold text-white">Purchase Type</label>
                        <div class="btn-group w-100" role="group">
                            <input type="radio" class="btn-check" name="customer_type" id="type_individual"
                                value="individual" checked>
                            <label class="btn btn-outline-primary" for="type_individual">Individual</label>

                            <input type="radio" class="btn-check" name="customer_type" id="type_corporate"
                                value="corporate">
                            <label class="btn btn-outline-primary" for="type_corporate">Organization</label>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label"><i class="bi bi-person me-2"></i>Full Name</label>
                        <input type="text" name="name" class="form-control" placeholder="Enter your full name" required>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label"><i class="bi bi-envelope me-2"></i>Email</label>
                            <input type="email" name="email" class="form-control" placeholder="name@example.com"
                                required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label"><i class="bi bi-telephone me-2"></i>Phone</label>
                            <input type="tel" name="phone" class="form-control" placeholder="10-digit mobile"
                                pattern="[0-9]{10}" required>
                        </div>
                    </div>

                    <div id="corporate_fields" style="display: none;" class="mb-3">
                        <div class="mb-3">
                            <label class="form-label">Organization Name</label>
                            <input type="text" name="org_name" class="form-control corporate-input"
                                placeholder="e.g. Acme Solutions Pvt Ltd">
                        </div>
                        <div class="row">
                            <div class="col-6 mb-3">
                                <label class="form-label">Org PAN</label>
                                <input type="text" name="org_pan" class="form-control corporate-input text-uppercase"
                                    placeholder="ABCDE1234F" maxlength="10">
                            </div>
                            <div class="col-6 mb-3">
                                <label class="form-label">GST Number</label>
                                <input type="text" name="gst_number" class="form-control corporate-input text-uppercase"
                                    placeholder="22AAAAA0000A1Z5" maxlength="15">
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Billing Address</label>
                        <textarea id="billing_address" name="billing_address" class="form-control" rows="3"
                            placeholder="Building No, Street, City, State, ZIP" required></textarea>
                    </div>

                    <div id="shipping_container" style="display: none;" class="mb-4">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <label class="form-label mb-0">Shipping Address</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="same_as_billing">
                                <label class="form-check-label small text-light" for="same_as_billing">Same as
                                    Billing</label>
                            </div>
                        </div>
                        <textarea id="shipping_address" name="shipping_address" class="form-control" rows="3"
                            placeholder="Address for physical documents"></textarea>
                    </div>

                    <button type="submit" class="btn btn-phonepe btn-lg w-100 mt-2">
                        <i class="bi bi-phone-vibrate me-2"></i> Pay Securely via PhonePe
                    </button>
                </form>
            </div>
            <div class="card-footer text-center small text-light-muted py-3">
                <i class="bi bi-lock-fill text-success me-1"></i> PCI-DSS Compliant Gateway
            </div>
        </div>
    </div>

    <script>
        const corpFields = document.getElementById("corporate_fields");
        const shipFields = document.getElementById("shipping_container");
        const corpInputs = document.querySelectorAll(".corporate-input");
        const billingInput = document.getElementById('billing_address');
        const shippingInput = document.getElementById('shipping_address');
        const sameAsBillingCb = document.getElementById('same_as_billing');

        // Toggle Individual/Corporate
        document.querySelectorAll('input[name="customer_type"]').forEach((elem) => {
            elem.addEventListener("change", function (e) {
                if (e.target.value === "corporate") {
                    corpFields.style.display = "block";
                    shipFields.style.display = "block";
                    corpInputs.forEach(input => input.required = true);
                } else {
                    corpFields.style.display = "none";
                    shipFields.style.display = "none";
                    corpInputs.forEach(input => { input.required = false; input.value = ""; });
                    sameAsBillingCb.checked = false;
                    shippingInput.value = "";
                    shippingInput.readOnly = false;
                }
            });
        });

        // Sync Address Logic
        sameAsBillingCb.addEventListener('change', function () {
            if (this.checked) {
                shippingInput.value = billingInput.value;
                shippingInput.readOnly = true;
            } else {
                shippingInput.readOnly = false;
            }
        });

        billingInput.addEventListener('input', () => {
            if (sameAsBillingCb.checked) shippingInput.value = billingInput.value;
        });
    </script>
</body>

</html>