// TRAVERSING A String

// let str = 'Javascript is an amazing language'
// let aCount=[]
// for (let i = 0; i <= str.length; i++) {
//     if (str.charAt(i) === "a") {
//         console.log(str.charAt(i))
//         aCount.push(str.charAt(i))
//     }
// }
// console.log(aCount.length)

// let CharToFind = "i";
function CharCounter(str, char) {
    let count = 0
    for (let i = 0; i <= str.length; i++) {
        if (str.charAt(i) === char) {
            count++
        }
    }
    return count
}
console.log(CharCounter("Javascript is an amazing language", "a"))