// LOOPS over ARRAYS

const Students = ['Tina', 'Raj', 'Bobby', 'Seema', 'Alex', 'Sita']

for (let i = 0; i < Students.length; i++) {
    // console.log(`rollnumber ${i+1} :  ${Students[i]}`)
}

// FOR .. In loop

for (let i in Students) {
    i = Number(i)
    // console.log(`rollnumber ${i + 1} :  ${Students[i]}`)
}

// FOR .. of loop

for (let student of Students) { //if we use in we will get index number i.e. 0-5  but if we use of we get the element
    // console.log(student)
}

//Design a JavaScript function named findDuplicate to identify and extract all duplicate elements from an array. The function should accept an array as a parameter and create a new array containing only the duplicate elements found in the input array. The resulting array should be returned.
//Complete the findDuplicate function
// Do not alter the starter code.

// let arr = [4, 2, 34, 4, 34, 12, 1, 4, 12];
// function findDuplicate(arr) {
//     let duplicates = [];

//     for (let i = 0; i < arr.length; i++) {
//         // Check if element appears again later
//         if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }

//     return duplicates;
// }

// console.log(findDuplicate(arr));

//-------------------------------------------------------

// const aprilBatch = ['Tina', 'Raj']
// const mayBatch = ['Ritik', 'Sita', 'Shalini']
// const juneBatch = ['Alex', 'Seema']
// const julyBatch = []

// function addStudent(batch, student){
//     batch.push(student)
//     // console.log(batch)
// }
// addStudent(juneBatch, 'Bobby')

// // REST Operator
// function addStudents(batch, ...students) {
//     for (let i of students) {
//         batch.push(i)
//         // console.log(batch)
//     }
// }
// addStudents(julyBatch, "Lukhaa", "Chomu", "Secsaa", "Ranjha")
// console.log(julyBatch)

// SPREAD Operator
// const newBatch = [...mayBatch]
// console.log(newBatch)

// mayBatch.push("Rita", "Sunita")
// console.log(mayBatch)
// console.log(newBatch)

//CONCATENATE
// const mergedBatch = [...mayBatch, ...newBatch]
// console.log(mergedBatch)

// --------------------------------------------------------
//complete the function mergeArray
//Do not alter the starter code.
arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
function mergeArray(arr1, arr2) {
    //Implemet your function here
    let mergedArr = [...arr1, ...arr2]
    let duplicate = []
    for (let i = 0; i < mergedArr.length; i++) {
        // console.log(i)
        if (mergedArr.indexOf(mergedArr[i] !== i) && !duplicate.includes(mergedArr[i])) {
            duplicate.push(mergedArr[i])
        }
    }
    return duplicate
}
console.log(mergeArray(arr1, arr2));
//Output : [1,2,4,5,7,3,6,9,0]