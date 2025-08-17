const questions = [
    {
        question: "Qual é o habitat natural dos orangotangos?",
        image: "https://mediaim.expedia.com/destination/1/526b196644141a6836badd35e33a9655.jpg",
        answers: [
            { text: "Florestas tropicais da Ásia", correct: true },
            { text: "Savanas africanas", correct: false },
            { text: "Montanhas da Europa", correct: false },
            { text: "Desertos da Austrália", correct: false }
        ]
    },
    {
        question: "Quantas espécies de orangotangos existem?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Tanjung_Puting30477.jpg/960px-Tanjung_Puting30477.jpg",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        question: "O que os orangotangos mais comem?",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbhcTmeBLxFbW98utiHODoL9Q4FJZV8IsiA&s",
        answers: [
            { text: "Insetos apenas", correct: false },
            { text: "Carne de outros animais", correct: false },
            { text: "Peixes", correct: false },
            { text: "Folhas e frutas", correct: true }
        ]
    },
    {
        question: "Os orangotangos são animais:",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPTVvu0GNcmRezlyHaAHwRPicNJDfgwhzfA&s",
        answers: [
            { text: "Noturnos", correct: false },
            { text: "Diurnos", correct: true },
            { text: "Aquáticos", correct: false },
            { text: "Subterrâneos", correct: false }
        ]
    }
];

const questionEl = document.getElementById('question');
const imageEl = document.getElementById('question-image');
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
    imageEl.src = currentQuestion.image;  // mostra a imagem da pergunta
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
    questionEl.textContent = "Fim do Quiz! :) feito por Pedro Henrique e Arthur Enumo";
    imageEl.src = "https://www.anami.org.br/wp-content/uploads/2020/01/KATAI-6.jpg"; // esconde a imagem no fim
    answersEl.innerHTML = '';
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas! :3`;
    nextBtn.textContent = 'Jogar novamente 🦧';
    nextBtn.style.display = 'inline-block';
    nextBtn.addEventListener('click', startQuiz, { once: true });
}

// Inicia o quiz automaticamente
startQuiz();


