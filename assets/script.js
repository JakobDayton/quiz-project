var questions = [
    {
    question: "are birds real",
    choices: ["yes", "no", "maybe", "bird noises"],
    answer: "no"
    },
    {
    question: "are birds real",
    choices: ["yes", "no", "maybe", "bird noises"],
    answer: "no"
    },
    {
    question: "are birds real",
    choices: ["yes", "no", "maybe", "bird noises"],
    answer: "no"
    },
    {
    question: "are birds real",
    choices: ["yes", "no", "maybe", "bird noises"],
    answer: "no"
    },
    {
    question: "are birds real",
    choices: ["yes", "no", "maybe", "bird noises"],
    answer: "no"
    }
      
];

//call html elements EX:
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var titleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("choices");
var timeEl = document.querySelector("#timer");
var endScreen = document.querySelector("#end-screen");

var secondsLeft = 100;


startButton.addEventListener("click", function(){
    startGame();
});


function startGame(){
    clearStartScreen();
    countdown();
    getQuestions();
}

function clearStartScreen(){
    startScreen.setAttribute("class", "hide");
}


function countdown(){

    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            endgame();
        }

    }, 1000);

}


function getQuestions(){

    var index = 0;

    questionsEl.remove("class", "hide");

    questionsEl = questions[index].choices;

    nextQuestion();

    for (var i = 0; i < questions.length; i++){
        
    }
/*
        
        var index = 0;

        get question object at index 0
        questions[i].choices

        

        nextQuestion();

        for loop to get choices(
            
            create btnEl
            btnEl.text(choices[i])
            appendChild
        )
        

    }*/
}
/*

questionClick(){
    event.target

    if choice is false(
        time = time - 10;
        question index++
    )

    if choice is true(
        question index++
    )

    };

   

    check if we have more questions
    yes - get question
    no - endGame();

endGame(){
    clears quiz page

    get value for user initials + score

    array to set to local storage
};

renderScoreboard(){
    clearStartScreen();

    renders scores and initials from local storate (use for loop and array)

}

btnEl.onClick('click', questionClick)

*/

