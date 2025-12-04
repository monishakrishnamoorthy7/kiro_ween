// ============================================
// QUIZ PAGE - HORROR-THEMED CODING QUIZ
// ============================================

const quizQuestions = [
    {
        question: "What does 'const' mean in JavaScript?",
        options: [
            "A variable that can be changed",
            "A variable that cannot be reassigned",
            "A function declaration",
            "A loop statement"
        ],
        correct: 1
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["shift()", "unshift()", "push()", "pop()"],
        correct: 2
    },
    {
        question: "What is the output of: typeof null",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        correct: 2
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for loop", "while loop", "do-while loop", "forEach loop"],
        correct: 2
    },
    {
        question: "What does '===' check in JavaScript?",
        options: [
            "Value only",
            "Type only",
            "Both value and type",
            "Neither value nor type"
        ],
        correct: 2
    },
    {
        question: "Which is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Symbol"],
        correct: 2
    },
    {
        question: "What does 'NaN' stand for?",
        options: [
            "Not a Number",
            "Null and None",
            "New Array Node",
            "Negative Array Number"
        ],
        correct: 0
    },
    {
        question: "Which method converts JSON to JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.toObject()"
        ],
        correct: 1
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A way to close the browser",
            "A function with access to outer scope",
            "A type of loop",
            "A CSS property"
        ],
        correct: 1
    },
    {
        question: "Which symbol is used for template literals?",
        options: ["Single quotes '", "Double quotes \"", "Backticks `", "Parentheses ()"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let wrongCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();

    const nextButton = document.getElementById('nextButton');
    const retryButton = document.getElementById('retryQuiz');

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentQuestion++;
            if (currentQuestion < quizQuestions.length) {
                loadQuestion();
                nextButton.style.display = 'none';
            } else {
                showResults();
            }
        });
    }

    if (retryButton) {
        retryButton.addEventListener('click', () => {
            resetQuiz();
        });
    }
});

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const currentQuestionSpan = document.getElementById('currentQuestion');
    const progressFill = document.getElementById('progressFill');
    const scoreSpan = document.getElementById('score');
    const wrongCountSpan = document.getElementById('wrongCount');

    // Update question number
    if (currentQuestionSpan) {
        currentQuestionSpan.textContent = currentQuestion + 1;
    }

    // Update progress bar
    if (progressFill) {
        const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
        progressFill.style.width = progress + '%';
    }

    // Update stats
    if (scoreSpan) scoreSpan.textContent = score;
    if (wrongCountSpan) wrongCountSpan.textContent = wrongCount;

    // Display question
    if (questionText) {
        questionText.textContent = question.question;
    }

    // Display options
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(index));
            optionsContainer.appendChild(button);
        });
    }
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    const optionButtons = document.querySelectorAll('.option-button');
    const nextButton = document.getElementById('nextButton');

    // Disable all buttons
    optionButtons.forEach(btn => btn.disabled = true);

    // Check answer
    if (selectedIndex === question.correct) {
        // Correct answer
        optionButtons[selectedIndex].classList.add('correct');
        score++;
        playCorrectSound();
        document.getElementById('score').textContent = score;
    } else {
        // Wrong answer
        optionButtons[selectedIndex].classList.add('wrong');
        optionButtons[question.correct].classList.add('correct');
        wrongCount++;
        playWrongSound();
        document.getElementById('wrongCount').textContent = wrongCount;
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);

        // Check if 3 wrong answers
        if (wrongCount >= 3) {
            showGhostPopup();
        }
    }

    // Show next button
    if (nextButton) {
        nextButton.style.display = 'block';
    }
}

function showGhostPopup() {
    const ghostPopup = document.getElementById('ghostPopup');
    if (ghostPopup) {
        ghostPopup.classList.add('show');
        playScarySound();
        
        setTimeout(() => {
            ghostPopup.classList.remove('show');
        }, 3000);
    }
}

function showResults() {
    const quizContainer = document.getElementById('quizContainer');
    const resultsScreen = document.getElementById('resultsScreen');
    const finalScore = document.getElementById('finalScore');
    const resultMessage = document.getElementById('resultMessage');

    if (quizContainer) quizContainer.style.display = 'none';
    if (resultsScreen) resultsScreen.style.display = 'block';
    if (finalScore) finalScore.textContent = score;

    // Generate message based on score
    let message = '';
    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        message = "Perfect! The ghost bows to your knowledge. You are a true coding master!";
    } else if (percentage >= 80) {
        message = "Excellent! The curse weakens. You have strong coding skills.";
    } else if (percentage >= 60) {
        message = "Good job! The ghost is impressed, but there's room for improvement.";
    } else if (percentage >= 40) {
        message = "Not bad, but the ghost expects more. Keep practicing!";
    } else {
        message = "The curse grows stronger... You need more practice, mortal.";
    }

    if (resultMessage) {
        resultMessage.textContent = message;
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    wrongCount = 0;

    const quizContainer = document.getElementById('quizContainer');
    const resultsScreen = document.getElementById('resultsScreen');

    if (quizContainer) quizContainer.style.display = 'block';
    if (resultsScreen) resultsScreen.style.display = 'none';

    loadQuestion();
}

function playCorrectSound() {
    const correctSound = document.getElementById('correctSound');
    if (correctSound) {
        correctSound.currentTime = 0;
        correctSound.play().catch(e => console.log('Audio play failed:', e));
    }
}

function playWrongSound() {
    const wrongSound = document.getElementById('wrongSound');
    if (wrongSound) {
        wrongSound.currentTime = 0;
        wrongSound.play().catch(e => console.log('Audio play failed:', e));
    }
}

function playScarySound() {
    const scarySound = document.getElementById('scarySound');
    if (scarySound) {
        scarySound.currentTime = 0;
        scarySound.volume = 0.3;
        scarySound.play().catch(e => console.log('Audio play failed:', e));
    }
}
