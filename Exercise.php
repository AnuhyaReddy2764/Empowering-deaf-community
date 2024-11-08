<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise Page</title>
    <link rel="stylesheet" href="Exercise.css">
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
                    session_start(); // Start session if not already started
                    
                    if (isset($_SESSION['email'])) {
                        echo '<a href="logout.php" id="logout-button" class="sign-in">Logout</a>';
                    } else {
                        echo '<a href="index.php" id="login-button" class="sign-in">Sign in</a>';
                    }
                    ?>
                    <div class="menu-icon" id="menu-icon">☰</div>
                </div>
            </div>
        </header>

        <main>
            <h1>ASL Quiz Central</h1>
            <p>Challenge Your Sign Language Skills</p>
            <button class="btn-quiz">Start quiz</button>
        </main>
    </section>

    <div class="pop-rules">
    <h2 class="rules">Quiz Rules</h2>
    <span class="r">1. Ech Quiz Consists of 5 question.</span>
    <span class="r">2. Each Question consists of 4 Options.</span>
    <span class="r">3. For Each correct Answer your accuracy is incresed by 20%.</span>
    <span class="r">4. If your accuracy is less than 50% you have to write the same quiz again.</span>
    <span class="r">5. If your accuracy is Greater than 50% you can go to next quiz.</span>

    <div class="btn-info">
        <button class="info-btn btn-exit">Exit Quiz</button>
        <a href="#" class="info-btn btn-continue">Continue</a>
    </div>
</div>

<div class="popup-tests">
    <h2>Quizes</h2>
    <li><a href="/deaf/Quiz-1.php" class="t1">Quiz 1</a></li>
    <li><a href="/deaf/Quiz-2.php" class="t2">Quiz 2</a></li>
    <li><a href="/deaf/Quiz-3.php" class="t3">Quiz 3</a></li>
    <li><a href="/deaf/Quiz-4.php" class="t4">Quiz 4</a></li>
    <li><a href="/deaf/Quiz-5.php" class="t5">Quiz 5</a></li>
    <button class="btn-exit-tests">Exit</button>
</div>


    <script src="Exercise.js"></script>
</body>
</html>
