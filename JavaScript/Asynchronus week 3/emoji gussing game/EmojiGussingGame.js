const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
];


let current_index = 0
let current_score = 0

emojiDisplay()
// guess_input.addEventListener("keypress", emojiDisplay)
function emojiDisplay() {
    const description = document.getElementById("description")
    description.textContent = emojiDetails[current_index].emoji;
}

const guess_input = document.getElementById("guess-input")
const scoreEle = document.getElementById("score")
const resultEle = document.getElementById("result")

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

    if(current_index === emojiDetails.length){
        current_index=0;
        current_score = 0;
    }

    emojiDisplay()
}

document.getElementById("guess-input").addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        checkGuess()
    }
});

document.addEventListener("DOMContentLoaded", emojiDisplay)