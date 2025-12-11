//REDUCE

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// reduce(redFunc, initialValue) **initialValue is optional

// function redFunc(accumulator, currentValue, currentIndex, array){} **currentIndex and array are optional parameters
// accumulator- is the value that was last returned by the reducer function or it is the initialValue, if provided, and if the initialValue is not provided then the accumulator will hold currentValue of first iteration.

let inputs = [2, 3, 4, 5, 6]

let sum = inputs.reduce((total, num, index) => {
    console.log({ total, index, num })
    return total + num
}, 0)
console.log(sum)