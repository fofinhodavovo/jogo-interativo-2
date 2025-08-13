const questions = [
    {
        question: "Qual é o habitat natural dos orangotangos?",
        answers: [
            { text: "Florestas tropicais da Ásia", correct: true },
            { text: "Savanas africanas", correct: false },
            { text: "Montanhas da Europa", correct: false },
            { text: "Desertos da Austrália", correct: false }
        ]
    },
    {
        question: "Quantas espécies de orangotangos existem?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        question: "O que os orangotangos mais comem?",
        answers: [
            { text: "Insetos apenas", correct: false },
            { text: "Carne de outros animais", correct: false },
            { text: "Peixes", correct: false },
            { text: "folhas e frutas", correct: true }
        ]
    },
    {
        question: "Os orangotangos são animais:",
        answers: [
            { text: "Noturnos ", correct: false },
            { text: "Diurnos ", correct: true },
            { text: "Aquáticos ", correct: false },
            { text: "Subterrâneos ", correct: false }
        ]
    }
];

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.style.display = 'none';
    scoreEl.textContent = '';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answersEl.appendChild(button);
    });
}

function selectAnswer(answer) {
    if(answer.correct) {
        score++;
    }
    Array.from(answersEl.children).forEach(button => {
        button.disabled = true;
        if(button.textContent === answer.text && answer.correct){
            button.style.backgroundColor = '#a5d6a7';
        } else if(button.textContent !== answer.text && button.textContent === questions[currentQuestionIndex].answers.find(a => a.correct).text){
            button.style.backgroundColor = '#a5d6a7';
        } else {
            button.style.backgroundColor = '#ef9a9a';
        }
    });
    nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        nextBtn.style.display = 'none';
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.textContent = "Fim do Quiz! :)";
    answersEl.innerHTML = '';
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas! :3`;
    nextBtn.textContent = 'Jogar novamente 🦧';
    nextBtn.style.display = 'inline-block';
    nextBtn.addEventListener('click', startQuiz, { once: true });
}

// Inicia o quiz automaticamente
startQuiz();

