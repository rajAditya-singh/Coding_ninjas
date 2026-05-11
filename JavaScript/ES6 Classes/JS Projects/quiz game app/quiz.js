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

showQuestions();

function showQuestions() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  const displayQuestion = document.getElementById("question");
  displayQuestion.textContent = question;

  const displayOptions = document.getElementById("options");

  const displayScore = document.getElementById("score");

  suffleOpt(options).forEach((opt) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = opt;
    displayOptions.appendChild(optionBtn);

    optionBtn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      // console.log(score);
      displayScore.textContent = `Score : ${score}`;
      // displayQuestion.textContent = "Quiz Completed!";
      // displayOptions.textContent = "";
    });
  });
}

function suffleOpt(opt) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opt[i], opt[j]] = [opt[j], opt[i]];
  }
  return opt;
}
