<?php
require_once 'vendor/autoload.php'; // Composer autoload
require('db.php');
use setasign\Fpdi\Fpdi;
use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;

function generateCertificate($studentName,$id) {
    
    // 1. Configuration
    $templateFile = 'template.pdf';
    $uniqueID = uniqid(); 
    $verifyUrl = "https://tseedu.com/certification/verify.php?id=" . $uniqueID;
    $outputFile = "certificates/cert_" . $uniqueID . ".pdf";
    $qrTempFile = "temp/qr_" . $uniqueID . ".png";
    
    // 2. Setup PDF
    
    $pdf = new Fpdi();
    
    $pdf->AddPage('L');
    $pdf->setSourceFile($templateFile);
    $tplIdx = $pdf->importPage(1);
    $pdf->useTemplate($tplIdx, 0, 0, 297);
    $pdf->AddFont('actay', '', 'ActayWideBd.php');
    // 3. Add Name
    $pdf->SetFont('actay', '', 24);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->SetXY(80, 112); // Adjust X,Y as needed
    $pdf->Write(0, $studentName);


    $pdf->SetFont("actay","",15);
    $pdf->SetTextColor(0,0,0);
    $pdf->SetXY(30,180);
    $pdf->Write(0,"13 Feb 2026");

    // 4. Generate QR Code (Modern Composer Way)
    $options = new QROptions([
        'version'    => 5,
        'outputType' => QRCode::OUTPUT_IMAGE_PNG,
        'eccLevel'   => QRCode::ECC_L,
        'scale'      => 5,
    ]);
    
    // Save QR to temp file
    (new QRCode($options))->render($verifyUrl, $qrTempFile);

    // 5. Place QR on PDF
    $pdf->Image($qrTempFile, 175, 152, 42 , 42); // Adjust X,Y,W,H as needed

    // 6. Output PDF
    $pdf->Output('F', $outputFile);
    
    // Cleanup
    unlink($qrTempFile);
    
    return $uniqueID;
}

$selectQuery = 'SELECT * FROM `certificates`';
// Using $selectResult so we don't overwrite it later
$selectResult = $conn->query($selectQuery);

while($row = $selectResult->fetch_assoc()){
    
    // 1. Generate certificate
    $uniqueId = generateCertificate($row['name'], $row['id']);
    
    // 2. Prepare the update query using $uniqueId and $row['id']
    $updateQuery = "UPDATE `certificates` SET `certId`='" . $uniqueId . "' WHERE `id`='" . $row['id'] . "'";
    
    // 3. Execute the update directly without assigning it to $res
    $conn->query($updateQuery);
}
?>