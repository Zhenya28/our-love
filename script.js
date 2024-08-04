const galleryButton = document.getElementById('galleryButton');
const mediaContainer = document.getElementById('mediaContainer');
const startQuizButton = document.getElementById("startQuizButton");
const quizGame = document.getElementById("quizGame");
const quizQuestion = document.getElementById("quizQuestion");
const quizChoices = document.getElementById("quizChoices");
const nextQuizButton = document.getElementById("nextQuizButton");
const quizResultMessage = document.getElementById("quizResultMessage");
const confettiContainer = document.getElementById("confetti");
const closeButton = document.createElement('div'); // Додаємо кнопку закриття
let finishQuizButton;

let currentQuizIndex = 0;
const quizQuestions = [
    {
        question: "Jakie jest ulubione jedzenie Twojej drugiej połówki?",
        choices: [
            "Pizza",
            "Sushi",
            "Czekolada",
            "Sałatka"
        ]
    },
    {
        question: "Gdzie odbyła się Wasza pierwsza randka?",
        choices: [
            "W restauracji",
            "W kinie",
            "Na spacerze",
            "W parku"
        ]
    },
    {
        question: "Jaki film uwielbia oglądać Twoja druga połówka?",
        choices: [
            "Romantyczny",
            "Komedia",
            "Dramat",
            "Akcja"
        ]
    },
    {
        question: "Jakie jest ulubione miejsce wakacyjne Twojej drugiej połówki?",
        choices: [
            "Morze",
            "Góry",
            "Miasto",
            "Wieś"
        ]
    },
    {
        question: "Jakie hobby ma Twoja druga połówka?",
        choices: [
            "Sport",
            "Gotowanie",
            "Muzyka",
            "Sztuka"
        ]
    }
];

galleryButton.addEventListener('click', () => {
    mediaContainer.style.display = mediaContainer.style.display === 'none' ? 'grid' : 'none';
});

startQuizButton.addEventListener("click", () => {
    quizGame.style.display = "block";
    startQuizButton.style.display = "none";
    currentQuizIndex = 0;
    showQuizQuestion();
});

// Додаємо хрестик для закриття гри
closeButton.innerHTML = "&#10006;"; // HTML код для хрестика
closeButton.classList.add('close-button'); // Додаємо клас
closeButton.addEventListener('click', finishQuiz); // Обробник подій для закриття
quizGame.appendChild(closeButton); // Додаємо хрестик до квізу

nextQuizButton.addEventListener("click", () => {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
        showQuizQuestion();
    } else {
        showQuizResult();
    }
});

function showQuizQuestion() {
    quizQuestion.innerText = quizQuestions[currentQuizIndex].question;
    quizChoices.innerHTML = '';
    quizQuestions[currentQuizIndex].choices.forEach((choice) => {
        quizChoices.innerHTML += 
            `<div class="choice">${choice}</div>`;
    });
    nextQuizButton.style.display = "none"; // Сховати кнопку "Далі" до вибору варіанту

    // Додати обробник подій до варіантів
    document.querySelectorAll('.choice').forEach((choice) => {
        choice.addEventListener('click', function() {
            // Скинути вибір для всіх варіантів
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            // Додати клас 'selected' до вибраної відповіді
            this.classList.add('selected'); 
            nextQuizButton.style.display = "block"; // Показати кнопку "Далі" при виборі
        });
    });
}

function showQuizResult() {
    quizQuestion.innerText = "Twój wynik:"; // Заголовок результату
    quizChoices.innerHTML = '';
    quizResultMessage.innerText = "Dziękujemy za udział w quizie! Zdradzisz miłość z nowym uczuciem!"; // Текст результату
    nextQuizButton.style.display = "none"; // Сховати кнопку "Далі"

    // Додаємо кнопку "Zakończ"
    finishQuizButton = document.createElement('button');
    finishQuizButton.innerText = "Zakończ";
    finishQuizButton.id = "finishQuizButton";
    finishQuizButton.style.marginTop = "20px"; // Відступ для кнопки
    finishQuizButton.addEventListener('click', finishQuiz); // Обробник подій для завершення
    quizGame.appendChild(finishQuizButton); // Додаємо кнопку до квізу

    showConfetti();
}

function finishQuiz() {
    quizGame.style.display = "none"; // Сховати квіз
    confettiContainer.style.display = "none"; // Сховати конфетті
    finishQuizButton?.remove(); // Видалити кнопку завершення, якщо вона існує
    startQuizButton.style.display = "block"; // Показати кнопку "Zagraj w quiz!" після завершення
}

function showConfetti() {
    confettiContainer.style.display = "block";
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti-piece");
    confettiPiece.style.left = Math.random() * 100 + "vw"; // Випадкове положення по горизонталі
    confettiPiece.style.backgroundColor = getRandomColor(); // Випадковий колір
    confettiContainer.appendChild(confettiPiece);

    // Удаление конфетті через 3 секунди
    setTimeout(() => {
        confettiPiece.remove();
    }, 3000);
}

function getRandomColor() {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}
