// find  -----   findIndex
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
const numbers = [4, 2, -3, 2, 8, -1, 6];

const find1 = numbers.find((num) => num == 2);
const find2 = numbers.findIndex((num) => num == 2);
// console.log(find1); // Output: 2
// console.log(find2); // Output: 2

const find3 = numbers.find((num) => num == -2);
const find4 = numbers.findIndex((num) => num == -2);
// console.log(find3); // Output: undefined
// console.log(find4); // Output: -1

/************************************ */
// few other HOF - every, fill, findLast, findLastIndex, forEach, sort and many more.

/************************************ */
//Every()
const posNum = numbers.every(num => num>0)
// console.log(posNum) // false because all numbers are not positive

const numArr = [4, 2, 3, 5, 8, 1, 6];
const allPosNum = numArr.every(num => num>0)
// console.log(allPosNum) // true because all numbers are positive

/************************************ */
//fill()