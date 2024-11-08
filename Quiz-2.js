
let Questions = [
    {
        num: 1,
        question: "Identify the sign in the image",
        image: "assets/After.png",
        answer: "A. After",
        options: [
            "A. After",
            "B. Grow",
            "C. Okay",
            "D. Hello"
        ]
    },
    {
        num: 2,
        question: "Identify the sign in the image",
        image: "assets/Medicine.png", 
        answer: "C. Medicine",
        options: [
            "A. meditate",
            "B. floor",
            "C. Medicine",
            "D. Meeting"
        ]
    },
    {
        num: 3,
        question: "Identify the sign in the image",
        image: "assets/past or later.png",
        answer: "B. Past",
        options: [
            "A. Password",
            "B. Past",
            "C. Young",
            "D. future"
        ]
    },
    {
        num: 4,
        question: "Identify the sign in the image",
        image: "assets/person.png",
        answer: "D. Person",
        options: [
            "A. yes",
            "B. Your",
            "C. Super",
            "D. Person"
        ]
    },
    {
        num: 5,
        question: "Identify the sign in the image",
        image: "assets/plant seeds.png",
        answer: "D. Plant",
        options: [
            "A. No",
            "B. Quick",
            "C. Pain",
            "D. Plant"
        ]
    }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});

function showQuestion() {
    const questionElement = document.querySelector(".Question h2");
    const imageElement = document.querySelector(".question-image");
    const optionsElement = document.querySelector(".Option-list");
    const progressBar = document.querySelector(".progress-bar");

    const current = Questions[currentQuestion];

    questionElement.textContent = current.question;
    imageElement.src = current.image;
    optionsElement.innerHTML = "";

    current.options.forEach(option => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(optionDiv, option);
        optionsElement.appendChild(optionDiv);
    });

    document.querySelector(".Question-total").textContent = `${current.num} of ${Questions.length} Questions`;
    progressBar.style.width = `${(current.num / Questions.length) * 100}%`;
    document.querySelector(".btn-next").style.pointerEvents = "none"; // Disable Next button initially
}

function selectOption(selectedOption, selectedAnswer) {
    const correctAnswer = Questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        selectedOption.style.backgroundColor = "green";
        score++;
    } else {
        selectedOption.style.backgroundColor = "red";
        document.querySelectorAll(".option").forEach(option => {
            if (option.textContent === correctAnswer) {
                option.style.backgroundColor = "green";
            }
        });
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = null; // Disable further selection
    });

    document.querySelector(".btn-next").style.pointerEvents = "auto"; // Enable Next button
    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.querySelector(".Score").textContent = `Score: ${score}/${Questions.length}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < Questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".Quiz-box").style.display = "none";
    document.querySelector(".result-box").style.display = "flex";

    const scorePercentage = (score / Questions.length) * 100;
    document.querySelector(".result-percentage").textContent = `${scorePercentage}%`;
    document.querySelector(".result-score").textContent = `Your Score ${score} out of ${Questions.length}`;

    const circle = document.querySelector(".circle-progress");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scorePercentage / 100) * circumference;

    circle.style.strokeDashoffset = offset;

    if (scorePercentage >= 50) {
        document.getElementById("next-quiz-button").style.display = "block";
        document.getElementById("try-again-button").style.display = "none";
    } else {
        document.getElementById("try-again-button").style.display = "block";
        document.getElementById("next-quiz-button").style.display = "none";
    }

    document.getElementById('confetti-container').style.display = 'block';

    // Send quiz results to server
    submitQuizResults(score, Questions.length);
}

function submitQuizResults(score, totalQuestions) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit_quiz.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error("Failed to submit quiz result.");
        }
    };

    const quizName = "Quiz-2";
    const data = `quiz_name=${quizName}&score=${score}&total_questions=${totalQuestions}`;
    xhr.send(data);
}

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confettiContainer.appendChild(confetti);
    }
}
