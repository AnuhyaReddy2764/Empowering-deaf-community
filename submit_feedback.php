<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $age = (int)$_POST['age'];
    $feedback = $conn->real_escape_string($_POST['feedback']);

    $sql = "INSERT INTO feedback (name, email, age, feedback) VALUES ('$name', '$email', '$age', '$feedback')";

    if ($conn->query($sql) === TRUE) {
        echo "Thank you for giving your feedback. Your Feedback has been recorded";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
