import {createInterface} from 'readline';;

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
];

let userAnswers = [];
let currentQuestion = 0;

function displayQuestion() {
  const currentQuizData = quizData[currentQuestion];
  console.log(`${currentQuizData.question}\nOptions: ${currentQuizData.options.join(', ')}`);
}


function askQuestion() {
  rl.question("Your answer: ", (answer) => {
    userAnswers.push(answer.toLowerCase()); // Convert to lowercase for case-insensitive comparison
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      displayQuestion();
      askQuestion();
    } else {
      calculateScore();
      rl.close();
    }
  });
}

function calculateScore() {
  let score = 0;

  for (let i = 0; i < quizData.length; i++) {
    if (userAnswers[i] === quizData[i].correctAnswer.toLowerCase()) {
      score++;
    }
  }

  console.log(`Your score is: ${score} out of ${quizData.length}`);
}

console.log("Welcome to the Quiz App!");
displayQuestion();
askQuestion();


