const questions = [
    {
        question: "What chemical element is designated as “Hg”?",
        options: ["Silver", "Tin", "Copper", "Mercury"],
        answer: "Silver"
    },
    {
        question: " Which planet in the solar system is known as the “Red Planet”?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Which organ in the human body is responsible for the secretion of bile?",
        options: ["Liver", "Kidney", "Spleen", "Stomach"],
        answer: "Liver"
    },
    {
        question: "What ocean is between Africa and Australia?",
        options: ["Pacific", "Indian", "Atlantic", "Arctic"],
        answer: "Indian"
    },
    {
        question: "What year was the Olympic Organization founded?",
        options: ["1886", "1896", "1900", "1902"],
        answer: "1896"
    }
];

let currentQuestionIndex = 0;
let userAnswers = {};

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const question = questions[currentQuestionIndex];

    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = option;
        input.checked = userAnswers[currentQuestionIndex] === option;

        input.onclick = () => {
            userAnswers[currentQuestionIndex] = option;
        };

        optionElement.appendChild(input);
        optionElement.appendChild(document.createTextNode(option));
        optionsElement.appendChild(optionElement);
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });
    document.getElementById("result").innerText = `You got ${score} out of ${questions.length} correct.`;
}

// Load the first question initially
window.onload = loadQuestion;
