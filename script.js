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
            question: "Przy pierwszym spotkaniu jakie takie słowo powiedziałem, że się śmiałaś ze mnie?",
            choices: ["Sigmówka", "Mrawka", "Bdżoła"],
            correct: 1,
        },
        {
            question: "Kto pierwszy powiedział „kocham cię”?",
            choices: ["Ja", "Ty", "Bóbr"],
            correct: 0,
        },
        {
            question: "Nasza z tobą ulubiona piosenka i kiedy ona leci to głos sobie zrywamy?",
            choices: ["The Weeknd - Call Out My Name", "Diamonds - Rihanna", "Chase Atlantic - Friends"],
            correct: 1,
        },
        {
            question: "Nasza z tobą rocznica to?",
            choices: ["19.09.2023", "18.09.2023", "20.09.2023"],
            correct: 0,
        },
        {
            question: "Ile najwięcej dni spędzałem z tobą z rzędu?",
            choices: ["7", "8", "9"],
            correct: 2,
        },
        {
            question: "Nasz pierwszy pocałunek był?",
            choices: ["Nad Jeziorem", "Obok Pałacu Kultury", "Na PKP"],
            correct: 2,
        },
        {
            question: "Dla czego tak bardzo pasujemy do siebie?",
            choices: ["Prawdziwa miłość", "Mam dużego…", "Kasa"],
            correct: 1,
        },
        {
            question: "Kiedy chcemy mieć pierwsze dziecko(twój wiek)?",
            choices: ["28", "29", "30"],
            correct: 2,
        },
        {
            question: "Nasz ulubiony z tobą film?",
            choices: ["Piękna katastrofa", "3 metry nad niebem", "Giganci ze stali"],
            correct: 1,
        },
        {
            question: "Jak najczęściej siebie nazywamy?",
            choices: ["Pysi", "Kotek", "Misio"],
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
            finishQuiz();
        }
    });

    finishQuizButton.addEventListener("click", finishQuiz);

    function finishQuiz() {
        quizGame.style.display = "none";
        const resultMessage = `Twój wynik: ${score} z ${quizData.length}`;
        quizResultMessage.innerText = resultMessage;
        quizResultMessage.style.display = "block";
        showConfetti();
    }

    function showConfetti() {
        const confetti = new ConfettiGenerator({ target: 'confetti', width: window.innerWidth, height: window.innerHeight });
        confetti.render();
        setTimeout(() => confetti.clear(), 5000);
    }
});



