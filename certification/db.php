<?php
$host = 'localhost';
$user = 'root';      // Your DB Username
$pass = '';          // Your DB Password
$dbname = 'course_db';

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>