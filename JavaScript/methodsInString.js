// METHODS In A String
// let str = "javascript is an amazing language"

// includes()
// console.log(str.includes("A"))

// replace()
// console.log(str.replace("is", "was"))
// console.log(str.replace("a", "@"))
// console.log(str)

//replaceAll()
// console.log(str.replaceAll("a", "@"))

//trim()
// console.log(str.trim())

//split()
// let word = str.split(" ")
// console.log(word)

//subString()
// console.log(str.substring(2))
// console.log(str.substring(2, 12)) //form 2 to 11, 12 is not included

// console.log(str.substring(-4)) //Any negative number is converted into 0

//slice() this is same as subString() but it also work with negative numbers
// console.log(str.slice(-4))
// console.log(str.slice(-4, -1))

function countWords(str) {
    let count = 0;
    let word = str.split(" ")
    for (let i = 0; i <= word.length - 1; i++) {
        count++
    }
    return count;
}
console.log(countWords("I am a Ninja Coder"))