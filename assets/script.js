//call html elements:
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");

var questionsScreen = document.querySelector("#questions-Screen");
var timeEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choiceEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var index = 0;
var score = 0;

var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");

var secondsLeft = 10;

var theQuestions = [
    {
        question: "are birds real",
        choices: ["A: yes", "B: no", "C: maybe", "D: idk"],
        correct: "B: no"
    },
    {
        question: "beep boop",
        choices: ["A: agfdg", "B: nadg", "C:agdg e", "D: iadg"],
        correct: "D: iadg"
    },
    {
        question: "jshigafduhga",
        choices: ["A: yes", "B: no", "C: mdagdgdfgdbe", "D: idk"],
        correct: "C: mdagdgdfgdbe"
    },


];

startButton.addEventListener("click", () => {
    startGame();
});


function startGame() {
    clearStartScreen();
    countdown();
    getQuestions();
}

function clearStartScreen() {
    startScreen.setAttribute("class", "hide");
    questionsScreen.classList.remove("hide");
}


function countdown() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === -1) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);

}


function getQuestions() {

    theQuestions.textContent = "";
    questionsEl.textContent = "";

    var questionsVisable = document.createElement("h1");
    questionsVisable.setAttribute("id", "show");
    questionsEl.appendChild(questionsVisable);
    document.getElementById("show").textContent = theQuestions[index].question;

    for (var i = 0; i < theQuestions[index].choices.length; i++) {
        var choicesVisable = document.createElement("li");
        choicesVisable.setAttribute("id", theQuestions[index].choices[i]);
        choiceEl.appendChild(choicesVisable);
        choicesVisable.append(theQuestions[index].choices[i]);

        choicesVisable.addEventListener("click", function (event) {
            if (event.target.id = theQuestions[index].correct) {
                resultEl.textContent = "correct";
                score += 10;
                console.log("correct");
            }
            else{
                resultEl.textContent = "incorrect";
                secondsLeft -= 10;
                console.log("incorrect");
            }
            nextQuestion();

        })

    }
}

function nextQuestion(){
    index ++;
    resultEl.textContent = "";
    choiceEl.textContent = "";

    if(index < theQuestions.length){
    getQuestions();
    }
    else if(index == theQuestions.length){
    endGame();
    }
}

    function endGame() {
        console.log("game over");
        questionsScreen.setAttribute("class", "hide");
        endScreen.classList.remove("hide"); 
        
        submit.addEventListener("click", () => {
            ;
        });
    }

    function renderScoreboard() {
        clearStartScreen();

        // renders scores and initials from local storage (use for loop and array)

    }

//btnEl.onClick('click', questionClick)



