document.getElementById("galleryButton").onclick = function() {
    const mediaContainer = document.getElementById("mediaContainer");
    mediaContainer.style.display = mediaContainer.style.display === "none" ? "block" : "none";
};

document.getElementById("startQuizButton").onclick = function() {
    document.getElementById("quizGame").style.display = "block";
    startQuiz();
};

document.getElementById("closeButton").onclick = function() {
    document.getElementById("quizGame").style.display = "none";
};

let currentQuestionIndex = 0;
let quizQuestions = [
    { question: "Jakie jest ulubione jedzenie Żeni?", choices: ["Pizza", "Sushi", "Pierogi"], answer: 0 },
    { question: "Gdzie Żenia chciałby pojechać na wakacje?", choices: ["Grecja", "Włochy", "Hiszpania"], answer: 1 },
    { question: "Jakie jest ulubione hobby Żeni?", choices: ["Gry komputerowe", "Czytanie", "Bieganie"], answer: 2 }
];

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("quizQuestion");
    const choicesElement = document.getElementById("quizChoices");
    const nextButton = document.getElementById("nextQuizButton");
    const finishButton = document.getElementById("finishQuizButton");

    questionElement.textContent = quizQuestions[currentQuestionIndex].question;
    choicesElement.innerHTML = "";

    quizQuestions[currentQuestionIndex].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectChoice(index);
        choicesElement.appendChild(button);
    });

    nextButton.style.display = "none";
    finishButton.style.display = "none";
}

function selectChoice(index) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    const resultMessage = document.getElementById("quizResultMessage");

    if (index === correctAnswer) {
        resultMessage.textContent = "Dobrze!";
    } else {
        resultMessage.textContent = "Źle!";
    }

    currentQuestionIndex++;
    const nextButton = document.getElementById("nextQuizButton");
    const finishButton = document.getElementById("finishQuizButton");

    if (currentQuestionIndex < quizQuestions.length) {
        nextButton.style.display = "block";
    } else {
        finishButton.style.display = "block";
        nextButton.style.display = "none";
    }
}

document.getElementById("nextQuizButton").onclick = function() {
    showQuestion();
};

document.getElementById("finishQuizButton").onclick = function() {
    document.getElementById("quizGame").style.display = "none";
    alert("Dziękuję za udział w quizie!");
};

