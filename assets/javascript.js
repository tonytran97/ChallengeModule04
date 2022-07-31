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
}

// Button test
// document.getElementById("button").addEventListener("click", function () {
//     prompt("hello");
// });
