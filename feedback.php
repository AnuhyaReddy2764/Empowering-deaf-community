<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link rel="stylesheet" href="feedback.css">
</head>

<body>
    <section class="all">
        <header>
            <div class="container">
                <div class="logo">DeafUnityHub</div>
                <nav>
                    <ul id="nav-items">
                        <li><a href="/deaf/home.php">Home</a></li>
                        <li><a href="/deaf/resource.php">Resources</a></li>
                        <li><a href="/deaf/exercise.php">Exercises</a></li>
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
        <div class="feedback-container">
            <h1>Feedback Form</h1>
            <form action="submit_feedback.php" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required>

                <label for="feedback">Feedback:</label>
                <textarea id="feedback" name="feedback" maxlength="300" required></textarea>

                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    </section>
</body>

</html>