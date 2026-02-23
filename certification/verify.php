<?php
require('../dbconfig.php');
$certID = isset($_GET['id']) ? $_GET['id'] : '';
$isValid = false;
$studentName = "";
$courseName = "";
$cert_query="SELECT * FROM `certificates_new` WHERE `certId`='".$certID."'";
$cert_res=$conn->query($cert_query);
$cert_row=$cert_res->fetch_assoc();
$studentName=$cert_row['name'];
$courseName=$cert_row['course'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate Verification</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        .card { background: white; width: 90%; max-width: 400px; padding: 30px; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); text-align: center; }
        .icon { width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 40px; }
        .success { background-color: #d4edda; color: #155724; }
        .error { background-color: #f8d7da; color: #721c24; }
        h2 { margin: 10px 0; color: #333; }
        .detail-row { text-align: left; margin: 20px 0; border-top: 1px solid #eee; padding-top: 15px; }
        .label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; }
        .value { font-size: 18px; font-weight: 600; color: #333; margin-bottom: 10px; }
        .footer { margin-top: 30px; font-size: 12px; color: #aaa; }
        .btn { display: inline-block; margin-top: 20px; text-decoration: none; background: #0056b3; color: white; padding: 10px 20px; border-radius: 5px; }
    </style>
</head>
<body>

    <div class="card">
        <?php if ($studentName): ?>
            <div class="icon success">✓</div>
            <h2>Verified Certificate</h2>
            <p>This certificate is valid and authentic.</p>
            
            <div class="detail-row">
                <div class="label">Issued To</div>
                <div class="value"><?php echo htmlspecialchars($studentName); ?></div>
                
                <div class="label">Course Name</div>
                <div class="value"><?php echo htmlspecialchars($courseName); ?></div>
                
                <div class="label">Certificate ID</div>
                <div class="value"><?php echo htmlspecialchars($certID); ?></div>
            </div>
            
            <a href="certificates/cert_<?php echo $certID; ?>.pdf" class="btn">Download PDF</a>

        <?php else: ?>
            <div class="icon error">✕</div>
            <h2>Invalid Certificate</h2>
            <p>We could not verify the details for this certificate ID.</p>
            <p style="font-size: 14px; color: #666;">Please contact the administrator if you believe this is an error.</p>
        <?php endif; ?>
        
        <div class="footer">
            Powered by The Skill Enhancers
        </div>
    </div>

</body>
</html>