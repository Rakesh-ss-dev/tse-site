<?php
include 'dbconfig.php';
$title = mysqli_escape_string($conn, $_POST['title']);
$category = mysqli_escape_string($conn, $_POST['category']);
$content = mysqli_escape_string($conn, $_POST['content']);
$date = date('Y-m-d H:i:s');
if (!isset($_POST['id'])) {
    $sql = "INSERT INTO `Competency`(`title`, `content`, `category`, `created_at`, `updated_at`) VALUES ('" . $title . "','" . $content . "','" . $category . "','" . $date . "','" . $date . "')";
} else {
    $sql = "UPDATE `Competency` SET `title`='" . $title . "',`content`='" . $content . "',`category`='" . $category . "',`updated_at`='" . $date . "' WHERE `id`='" . $_POST['id'] . "'";
}
$result = mysqli_query($conn, $sql);
if (!isset($_POST['id'])) {
    echo "New Competency Created";
} else {
    echo "Competency Updated";
}
$conn->close();
?>