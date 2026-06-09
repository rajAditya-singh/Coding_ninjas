const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
];


let current_index = 0
let current_score = 0
let seconds=10
const guess_input = document.getElementById("guess-input")
const scoreEle = document.getElementById("score")
const resultEle = document.getElementById("result")
const timerElement = document.getElementById("timer")


// guess_input.addEventListener("keypress", emojiDisplay)
function emojiDisplay() {
    const description = document.getElementById("description")
    timerElement.textContent = `Time: ${seconds}s`
    description.textContent = emojiDetails[current_index].emoji;

    restart_button.style.display="none"
}


function checkGuess(){
    let guess = guess_input.value.trim().toLowerCase();
    let correctEmoji = emojiDetails[current_index].description.trim().toLowerCase() 
    if(guess === correctEmoji){
        resultEle.textContent = "Correct!";
        current_score++
    }else{
        resultEle.textContent = "Worng!";
    }
    scoreEle.textContent=`Score: ${current_score}`
    guess_input.value=""
    guess_input.focus()
    nextEmoji()
}

function nextEmoji(){
    current_index++
    setTimeout(()=>{
        resultEle.textContent = "";
    }, 2000)


    if(current_index === emojiDetails.length){
        current_index=0;
        current_score = 0;
    }

    emojiDisplay()
}

function setTimer(){
    timer = setInterval(()=>{
        seconds--;
        timerElement.textContent = `Time: ${seconds}s`

        if(seconds<=0){
            endGame()
        }
    },1000) 
}

function endGame(){
    clearInterval(timer)
    guess_input.disabled=true;
    timerElement.textContent = "Game Ended"

    restart_button.style.display="block"
}

document.getElementById("guess-input").addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        checkGuess()
    }
});

document.addEventListener("DOMContentLoaded", ()=>{
    emojiDisplay();
    setTimer()
})

const restart_button = document.getElementById("restart-button")

restart_button.addEventListener("click", ()=>{
    current_index = 0
    current_score = 0
    seconds=10
    guess_input.disabled=false;
    emojiDisplay()
    setTimer()
})