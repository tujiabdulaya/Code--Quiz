var startBtn = document.getElementById('start')
var time = document.getElementById('timer')
var timer 
var countDown = 60
var question = document.getElementById('question')
var questionsContainer = document.getElementsByClassName('questions-container')




// var hi = "hi"

function startQuiz() {
    console.log ('the button got clicked');
timer = setInterval(function() {
    if (countDown > 0){
        countDown--
        time.textContent = countDown

    }
},1000)
}

startBtn.addEventListener('click', startQuiz)

 var questions = [
    {
        question: "What is the capital of New York?", answers: ["Minnepolis", "Seattle", "Albany"], correctAnswer: "Albany"
    },
    {
        question: "What is the capital of Texas?", answers: ["Minnepolis", "Austin", "Albany"], correctAnswer: "Austin"
    },
    {
        question: "What is the capital of Minnesota?", answers: ["Minnepolis", "St.Paul", "Albany"], correctAnswer: "St.Paul"
    },
    {
        question: "What is the capital of Ohio?", answers: ["Columbus", "Seattle", "Albany"], correctAnswer: "Columbus"
    }
 ]