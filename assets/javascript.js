const startButton = document.getElementById("button");
var timer = document.getElementById("timer");
var secondsLeft = 300;
var hidden = document.getElementById("main");
var questionSetContainer = document.querySelector("section");
var questionEl = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

startButton.addEventListener("click", startGame);

var questionSeries = [
    {
        question1: "Commonly used data types DO Not include: ",
        answers1:
            ["string", "booleans", "alerts", "numbers"]

    },
    {
        question2: "The condition in an if/else statement is enclosed with ________",
        answers2:
            ["quotes", "curly brackets", "parenthesis", "square brackets"]

    },
    {
        question3: "Arrays in JavaScript can be used to store ___________.",
        answers3: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    },
    {
        question4: "String values must be enclosed within ______ when being assigned to variables.",
        answers4: ["commas", "curly brackets", "quotes", "parenthesis"]
    },
    {
        question5: "A very useful too used during development and debugging for printing content to the debugger is:",
        answers5: ["JavaScript", "terminal/bash", "for loops", "console log"]
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
    nextQuestion();
}

function nextQuestion() {
    questionEl.innerHTML = questionSeries[0].question1;
    option1.innerHTML = questionSeries[0].answers1[0];
    option2.innerHTML = questionSeries[0].answers1[1];
    option3.innerHTML = questionSeries[0].answers1[2];
    option4.innerHTML = questionSeries[0].answers1[3];
    option1.addEventListener("click", nextQuestion2);
}

function resetButtons() {
    questionEl.innerHTML = "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
}

function nextQuestion2() {
    resetButtons;
    questionEl.innerHTML = questionSeries[1].question2;
    option1.innerHTML = questionSeries[1].answers2[0];
    option2.innerHTML = questionSeries[1].answers2[1];
    option3.innerHTML = questionSeries[1].answers2[2];
    option4.innerHTML = questionSeries[1].answers2[3];
    option1.addEventListener("click", nextQuestion3);
}

function nextQuestion3() {
    resetButtons;
    questionEl.innerHTML = questionSeries[2].question3;
    option1.innerHTML = questionSeries[2].answers3[0];
    option2.innerHTML = questionSeries[2].answers3[1];
    option3.innerHTML = questionSeries[2].answers3[2];
    option4.innerHTML = questionSeries[2].answers3[3];
    option1.addEventListener("click", nextQuestion4);
}

function nextQuestion4() {
    resetButtons;
    questionEl.innerHTML = questionSeries[3].question4;
    option1.innerHTML = questionSeries[3].answers4[0];
    option2.innerHTML = questionSeries[3].answers4[1];
    option3.innerHTML = questionSeries[3].answers4[2];
    option4.innerHTML = questionSeries[3].answers4[3];
    option1.addEventListener("click", nextQuestion5);
}

function nextQuestion5() {
    resetButtons;
    questionEl.innerHTML = questionSeries[4].question5;
    option1.innerHTML = questionSeries[4].answers5[0];
    option2.innerHTML = questionSeries[4].answers5[1];
    option3.innerHTML = questionSeries[4].answers5[2];
    option4.innerHTML = questionSeries[4].answers5[3];
}


// Button test
// document.getElementById("button").addEventListener("click", function () {
//     prompt("hello");
// });
