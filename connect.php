<?php
$host="localhost";
$user="root";
$pass="";
$db="login";
$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
    exit();
}
$quiz_results_db = $conn;
if ($quiz_results_db->connect_error) {
    echo "Failed to connect to Quiz Results DB: " . $quiz_results_db->connect_error;
    exit();
}

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    echo "Failed to connect DB: " . $conn->connect_error;
    exit();
}
?>