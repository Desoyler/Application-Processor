<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "diplomka"; 

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>