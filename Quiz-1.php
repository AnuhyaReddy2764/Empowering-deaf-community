

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Quiz-1.css">
</head>

<body>
    <div class="Quiz-box">
        <h1>Quiz-1</h1>
        <div class="Quiz-1-header">
            <span class="Quiz-name">Quiz Name</span>
            <span class="Score">Score: 0/5</span>
        </div>

        <div class="question-progress">
            <div class="progress-bar"></div>
        </div>

        <div class="Question">
            <img src="assets/Abandon.jpg" alt="Question Image" class="question-image">  
            <h2>Identify the sign in the image</h2>
        </div>

        <div class="Option-list">
            <div class="option" onclick="selectOption(this, 'A. Above')">
                <span>A. Above</span>
            </div>
            <div class="option" onclick="selectOption(this, 'B. Acadamic')">
                <span>B. Acadamic</span>
            </div>
            <div class="option" onclick="selectOption(this, 'C. Blow')">
                <span>C. Blow</span>
            </div>
            <div class="option" onclick="selectOption(this, 'D. Abandon')">
                <span>D. Abandon</span>
            </div>
        </div>

        <div class="Quiz-footer">
            <span class="Question-total">1 of 5 Questions</span>
            <button class="btn-next" onclick="nextQuestion()">Next</button>
        </div>
    </div>

    <div class="result-box" style="display:none;">
        <h2>Quiz Result!</h2>
        <div class="result-circle">
            <svg>
                <circle cx="75" cy="75" r="70" stroke="#f86a18" stroke-width="10" fill="none" class="circle-progress"></circle>
            </svg>
            <span class="result-percentage">0%</span>
        </div>
        <span class="result-score">Your Score 0 out of 5</span>
        <button class="result-button" id="try-again-button" onclick="location.reload()">Try Again</button>
        <button class="result-button" id="next-quiz-button" onclick="window.location.href='Quiz-2.php'" style="display:none;">Next Quiz</button>
        <div id="confetti-container"></div>
    </div>

    <script src="Quiz1.js"></script>
</body>
</html>
