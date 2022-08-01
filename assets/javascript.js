const startButton = document.getElementById("quizButton");
var timer = document.getElementById("timer");
var secondsLeft = 300;
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

function startGame(event) {
    event.preventDefault();
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timer.innerHTML = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timeInterval);
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

        console.log("+10");
    } else {
        console.log("-10");
    }
    resetButtons();
    currentQuestion++;
    if (currentQuestion < questionSeries.length) {
        nextQuestion();
    } else {
        gameOver();
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

function gameOver() {
    questionSetContainer.classList.add("hidden");
    hidden.classList.remove("hide");
    preClear.classList.add("hidden");
    h1.remove();
    h2.remove();
    startButton.remove();
    var gameOverBox = document.createElement("div");
    var gameOverText = document.createTextNode("GameOver!");
    hidden.appendChild(gameOverBox);
    gameOverBox.appendChild(gameOverText);
    gameOverBox.style.fontSize = "5vh";
}