// Hide Quiz container section until after startquiz
document.getElementById("quiz-container").innerHTML = "";

// timer for quiz
var timeDisplayLeft = document.getElementById('demo')
var quizButton = document.getElementById('startQuestions');
let timeLeft = 80

function countDown(){
    setInterval(function(){
        if (timeLeft > 0) {
            timeLeft -= 1;
            timeDisplayLeft.innerHTML = "Timer: " + timeLeft + " seconds left";
        }
        else if (timeLeft <= 0) {
            clearInterval(timeLeft = 0);
            timeDisplayLeft.innerHTML = "Time is up!";
            window.location.reload()
    }; 1000});
};

quizButton.addEventListener('click', countDown());

// Quiz Questions + Choices Section
var questions = [{
    quizQ: "What is the differences between Java and JavaScript?",
    answers: ["Both are a complete programming language.", "Both can only be rendered with HTML pages.", "Java is a complete language, JavaScript is not.", "JavaScript is a complete language, Java is not."],
    correctAnswer: 3
},
{
    quizQ: "What is not a JavaScript Data type",
    answers: ["Number", "Element", "Boolean", "Object"],
    correctAnswer: 2
},
{
    quizQ: "What is the difference between <code>==</code> and <code>===</code>?",
    answers: ["== is the strictest equality comparison operators", "both are the strictest equality comparison", "=== is the strictest quality comparison", "none"],
    correctAnswer: 3
},
{   
    quizQ: "What function returns true if the argument is not a number otherwise it is false?",
    answers: ["isNan", "Nan", "NaNis", "NanNan"],
    correctAnswer: 1
},
{
    quizQ: "Which company developed JavaScript?",
    answers: ["Microsoft", "Yahoo", "Netscape", "Apple"],
    correctAnswer: 3
},
{
    quizQ: "Which symbol is used for comments in Javascript?",
    answers: ["--", "//", "++", "~~"],
    correctAnswer: 2
},
{   
    quizQ: "What of the following is a looping structure in JavaScript?",
    answers: ["loopy", "for", "while-then", "loop-now"],
    correctAnswer: 2
}
];

function startQuiz() {
    // generate the questions for the quiz
    var questionText = document.getElementById('qquestion');

    for (var i = 0; i < questions.length; i++ ) {
        var question = questions[i].quizQ;
        questionText.innerHTML = questions[i].quizQ;
    
        // generate the multiple choice array for the quiz
        var choice0 = document.getElementById('choice0');
        var choice1 = document.getElementById('choice1');
        var choice2 = document.getElementById('choice2');
        var choice3 = document.getElementById('choice3');

        for (var i = 0; i < questions.length; i++ ) {
        var answers = questions[i].answers;
        var btn = document.createElement("BUTTON");
        choice0.innerHTML = "A. " + questions[i].answers[0];
        choice1.innerHTML = "B. " + questions[i].answers[1];
        choice2.innerHTML = "C. " + questions[i].answers[2];
        choice3.innerHTML = "D. " + questions[i].answers[3];

    };
        document.getElementById("buttonContainer").innerHTML = "";
        document.getElementById("container").innerHTML = "";
    }
};

startQuiz();

quizButton.addEventListener("click",startQuiz());