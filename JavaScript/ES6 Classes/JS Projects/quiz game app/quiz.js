const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};
let score = 0;
const { correctAnswer, options, question } = questionObj;

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
    displayQuestion.textContent = "Quiz Completed!";
    displayOptions.textContent = "";
  });
});

function suffleOpt(opt) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opt[i], opt[j]] = [opt[j], opt[i]];
  }
  return opt;
}
