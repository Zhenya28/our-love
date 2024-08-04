document.addEventListener('DOMContentLoaded', () => {
    const loveGameButton = document.getElementById('loveGameButton');
    const loveGameContainer = document.getElementById('loveGame');
    const closeGameButton = document.getElementById('closeGame');
    const questionContainer = document.getElementById('questionContainer');
    const answerInput = document.getElementById('answerInput');
    const submitAnswerButton = document.getElementById('submitAnswer');
    const resultMessage = document.getElementById('resultMessage');
    const galleryButton = document.getElementById('galleryButton');
    const mediaContainer = document.getElementById('mediaContainer');

    const questions = [
        { question: "Jakie jest moje ulubione wspomnienie z nami?", answer: "wspomnienie 1" },
        { question: "Jakie jest moje ulubione jedzenie, które jemy razem?", answer: "pasta" },
        { question: "Gdzie po raz pierwszy się spotkaliśmy?", answer: "kawiarnia" },
        { question: "Jakie jest moje ulubione miejsce na wakacje?", answer: "plaża" },
        { question: "Jaki film lubimy oglądać razem?", answer: "nazwa filmu" },
        { question: "Jakie jest moje ulubione zwierzę?", answer: "kot" },
        { question: "Jakie jest moje ulubione hobby?", answer: "gra na gitarze" },
        { question: "Jakie jest moje ulubione miejsce w naszym mieście?", answer: "park" },
        { question: "Co chciałbym zrobić w przyszłości?", answer: "podróżować" },
        { question: "Jaka jest moja ulubiona piosenka?", answer: "nazwa piosenki" },
    ];

    let currentQuestionIndex = 0;

    loveGameButton.addEventListener('click', () => {
        loveGameContainer.style.display = 'block'; // Показати гру
        loadQuestion();
    });

    closeGameButton.addEventListener('click', () => {
        loveGameContainer.style.display = 'none'; // Сховати гру
        answerInput.value = ''; // Очистити поле вводу
        resultMessage.textContent = ''; // Очистити повідомлення
        currentQuestionIndex = 0; // Скинути індекс питання
    });

    submitAnswerButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.toLowerCase();
        const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            resultMessage.textContent = 'Brawo! Zgadłeś poprawną odpowiedź! 🎉';
            currentQuestionIndex++;
            loadQuestion();
        } else {
            resultMessage.textContent = 'Spróbuj ponownie!';
        }
    });

    galleryButton.addEventListener('click', () => {
        if (mediaContainer.style.display === 'none') {
            mediaContainer.style.display = 'grid'; // Показати галерею
            galleryButton.textContent = 'Ukryj Galerię';
        } else {
            mediaContainer.style.display = 'none'; // Сховати галерею
            galleryButton.textContent = 'Nasza Galeria';
        }
    });

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            questionContainer.textContent = questions[currentQuestionIndex].question;
            answerInput.value = ''; // Очистити поле вводу
            resultMessage.textContent = ''; // Очистити повідомлення
        } else {
            questionContainer.textContent = 'Gratulacje! Odpowiedziałeś na wszystkie pytania! ❤️';
            submitAnswerButton.disabled = true; // Вимкнути кнопку
        }
    }
});
