<?php
include '../../dbconfig.php';
$date = date('Y-m-d H:i:s');
$title = mysqli_escape_string($conn, $_POST['title']);
$description = mysqli_escape_string($conn, $_POST['description']);
$caption = mysqli_escape_string($conn, $_POST['caption']);
if (!isset($_POST['id'])) {
    $sql = "INSERT INTO `compentecy_category`( `title`, `caption`, `description`, `created_at`, `updated_at`) 
VALUES ('" . $title . "','" . $caption . "','" . $description . "','" . $date . "','" . $date . "')";
} else {
    $sql = "UPDATE `compentecy_category` SET `title`='" . $title . "',`caption`='" . $caption . "',`description`='" . $description . "',`updated_at`='" . $date . "' WHERE `category_id`='" . $_POST['id'] . "'";
}
$result = mysqli_query($conn, $sql);
if (!isset($_POST['id'])){
    echo "New Category Created";
}
else{
    echo "Competency Category Updated";
}
$conn->close();