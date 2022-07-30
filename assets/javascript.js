const startButton = document.getElementById("button");
var timer = document.getElementById("timer");
var hidden = document.getElementById("main");
var questionSetContainer = document.querySelector("section");
var secondsLeft = 300;

startButton.addEventListener("click", startGame);

var Quiz = [
    {
        question: "This is question 1",
        answers: {
            1: "This is choice 1",
            2: "This is choice 2",
            3: "This is choice 3",
            4: "This is choice 4"
        }
    }
]

function startGame() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timer.innerHTML = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000);
    hidden.classList.add("hide");
    questionSetContainer.classList.remove("hidden");

}
// Button test
// document.getElementById("button").addEventListener("click", function () {
//     prompt("hello");
// });

// function disappear() {
//     hidden.style.display = "none";
//     const h1 = document.createElement("h1");
//     h1.innerText = Quiz.question;
//     document.body.appendChild(h1);
//     const listedAnswers = document.createElement("ol");
//     listedAnswers.innerText = Quiz.answers;
//     document.body.appendChild(listedAnswers);
// }