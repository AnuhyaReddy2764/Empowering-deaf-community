<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deaf Unity Hub - Feel free to Learn American Sign Language</title>
    <link rel="stylesheet" href="home.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">DeafUnityHub</div>
            <nav>
                <ul id="nav-items">
                    <li><a href="/deaf/home.php">Home</a></li>
                    <li><a href="/deaf/resource.php">Resources</a></li>
                    <li><a href="/deaf/Exercise.php">Exercises</a></li>
                    <li><a href="/deaf/feedback.php">Feedback</a></li>
                </ul>
            </nav>
            <div class="user-actions">
                <?php
                if (isset($_SESSION['email'])) {
                    echo '<a href="#" id="logout-button" class="sign-in">Logout</a>';
                } else {
                    echo '<a href="index.php" id="login-button" class="sign-in">Sign in</a>';
                }
                ?>
                <div class="menu-icon" id="menu-icon">☰</div>
            </div>
        </div>
    </header>
    <main>
        <section class="hero">
            <div class="hero-content">
                <h1>Empowering the Deaf Community Through Inclusive Learning</h1>
                <p>Experience personalized American Sign Language (ASL) education with our interactive platform. Learn, engage, and grow in a supportive digital environment designed for you.</p>
                <a href="#about" class="btn">Visit us to know more</a>
            </div>
        </section>
    </main>

    <div id = "about" class="about">
        <h1>Resources </h1>
        <p>Our website offers a rich collection of resources, including tutorial videos for learning American Sign Language (ASL). Users can access a comprehensive alphabet dictionary to enhance their vocabulary and understanding of ASL. These resources are designed to provide a solid foundation in ASL, supporting both beginners and advanced learners.</p>

        <h1>Exercises </h1>
        <p>To reinforce learning, we provide interactive exercises that include a variety of quizzes. These quizzes are designed to test and improve users' knowledge of ASL. Quiz results are stored in our database, allowing users to track their progress and identify areas for improvement.</p>

        <h1>Feedback Form </h1>
        <p>We value user feedback to continually improve our website's functionality and content. Users can fill out a feedback form to share their experiences, suggestions, and any issues they encounter. All feedback is stored in our database and reviewed to ensure we meet the needs of our community effectively.</p>
    </div>
    <script src="home.js"></script>
</body>
</html>
