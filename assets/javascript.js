const startButton = document.getElementById("quizButton");
var timer = document.getElementById("timer");
var secondsLeft = 100;
var hidden = document.getElementById("main");
var questionSetContainer = document.querySelector("section");
var questionEl = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var answerButtons = document.getElementById("answer-choices");
var preClear = document.querySelector("pre");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var recordScore = document.getElementById("score");
var bonus = 5;
var penalty = 10;
startButton.addEventListener("click", startGame);

var questionSeries = [
    {
        question: "Commonly used data types DO Not include: ",
        choices: ["string", "booleans", "alerts", "numbers"],
        correct: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed with ________",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        correct: "console log"
    }
];

var gameEnd = false;

function startGame(event) {
    event.preventDefault();
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timer.innerHTML = "Time: " + secondsLeft;
        if (secondsLeft === 0 || gameEnd == true) {
            clearInterval(timeInterval);
            return;
        }
    }, 1000);
    hidden.classList.add("hide");
    questionSetContainer.classList.remove("hidden");
    currentQuestion = 0
    showQuestion();
}

function showQuestion() {
    questionEl.innerHTML = questionSeries[currentQuestion].question;
    option1.innerHTML = questionSeries[currentQuestion].choices[0];
    option2.innerHTML = questionSeries[currentQuestion].choices[1];
    option3.innerHTML = questionSeries[currentQuestion].choices[2];
    option4.innerHTML = questionSeries[currentQuestion].choices[3];
    option1.addEventListener("click", answerChoice);
    option2.addEventListener("click", answerChoice);
    option3.addEventListener("click", answerChoice);
    option4.addEventListener("click", answerChoice);
}

function resetButtons() {
    questionEl.innerHTML = "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
}

function answerChoice(event) {
    var selectedAnswer = event.target.innerHTML;
    console.log(currentQuestion);
    if (questionSeries[currentQuestion].correct === selectedAnswer) {

        secondsLeft = secondsLeft + bonus;
    } else {
        secondsLeft = secondsLeft - penalty;
    }
    resetButtons();
    currentQuestion++;
    if (currentQuestion < questionSeries.length) {
        nextQuestion();
    } else {
        gameOver();
        gameEnd = true;
    }
}

function nextQuestion() {
    questionEl.innerHTML = questionSeries[currentQuestion].question;
    option1.innerHTML = questionSeries[currentQuestion].choices[0];
    option2.innerHTML = questionSeries[currentQuestion].choices[1];
    option3.innerHTML = questionSeries[currentQuestion].choices[2];
    option4.innerHTML = questionSeries[currentQuestion].choices[3];
    option1.addEventListener("click", answerChoice);
    option2.addEventListener("click", answerChoice);
    option3.addEventListener("click", answerChoice);
    option4.addEventListener("click", answerChoice);
}

initials = document.getElementById("initials");

function gameOver() {
    questionSetContainer.classList.add("hidden");
    hidden.classList.remove("hide");
    recordScore.classList.remove("hide");
    h1.innerHTML = "GameOver!";
    h2.innerHTML = "";
    preClear.innerHTML = "";
    startButton.innerHTML = "";
    var finalScore = document.createElement("p");
    timer.classList.add("hidden");
    gameEndScore = timer.innerHTML;
    var finalScoreText = document.createTextNode(gameEndScore);
    finalScore.appendChild(finalScoreText);
    h1.appendChild(finalScore);
    submitScore = document.getElementById("submitScore");
    submitScore.addEventListener("click", function (event) {
        event.preventDefault();
        var input = initials.value;
        console.log(input);
        localStorage.setItem("points", input);
        var storedPoints = localStorage.getItem("points");
        console.log(storedPoints);
    })

}