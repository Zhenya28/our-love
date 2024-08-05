const galleryButton = document.getElementById('galleryButton');
const mediaContainer = document.getElementById('mediaContainer');
const startQuizButton = document.getElementById('startQuizButton');
const quizContainer = document.getElementById('quizContainer');
const closeQuizButton = document.getElementById('closeQuizButton');
const quizQuestion = document.getElementById('quizQuestion');
const quizChoices = document.getElementById('quizChoices');
const quizResultMessage = document.getElementById('quizResultMessage');
const nextQuestionButton = document.getElementById('nextQuestionButton');
const toggleReasonsButton = document.getElementById('toggleReasonsButton');
const reasonsList = document.getElementById('reasonsList');

// Показати або приховати галерею
galleryButton.addEventListener('click', function() {
    mediaContainer.style.display = mediaContainer.style.display === 'none' ? 'grid' : 'none';
});

// Запустити вікторину
startQuizButton.addEventListener('click', function() {
    quizContainer.style.display = 'block';
    startQuiz();
});

// Закрити вікторину
closeQuizButton.addEventListener('click', function() {
    quizContainer.style.display = 'none';
    resetQuiz();
});

// Показати або приховати причини
toggleReasonsButton.addEventListener('click', function() {
    reasonsList.style.display = reasonsList.style.display === 'none' ? 'block' : 'none';
    toggleReasonsButton.textContent = reasonsList.style.display === 'block' ? 'Ukryj powody' : 'Zobacz powody';
});

// Запитання для вікторини
const questions = [
    {
        question: "Gdzie odbyła się nasza pierwsza randka?",
        choices: ["W kinie", "W parku", "W restauracji", "Na plaży"],
        answer: "W kinie"
    },
    {
        question: "Jakie jest ulubione danie Klaudii?",
        choices: ["Pizza", "Sushi", "Spaghetti", "Burgery"],
        answer: "Sushi"
    },
    {
        question: "Jak długo jesteśmy razem?",
        choices: ["1 rok", "2 lata", "3 lata", "4 lata"],
        answer: "2 lata"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Розпочати вікторину
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextQuestionButton.style.display = 'none';
    quizResultMessage.textContent = '';
    showQuestion();
}

// Показати запитання
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizQuestion.textContent = currentQuestion.question;
    quizChoices.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choiceButton');
        button.addEventListener('click', () => selectAnswer(choice));
        quizChoices.appendChild(button);
    });
}

// Вибір відповіді
function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
        score++;
    }
    nextQuestionButton.style.display = 'block';
}

// Показати наступне запитання або результат
nextQuestionButton.addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Показати результат
function showResult() {
    quizQuestion.textContent = '';
    quizChoices.innerHTML = '';
    quizResultMessage.textContent = `Twój wynik to: ${score} z ${questions.length}`;
    nextQuestionButton.style.display = 'none';
}

// Скинути вікторину
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizQuestion.textContent = '';
    quizChoices.innerHTML = '';
    quizResultMessage.textContent = '';
    nextQuestionButton.style.display = 'none';
}

