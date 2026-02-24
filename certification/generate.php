<?php
require_once '../vendor/autoload.php'; 
require('../dbconfig.php');

use setasign\Fpdi\Fpdi;
use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;

function generateCertificate($studentName, $certID, $startDate, $endDate, $issueDate) {
    $templateFile = 'TSECertificate.pdf';
    $studentName = trim($studentName);
    $certID      = trim($certID);
    $startDate   = date('d-m-Y',strtotime( trim($startDate)));
    $endDate     = date('d-m-Y',strtotime( trim($endDate)));;
    $issueDate   = date('d-m-Y',strtotime( trim($issueDate)));;
    // Handle empty certID
    if (!empty($certID)) {
        $uniqueID = $certID;
    } else {
        $uniqueID = uniqid(); 
    }
    
    $verifyUrl = "https://tseedu.com/certification/verify.php?id=" . $uniqueID;
    $outputFile = "certificates/cert_" . $uniqueID . ".pdf";
    $qrTempFile = "temp/qr_" . $uniqueID . ".png";
    
    $pdf = new Fpdi();
    $pdf->AddPage('L');
    $pdf->setSourceFile($templateFile);
    $tplIdx = $pdf->importPage(1);
    $pdf->useTemplate($tplIdx, 0, 0, 297);
    $pdf->AddFont('actay', '', 'ActayWideBd.php');
    
    // 1. STUDENT NAME (Only print if not empty)
    if (!empty($studentName)) {
        $pdf->SetFont('actay', '', 24);
        $pdf->SetTextColor(0, 0, 0);
        $pdf->SetXY(80, 77); 
        $pdf->Cell(120, 0, $studentName, 0, 0, 'C');
    }
    
    // Set font once for all dates to keep code clean
    $pdf->SetFont("actay", "", 15);
    $pdf->SetTextColor(0, 0, 0);
    
    // 2. START DATE (Only print if not empty)
    if (!empty($startDate)) {
        $pdf->SetXY(50, 110);
        $pdf->Write(0, $startDate);
    }
    
    // 3. END DATE (Only print if not empty - Adjusted X coordinate)
    if (!empty($endDate)) {
        $pdf->SetXY(115, 110); // Moved to X=90
        $pdf->Write(0, $endDate);
    }

    $pdf->SetXY(60,128);
    $pdf->Cell(53,0,$uniqueID,0,0,'C');
    
    // 4. ISSUE DATE (Only print if not empty - Adjusted X coordinate)
    if (!empty($issueDate)) {
        $pdf->SetXY(45, 179); // Moved to X=140
        $pdf->Write(0, $issueDate);
    }

    
    
    // QR Code Generation
    $options = new QROptions([
        'version'    => 5,
        'outputType' => QRCode::OUTPUT_IMAGE_PNG,
        'eccLevel'   => QRCode::ECC_L,
        'scale'      => 5,
    ]);
    
    (new QRCode($options))->render($verifyUrl, $qrTempFile);
    $pdf->Image($qrTempFile, 175, 152, 42 , 42);
    $pdf->Output('F', $outputFile);
    
    if(file_exists($qrTempFile)) {
        unlink($qrTempFile);
    }
    
    return $uniqueID;
}

// Test Run
// echo $uniqueId = generateCertificate('Rakesh', '', '2026-02-17', '2026-02-20', '2026-02-20');


$selectQuery = 'SELECT * FROM `certificates_new` where id BETWEEN 30 AND 46';
$selectResult = $conn->query($selectQuery);

while($row = $selectResult->fetch_assoc()){
     $uniqueId = generateCertificate($row['name'], $row['certId'], $row['fromDate'], $row['toDate'], $row['issueDate']);
     if (empty($row['certId'])) {
        $updateQuery = "UPDATE `certificates_new` SET `certId`='" . $uniqueId . "' WHERE `id`='" . $row['id'] . "'";
        $conn->query($updateQuery);
    } 
}
?>