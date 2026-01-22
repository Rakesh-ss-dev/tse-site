<?php
$servername = "localhost";
$username = "tse_competency_admin";
$password = "L+$^r^{Fa%{~";
$dbname = "tse_competencies";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>