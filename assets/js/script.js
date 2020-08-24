// timer for quiz
var x = setInterval(function() {
    var distance = '';
    var countDownDate = new Date("00:00:00").getTime();
    
    // Time calculations for seconds
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Time is up!";
    }
  }, 1000);

// var pageContentE1 = document.querySelector("#page-content");

// quiz questions section
var quizQuestions = [{
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
    var i;
    var j;
    for ( i = 0; i <quizQuestions.length; i++) {
        document.getElementById("quizQ").innerHTML += 'form id="question' + (i+1) + ':' + quizQuestions[i].answers;
    }

    for ( j = 0; j < quizQuestions[i].answers.length; j++) {
        document.forms[i].innerHTML += '</div><div class="answer"><input name="q1" value="'+ quizQuestions[i].answers[j] +'" id="value4" type="button" />' + quizQuestions[i].answers[j] + '<br/>';
     }
        document.getElementById("questions").innerHTML +='</form><br/><br/>';
        }

        document.getElementById("questions").innerHTML += '<button onclick="solveQuiz()">Solve Quiz</button>';


function solveQuiz(){
    var x;
    var txt = '';
    var i = 0;
    var correct = 0; 
    for(i = 0; i < document.forms.length;i++) { 
        x = document.forms[i]; 
        for(j = 0; j<x.length; j++){
        if(x[j].checked) { 
            correctAnswer = quizQuestions[i].correctAnswer;
            if(x[j].value == quizQuestions[i].answers[correctAnswer]){
            correct += 1;
            }
        }
        }
    }
    document.getElementById("questions").innerHTML += 'Correct answers: '+ correct;
} 


startQuiz.addEventListener('click', startQuiz)
