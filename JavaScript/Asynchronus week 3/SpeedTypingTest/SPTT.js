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
    startTimer()
}

function startTimer() {
    const timer = setInterval(() => {
        seconds--;
        
        timerElement.textContent = `00:${seconds.toString().padStart(2, '0')}`
        
        if (seconds <= 0) {
            clearInterval(timer)
            
            resultElement.style.display = "block";
            inputElement.disabled = true
            startButton.disabled = true
        }
    }, 1000)
}

retryButton.addEventListener("click", () => {
    startButton.disabled = false
    resultElement.style.display = "none";
    inputElement.value = ""
    inputElement.disabled = false
    seconds = 30
    timerElement.textContent = `00:${seconds.toString().padStart(2, '0')}`
    startTimer()
    
})

const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");


function calculation(){

}