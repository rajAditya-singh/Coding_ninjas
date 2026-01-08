function shuffle(arr) {
    return function () {
        const result = [...arr]; // Make a copy of the input array.
        let currentIndex = arr.length;
        while (currentIndex > 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // Swap the current element with the randomly-selected one.
            const temp = result[currentIndex];
            result[currentIndex] = result[randomIndex];
            result[randomIndex] = temp;
        }
        return result;
    };
}

const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5"
];

const func = shuffle(questions);
const shuffledArray1 = func();
const shuffledArray2 = func();
const shuffledArray3 = func();

console.log(shuffledArray1);
console.log(shuffledArray2);
console.log(shuffledArray3);