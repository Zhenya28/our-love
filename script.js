document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "Przy pierwszym spotkaniu jakie takie słowo powiedziałem że się śmiałaś ze mnie?",
            choices: ["Sigmówka", "Mrawka", "Bdżoła"],
            correctAnswer: 1
        },
        {
            question: "Kto pierwszy powiedział „kocham cię”?",
            choices: ["Ja", "Ty", "Bóbr"],
            correctAnswer: 0
        },
        {
            question: "Nasza z tobą ulubiona piosenka i kiedy ona leci to głos sobie zrywamy",
            choices: ["The weeknd - call out my name", "Diamonds - Rihanna", "Chase Atlantic - friends"],
            correctAnswer: 1
        },
        {
            question: "Nasza z tobą rocznica to",
            choices: ["19.09.2023", "18.09.2023", "20.09.2023"],
            correctAnswer: 0
        },
        {
            question: "Ile najwięcej dni spędzałem z tobą z rzędu",
            choices: ["7", "8", "9"],
            correctAnswer: 2
        },
        {
            question: "Nasz pierwszy pocałunek był",
            choices: ["Nad Jeziorem", "Obok Pałacu Kultury", "Na PKP"],
            correctAnswer: 2
        },
        {
            question: "Dla czego tak bardzo pasujemy do siebie",
            choices: ["Prawdziwa miłość", "Mam dużego…", "Kasa"],
            correctAnswer: 1
        },
        {
            question: "Kiedy chcemy mieć pierwsze dziecko(twój wiek)",
            choices: ["28", "29", "30"],
            correctAnswer: 2
        },
        {
            question: "Nasz ulubiony z tobą film",
            choices: ["Piękna katastrofa", "3 metry nad niebem", "Giganci ze stali"],
            correctAnswer: 1
        },
        {
            question: "Jak najczęściej siebie nazywamy",
            choices: ["Pysi", "Kotek", "Misio"],
            correctAnswer: 0
        }
    ];

    const galleryButton = document.getElementById('galleryButton');
    const mediaContainer = document.getElementById('mediaContainer');
    const startQuizButton = document.getElementById('startQuizButton');
    const quizGame = document.getElementById('quizGame');
    const quizQuestion = document.getElementById('quizQuestion');
    const quizChoices = document.getElementById('quizChoices');
    const nextQuizButton = document.getElementById('nextQuizButton');
    const finishQuizButton = document.getElementById('finishQuizButton');
    const quizResultMessage = document.getElementById('quizResultMessage');
    const closeButton = document.getElementById('closeButton');
    const confetti = document.getElementById('confetti');

    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    galleryButton.addEventListener('click', () => {
        mediaContainer.style.display = mediaContainer.style.display === 'none' ? 'block' : 'none';
    });

    startQuizButton.addEventListener('click', () => {
        quizGame.style.display = 'block';
        startQuizButton.style.display = 'none';
        displayQuestion();
    });

    nextQuizButton.addEventListener('click', () => {
        const selectedChoice = document.querySelector('input[name="quizChoice"]:checked');
        if (selectedChoice) {
            if (parseInt(selectedChoice.value) === quizData[currentQuestionIndex].correctAnswer) {
                correctAnswers++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                displayQuestion();
            } else {
                finishQuiz();
            }
        } else {
            alert('Proszę wybrać odpowiedź!');
        }
    });

    finishQuizButton.addEventListener('click', () => {
        quizGame.style.display = 'none';
        startQuizButton.style.display = 'block';
        currentQuestionIndex = 0;
        correctAnswers = 0;
        quizResultMessage.textContent = '';
    });

    closeButton.addEventListener('click', () => {
        quizGame.style.display = 'none';
    });

    function displayQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        quizQuestion.textContent = currentQuestion.question;
        quizChoices.innerHTML = '';
        currentQuestion.choices.forEach((choice, index) => {
            const choiceLabel = document.createElement('label');
            choiceLabel.innerHTML = `
                <input type="radio" name="quizChoice" value="${index}">
                ${choice}
            `;
            quizChoices.appendChild(choiceLabel);
        });
        nextQuizButton.style.display = 'block';
    }

    function finishQuiz() {
        quizQuestion.textContent = '';
        quizChoices.innerHTML = '';
        nextQuizButton.style.display = 'none';
        finishQuizButton.style.display = 'block';
        quizResultMessage.textContent = `Nieważne na ile poprawnych odpowiedzi odpowiedziałaś, twój wynik i tak 10, bo ty jesteś 10/10 😏❤️`;
        confetti.style.display = 'block';
        setTimeout(() => {
            confetti.style.display = 'none';
        }, 5000);
    }
});

