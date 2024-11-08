<?php
session_start();
include 'connect.php';

if (isset($_POST['quiz_name']) && isset($_POST['score']) && isset($_POST['total_questions'])) {
    $email = $_SESSION['email'];
    
    // Retrieve user details from the users table
    $userQuery = "SELECT firstName, lastName FROM users WHERE email='$email'";
    $userResult = $conn->query($userQuery);

    if ($userResult->num_rows > 0) {
        $user = $userResult->fetch_assoc();
        $firstName = $user['firstName'];
        $lastName = $user['lastName'];
    } else {
        echo "User not found.";
        exit();
    }
    
    $quiz_name = $_POST['quiz_name'];
    $score = $_POST['score'];
    $total_questions = $_POST['total_questions'];
    $accuracy = ($score / $total_questions) * 100;

    // Insert quiz result into quiz_results table
    $insertQuery = "INSERT INTO quiz_results (firstName, lastName, email, quiz_name, score, total_questions, accuracy) 
                    VALUES ('$firstName', '$lastName', '$email', '$quiz_name', '$score', '$total_questions', '$accuracy')";

    if ($conn->query($insertQuery) === TRUE) {
        echo "Quiz result submitted successfully.";
    } else {
        echo "Error: " . $conn->error;
    }
} else {
    echo "Required data not provided.";
}
?>

