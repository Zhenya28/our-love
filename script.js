document.addEventListener("DOMContentLoaded", () => {
    const galleryButton = document.getElementById("galleryButton");
    const mediaContainer = document.getElementById("mediaContainer");
    const startQuizButton = document.getElementById("startQuizButton");
    const quizGame = document.getElementById("quizGame");
    const closeButton = document.getElementById("closeButton");
    
    galleryButton.addEventListener("click", () => {
        mediaContainer.style.display = mediaContainer.style.display === "none" ? "grid" : "none";
    });

    startQuizButton.addEventListener("click", () => {
        quizGame.style.display = "block";
        loadQuiz();
    });

    closeButton.addEventListener("click", () => {
        quizGame.style.display = "none";
    });
    
    // Конфігурація для вікторини
    const quizData = [
        {
            question: "Gdzie się poznaliśmy?",
            choices: ["W szkole", "W pracy", "Na imprezie", "W parku"],
            correct: 2,
        },
        {
            question: "Jakie jest nasze ulubione wspólne zajęcie?",
            choices: ["Kino", "Spacer", "Gotowanie", "Podróżowanie"],
            correct: 3,
        },
        {
            question: "Którego dnia się zaręczyliśmy?",
            choices: ["14 lutego", "24 grudnia", "10 kwietnia", "1 stycznia"],
            correct: 0,
        },
    ];

    let currentQuizIndex = 0;
    let score = 0;
    
    const quizContainer = document.getElementById("quizContainer");
    const quizQuestion = document.getElementById("quizQuestion");
    const quizChoices = document.getElementById("quizChoices");
    const nextQuizButton = document.getElementById("nextQuizButton");
    const finishQuizButton = document.getElementById("finishQuizButton");
    const quizResultMessage = document.getElementById("quizResultMessage");

    function loadQuiz() {
        const currentQuiz = quizData[currentQuizIndex];
        quizQuestion.innerText = currentQuiz.question;
        quizChoices.innerHTML = "";
        currentQuiz.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.innerText = choice;
            button.classList.add("choiceButton");
            button.addEventListener("click", () => checkAnswer(index, button));
            quizChoices.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex, button) {
        const currentQuiz = quizData[currentQuizIndex];
        if (selectedIndex === currentQuiz.correct) {
            score++;
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
            document.querySelectorAll(".choiceButton")[currentQuiz.correct].style.backgroundColor = "green";
        }
        currentQuizIndex++;
        nextQuizButton.style.display = "block";
        document.querySelectorAll(".choiceButton").forEach(btn => btn.disabled = true);
    }

    nextQuizButton.addEventListener("click", () => {
        if (currentQuizIndex < quizData.length) {
            loadQuiz();
            nextQuizButton.style.display = "none";
        } else {
            showResults();
        }
    });

    finishQuizButton.addEventListener("click", () => {
        quizGame.style.display = "none";
        quizContainer.style.display = "block";
        finishQuizButton.style.display = "none";
        quizResultMessage.style.display = "none";
        currentQuizIndex = 0;
        score = 0;
    });

    function showResults() {
        quizContainer.style.display = "none";
        finishQuizButton.style.display = "block";
        quizResultMessage.innerText = `Twój wynik: ${score} z ${quizData.length}`;
        quizResultMessage.style.display = "block";
        if (score === quizData.length) {
            showConfetti();
        }
    }

    function showConfetti() {
        const confettiElement = document.getElementById("confetti");
        confettiElement.style.display = "block";
        confetti({
            element: confettiElement,
            spread: 70,
            startVelocity: 30,
            particleCount: 100,
            decay: 0.9,
        });
        setTimeout(() => {
            confettiElement.style.display = "none";
        }, 3000);
    }
});


