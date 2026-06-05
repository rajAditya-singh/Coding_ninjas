const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
];

const description = document.getElementById("description")
const guess_input = document.getElementById("guess-input")

let current_index = 0
guess_input.addEventListener("keypress", emojiDisplay)
function emojiDisplay() {
    description.textContent = ""

    emojiDetails.forEach((option) => {
        description.textContent = option.emoji
    })
}