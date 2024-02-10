import {createInterface} from 'readline';
import {stdin, stdout} from 'process';

const rl = createInterface({
  input: stdin,
  output: stdout
});

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
];

const displayQuestionOption = (question) => {
  console.log(question.question);
  question.options.forEach((item, index) =>{
    console.log(`${index + 1}. ${item}`);
  })
};

const getAnswer = (question, answer) => {
  const answerGiven = quizData[question];
  let checkResponse = answerGiven.answer;
  if(answer === checkResponse) {
    console.log(answerGiven, checkResponse);
    console.log('correct');
  }else {
    console.log('incorrect');
  }
};

const getQuestion = () => {
  for(let i = 0; i < quizData.length; i++){
    console.log(quizData[i].question);
    displayQuestionOption(quizData[i]);
    rl.question(``, (answer => {
      getAnswer(i, answer);
      getQuestion();
    }));
  }
};

let i = 0;

const generateQuestion = () => {
  if (i < quizData.length) {
    rl.question(
      displayQuestionOption(quizData[i]),
      (answer) => {
        console.log(answer);
        i++;
        generateQuestion();  // Call generateQuestion recursively
      }
    );
  } else {
    console.log("Quiz Completed!");
    rl.close();
  }
};
generateQuestion();
