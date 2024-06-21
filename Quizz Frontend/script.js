// const questions = [
//     {
//       number: 1,
//       text: "Who is the Chief Election Commissioner of India as of November 2020?",
//       options: ["Sunil Arora", "Ashok Lavasa", "Ranjit Sinha", "Sushil Chandra"],
//       answer: "Sunil Arora"
//     },
//     {
//       number: 2,
//       text: "Nipah is a:",
//       options: ["computer program", "virus", "cyclone", "fighter plane"],
//       answer: "virus"
//     },
//     // Add more questions here
//     {
//       number: 3,
//       text: "What is the capital of France?",
//       options: ["Berlin", "Madrid", "Paris", "Rome"],
//       answer: "Paris"
//     },
//     {
//       number: 4,
//       text: "What is 2 + 2?",
//       options: ["3", "4", "5", "6"],
//       answer: "4"
//     },
//     {
//       number: 5,
//       text: "Who wrote 'To Kill a Mockingbird'?",
//       options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
//       answer: "Harper Lee"
//     },
//     {
//       number: 6,
//       text: "What is the largest planet in our solar system?",
//       options: ["Earth", "Mars", "Jupiter", "Saturn"],
//       answer: "Jupiter"
//     },
//     {
//       number: 7,
//       text: "What is the boiling point of water?",
//       options: ["90°C", "100°C", "110°C", "120°C"],
//       answer: "100°C"
//     },
//     {
//       number: 8,
//       text: "What is the chemical symbol for gold?",
//       options: ["Au", "Ag", "Gd", "Go"],
//       answer: "Au"
//     },
//     {
//       number: 9,
//       text: "What is the capital of Japan?",
//       options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
//       answer: "Tokyo"
//     },
//     {
//       number: 10,
//       text: "What is the largest mammal?",
//       options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
//       answer: "Blue Whale"
//     }
//   ];

//   let currentQuestionIndex = 0;
//   let totalTime = 90 * 60; // 90 minutes in seconds

//   window.onload = function() {
//     showQuestion(currentQuestionIndex);
//     startTimer();
//   };

//   function showQuestion(index) {
//     const questionContainer = document.querySelector(".question-container");
//     const questionNumber = document.getElementById("question-number");
//     const questionText = document.getElementById("question-text");
//     const options = document.getElementById("options");

//     const question = questions[index];

//     questionNumber.innerText = `Question ${question.number}`;
//     questionText.innerText = question.text;
//     options.innerHTML = "";

//     question.options.forEach((option, i) => {
//       const optionElement = document.createElement("div");
//       optionElement.classList.add("option");
//       optionElement.innerHTML = `
//         <input type="radio" name="option" id="option${i}" value="${option}">
//         <label for="option${i}">${option}</label>
//       `;
//       options.appendChild(optionElement);
//     });
//   }

//   function previousQuestion() {
//     if (currentQuestionIndex > 0) {
//       currentQuestionIndex--;
//       showQuestion(currentQuestionIndex);
//     }
//   }

//   function nextQuestion() {
//     if (currentQuestionIndex < questions.length - 1) {
//       currentQuestionIndex++;
//       showQuestion(currentQuestionIndex);
//     }
//   }

//   function submitQuiz() {
//     alert("Quiz submitted!");
//   }

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 20;
let answeredQuestions = Array(totalQuestions).fill(false);
let markedForReview = Array(totalQuestions).fill(false);
let notVisitedQuestions = Array(totalQuestions).fill(true);
let selectedAnswerIndex = Array(totalQuestions).fill(-1);

document.addEventListener('DOMContentLoaded', async () => {
    await getData();
    showQuestion(); 
    initializeQuiz();
    startTimer();
    updateButtonStyles();

    document.getElementById('mark-for-review-btn').addEventListener('click', markForReview);
    document.getElementById('clear-response-btn').addEventListener('click', clearResponse);
});

document.addEventListener('DOMContentLoaded', () => {
    // initializeQuiz();
    showQuestion();
    startTimer();
    updateButtonStyles();


    
});

let questions = [];


async function getData(){
    const response = await fetch('http://localhost:8001/api/question')
    questions = await response.json();


    console.log(questions);
}
function initializeQuiz() {
    const questionButtonsContainer = document.getElementById('question-buttons');
    for (let i = 0; i < totalQuestions; i++) {
        const button = document.createElement('button');
        button.textContent = i + 1;
        button.setAttribute('data-index', i);
        button.addEventListener('click', () => {
            goToQuestion(i);
            updateButtonStyles();
        });
        questionButtonsContainer.appendChild(button);
    }
    updateStatus();
}

function showQuestion() {
    const quiz = document.getElementById('quiz');

    const questionContainer = document.getElementById('question-container');
    const questionNumber = document.getElementById('question-number');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const currentQuestion = questions[currentQuestionIndex];

    questionNumber.textContent = `Question No. ${currentQuestion.id}`;
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        const inputElement = document.createElement('input');
        const labelElement = document.createElement('label');

        inputElement.type = 'radio';
        inputElement.name = 'option';
        inputElement.value = index;
        inputElement.id = `option${index}`;

        // Check if the option is selected
        if (selectedAnswerIndex[currentQuestionIndex] === index) {
            inputElement.checked = true;
        }

        inputElement.addEventListener('click', () => {
            selectedAnswerIndex[currentQuestionIndex] = index;
             // Store selected answer index
            if(selectedAnswerIndex===questions[currentQuestion].answer)
                {
                    score=score+1;
                } 
             


           answeredQuestions[currentQuestionIndex] = true;
            notVisitedQuestions[currentQuestionIndex] = false;
            updateStatus();
            updateButtonStyles();
        });

        labelElement.htmlFor = `option${index}`;
        labelElement.textContent = option;

        optionElement.appendChild(inputElement);
        optionElement.appendChild(labelElement);

        optionsContainer.appendChild(optionElement);
    });

    updateButtonStyles();
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
    else{
        quiz.innerHTML=
        `  <div class="submit">
               <h2>Your Score:${score}/${questions.length}correct answare</h2>
               <p>Congratulation On Completing the quiz</p>
     
          </div>`
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
    
}

function goToQuestion(index) {
    currentQuestionIndex = index;
    showQuestion();
}

function highlightCurrentQuestion() {
    const buttons = document.querySelectorAll('#question-buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[currentQuestionIndex].classList.add('active');
}

function updateStatus() {
    const answeredCount = answeredQuestions.filter(Boolean).length;
    const notAnsweredCount = totalQuestions - answeredCount;
    const markedCount = markedForReview.filter(Boolean).length;
    const notVisitedCount = notVisitedQuestions.filter(Boolean).length;

    document.getElementById('answered-count').textContent = answeredCount;
    document.getElementById('not-answered-count').textContent = notAnsweredCount;
    document.getElementById('marked-count').textContent = markedCount;
    document.getElementById('not-visited-count').textContent = notVisitedCount;
    updateButtonStyles();
}

function submitQuiz() {
    alert('Quiz submitted!');
    // Implement your submit logic here
   
   

}

function updateButtonStyles() {
    const buttons = document.querySelectorAll('#question-buttons button');
    buttons.forEach((button, index) => {
        button.classList.remove('not-visited', 'visited-not-answered', 'visited-answered', 'active', 'marked-for-review');

        if (currentQuestionIndex === index) {
            button.classList.add('active');
        } else if (answeredQuestions[index] && selectedAnswerIndex[index] !== -1) {
            button.classList.add('visited-answered');
        } else if (!notVisitedQuestions[index]) {
            button.classList.add('visited-not-answered');
        } else {
            button.classList.add('not-visited');
        }

        // Add marked-for-review class dynamically
        if (markedForReview[index]) {
            button.classList.add('marked-for-review');
        }
    });
}

function startTimer() {
    let totalTime = 90 * 60; // 90 minutes in seconds
    const timerElement = document.getElementById("time");

    const interval = setInterval(() => {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.innerText = `${minutes}:${seconds}`;

        totalTime--;

        if (totalTime < 0) {
            clearInterval(interval);
            alert("Time is up!");
            submitQuiz();
        }
    }, 1000);
}

// Assuming the following structure and functions are already in place




function markForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];
    updateButtonStyles();
}


function clearResponse() {
    selectedAnswerIndex[currentQuestionIndex] = -1;
    answeredQuestions[currentQuestionIndex] = false;
    updateStatus();
    updateButtonStyles();


    const options = document.getElementsByName('option');
    options.forEach(option => {
        option.checked = false;
    });
}


// camera
document.addEventListener('DOMContentLoaded', () => {
    startCamera();
});

function startCamera() {
    const videoElement = document.getElementById('video-player');
    const constraints = { video: true };

    // Access the user's camera
    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            videoElement.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing the camera: ', error);
            // alert('Error accessing the camera. Please check your camera permissions.');
        });
}

// Security
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        // alert('Cheated! Please focus on the quiz.');
       
    }
});

// Detect window switch
window.addEventListener('blur', function () {
    // alert('Cheated! Please focus on the quiz.');
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});