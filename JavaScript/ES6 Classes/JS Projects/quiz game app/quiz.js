// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currentQuestion = 0;
let totalScore = quesJSON.length;
let selectedOption = null;

const displayQuestion = document.getElementById("question");
const displayOptions = document.getElementById("options");
const displayScore = document.getElementById("score");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
showQuestions();

submitBtn.addEventListener("click", () => {
  const { correctAnswer } = quesJSON[currentQuestion];
  if (selectedOption) {
    if (selectedOption === correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }
    displayScore.textContent = `Score : ${score} / ${totalScore}`;
    selectedOption = null;
    nextQuestion();
  } else {
    alert("Please select an option before submitting.");
  }
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  displayOptions.textContent = "";
  displayScore.textContent = `Score : ${score} / ${totalScore}`;
  if (currentQuestion >= quesJSON.length) {
    displayQuestion.textContent = "Quiz Completed!";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
  } else {
    showQuestions();
  }
});
function showQuestions() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  displayQuestion.textContent = question;
  const shuffledOptions = suffleOpt(options);
  shuffledOptions.forEach((opts) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = opts;
    displayOptions.appendChild(optionBtn);

    optionBtn.addEventListener("click", () => {
      // if (opts === correctAnswer) {
      //   score++;
      // } else {
      //   score = score - 0.25;
      // }
      // displayScore.textContent = `Score : ${score} / ${totalScore}`;
      // console.log(currentQuestion);
      // nextQuestion();
      optionBtn.style.backgroundColor = "#f57424";
      // if (opts === correctAnswer) {
      selectedOption = opts;
      return selectedOption;
      // }
    });
  });
}
function nextQuestion() {
  currentQuestion++;
  displayOptions.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    displayQuestion.textContent = "Quiz Completed!";
    // displayOptions.textContent = "";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    showQuestions();
  }
}

function suffleOpt(opt) {
  for (let i = opt.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opt[i], opt[j]] = [opt[j], opt[i]];
  }
  return opt;
}
