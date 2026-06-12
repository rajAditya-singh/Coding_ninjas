const sentences = `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`;

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");

let seconds = 11

startButton.addEventListener("click", startTest)

function startTest() {
    inputElement.disabled = false
    sentenceElement.textContent = sentences
    startButton.disabled = true
    inputElement.focus()
    startTimer()
}
let correct = 0
let target;
function startTimer() {
    const timer = setInterval(() => {
        seconds--;

        timerElement.textContent = `00:${seconds.toString().padStart(2, '0')}`

        if (seconds <= 0) {
            clearInterval(timer)

            resultElement.style.display = "block";
            inputElement.disabled = true
            startButton.disabled = true

            accuracyCalculation()
        }
    }, 1000)
}

const accuracyElement = document.getElementById("accuracy");
const speedElement = document.getElementById("speed");

function accuracyCalculation() {
    target = inputElement.value
    const typedWords = target.split(' ');
    const originalWords = sentences.split(' ');
    // console.log(target.split(''))

    for (let i = 0; i < typedWords.length; i++) {
        if (typedWords[i] === originalWords[i]) {
            correct++
        }
    }
    let accuracy;
    if (target === "") {
        accuracy = 0
    } else {
        accuracy = ((correct / typedWords.length) * 100).toFixed(2)
    }
    // console.log(accuracy)
    accuracyElement.textContent = accuracy
    const speed = (correct / 30) * 60;
    speedElement.textContent = speed.toFixed(2);
}



retryButton.addEventListener("click", () => {
    startButton.disabled = false
    resultElement.style.display = "none";
    inputElement.value = ""
    inputElement.disabled = true 
    seconds = 30
    correct=0
    timerElement.textContent = `00:${seconds.toString().padStart(2, '0')}`

})