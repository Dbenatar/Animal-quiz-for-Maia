const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState(e) {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "2", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "What is a baby puffin called?",
    answers: [
      { text: "Cub", correct: false },
      { text: "Pufflet", correct: false },
      { text: "Puffling", correct: true },
      { text: "Pup", correct: false },
    ],
  },
  {
    question: "What is the name of an area where a species live?",
    answers: [
      { text: "House", correct: false },
      { text: "Flat", correct: false },
      { text: "Room", correct: false },
      { text: "Habitat", correct: true },
    ],
  },
  {
    question: "What is the name of the seed of an oak tree?",
    answers: [
      { text: "Berry", correct: false },
      { text: "Acorn", correct: true },
      { text: "Conker", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "How many legs does an insect have?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
    ],
  },
];
