<?php
include '../../dbconfig.php';
$handle = fopen("competency-list.csv", "r");
$conn->set_charset("utf8mb4");

while (($row = fgetcsv($handle)) !== FALSE) {
    $title = $conn->real_escape_string($row[0]);
    $competencyTitle = $conn->real_escape_string($row[1]);

    $check = "SELECT * FROM `compentecy_category` WHERE `title` COLLATE utf8mb4_general_ci = '$title'";
    $checkRes = $conn->query($check);

    if ($checkRes->num_rows == 0) {
        $sql = "INSERT INTO `compentecy_category`(`title`,`created_at`, `updated_at`) 
                VALUES ('$title','" . date('Y-m-d H:i:s') . "','" . date('Y-m-d H:i:s') . "')";
        $conn->query($sql);
        $competency_id = $conn->insert_id;
    } else {
        $checkRow = $checkRes->fetch_assoc();
        $competency_id = $checkRow['category_id'];
    }

    $Competency = "INSERT INTO `Competency`(`title`, `category`, `created_at`, `updated_at`) 
                   VALUES ('$competencyTitle','$competency_id','" . date('Y-m-d H:i:s') . "','" . date('Y-m-d H:i:s') . "')";
    $conn->query($Competency);
}

fclose($handle);
?>