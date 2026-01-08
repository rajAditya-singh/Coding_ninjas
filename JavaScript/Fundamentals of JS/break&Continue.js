// const inputs = [11, 12, 45, 3, 6, 7, 67, 8, 5, 34, 2, 45, 78, 12, 34, 56]
// const arr = [1, 6, 8, 3, 5, 20, 10, 4, 16, 50]

// let evenNum = []
// for (let i of inputs) {
//     // console.log(i)
//     if (i % 2 !== 0) {
//         continue
//     }
//     // console.log(i)
//     evenNum.push(i)
//     // console.log(evenNum)

//     if (evenNum.length === 5) {
//         break;
//     }
//     console.log(evenNum)

// }
// console.log(evenNum)
function sumOfArray(arr) {
    let evenNum = []
    for (let i of arr) {
        if (i % 2 !== 0) {
            continue
        }

        let num = i

        if (num % 5 === 0) {
            continue
        }
        evenNum.push(i)

        let sum = 0
        for (let j of evenNum) {
            sum = sum + j
            
        }
        console.log(sum) 
    }
}
sumOfArray([1,6,8,3,5,20,10])