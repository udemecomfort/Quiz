const questions = [
    {
        question: "Pick the right property of a CSS Display?",
        answer: [
            {text: "Flex", correct: true},
            {text: "Arial-shadow", correct: false},
            {text: "display", correct: false},
            {text: "Content-line", correct: false},
            {text: "color", correct: false},
        ]
    },
    {
        question: "What tag is used in breaking lines/sentences in HTML?",
        answer: [
            {text: "em", correct: false},
            {text: "li", correct: false},
            {text: "br", correct: true},
            {text: "a", correct: false},
            {text: "color", correct: false},
        ]
    },
    {
        question: "Pick the right re-usable variable?",
        answer: [
            {text: "selector", correct: false},
            {text: "array", correct: false},
            {text: "const", correct: false},
            {text: "const-line", correct: false},
            {text: "let", correct: true},
        ]
    },
    {
        question: "What do you understand by (CSS)?",
        answer: [
            {text: "For styling", correct: true},
            {text: "For structure", correct: false},
            {text: "For luck", correct: false},
            {text: "Fun-line", correct: false},
            {text: "Enjoyment", correct: false},
        ]
    },
    {
        question: "Pick the right property of a CSS Display?",
        answer: [
            {text: "Flex", correct: true},
            {text: "Arial-shadow", correct: false},
            {text: "display", correct: false},
            {text: "Content-line", correct: false},
            {text: "color", correct: false},
        ]
    },
    {
        question: "Full meaning of FTP?",
        answer: [
            {text: "File Trophy protocol", correct: false},
            {text: "File transfering protocol", correct: false},
            {text: "File teleporting protocol", correct: false},
            {text: "File-line transfer protocol", correct: false},
            {text: "File transfer protocol", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! 🥳🎊🎉`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();