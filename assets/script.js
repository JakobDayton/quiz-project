var questions = [
    {
    qNo: 1,
    question: "are birds real",
    choices: [
        { text: "yes", correct: false},
        { text: "no", correct: true},
        { text: "maybe", correct: false},
        { text: "idk", correct: false},
    ],
    },
    {
    qNo: 2,
    question: "are birds real",
    choices: [
        { text: "yes", correct: false},
        { text: "no", correct: true},
        { text: "maybe", correct: false},
        { text: "idk", correct: false},
    ],
    },
    {
    qNo: 3,
    question: "are birds real",
    choices: [
        { text: "yes", correct: false},
        { text: "no", correct: true},
        { text: "maybe", correct: false},
        { text: "idk", correct: false},
    ],
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
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");

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


function getQuestions(qNo){
    var index = 0;
    questionsEl.textContent = questions.questions;
    console.log(questions);
    questionsEl.setAttribute("class", "show");
    questions.choices.forEach((choices) => {
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = choices.text;
        choiceBtn.classList.add("btn");
        if (choices.correct) {
            choiceBtn.dataset.correct = choices.correct;
        }
        choicesEl.appendChild(choiceBtn);
        choiceBtn.addEventListener("click", getAnswer);
    })

    questionsEl = questions[index].choices;


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

