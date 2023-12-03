const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
    }
];

let currentQuestion = 0;
let score = 0;

// console.log(score) 

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;

    optionsContainer.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option}" id="option${index + 1}">
            <label for="option${index + 1}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        if (selectedOption.value === quizData[currentQuestion].correctAnswer) {
            score++;
            // console.log(score)
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert('Please select an option before moving to the next question.');
    }
}

function showResult() {
    resultContainer.classList.remove('hidden');   // to remove the class = "hidden"
    document.getElementById('quiz-container').classList.add('hidden');
    scoreElement.textContent = score + ' out of ' + quizData.length;


    // When the user completes the quiz and the showResult function is called, this line removes the 'hidden' class, making the result container visible on the page. It allows the result information to be displayed to the user. 
    // This approach is common in web development to toggle the visibility of elements by adding or removing a class that controls the display property.
}

loadQuestion();







// function showResult() {
//     resultContainer.classList.remove('hidden');
//     document.getElementById('quiz-container').classList.add('hidden');
//     scoreElement.textContent = score + ' out of ' + quizData.length;

//     const resultDetailsContainer = document.createElement('div');
//     resultDetailsContainer.innerHTML = '<h2>Result Details</h2>';

//     quizData.forEach((quiz, index) => {
//         const userAnswer = document.querySelector(`input[name="option${index + 1}"]:checked`);
//         const userAnswerText = userAnswer ? userAnswer.value : 'Not answered';

//         const detailElement = document.createElement('p');
//         detailElement.innerHTML = `<strong>Question ${index + 1}:</strong> Your Answer: ${userAnswerText}, Correct Answer: ${quiz.correctAnswer}`;

//         if (userAnswerText === quiz.correctAnswer) {
//             detailElement.classList.add('correct');
//         } else {
//             detailElement.classList.add('wrong');
//         }

//         resultDetailsContainer.appendChild(detailElement);
//     });

//     resultContainer.appendChild(resultDetailsContainer);
// }


