var startBtn = document.getElementById('start')
var time = document.getElementById('timer')
var timer 
var countDown = 60
var questionEl = document.getElementById('question')
var questionsContainer = document.getElementsByClassName('questions-container')
var questionIndex = 0



// var hi = "hi"

function startQuiz() {
    var quizStartScreen = document.getElementById('display-content')
    quizStartScreen.setAttribute('show','hide')
    console.log ('the button got clicked');
timer = setInterval(function() {
    if (countDown > 0){
        countDown--
        time.textContent = countDown

    }
},1000)
loadQuestion()
}

startBtn.addEventListener('click', startQuiz)

 var questionList = [
    {
        question: "What is the capital of New York?", answers: ["Phoenix", "Seattle", "Albany"], correctAnswer: "Albany"
    },
    {
        question: "What is the capital of Texas?", answers: ["Los Angeles", "Austin", "Huston"], correctAnswer: "Austin"
    },
    {
        question: "What is the capital of Minnesota?", answers: ["Minnepolis", "St.Paul", "Duluth"], correctAnswer: "St.Paul"
    },
    {
        question: "What is the capital of Ohio?", answers: ["Columbus", "Seattle", "Cleveland"], correctAnswer: "Columbus"
    }
 ]

 function loadQuestion (){
    questionEl.innerText = questionList[questionIndex].question
    questionList[questionIndex].answers.forEach((answer)=>{

    })
 }

 function endQuiz () {


 }


 function highScore() {
    
 }

