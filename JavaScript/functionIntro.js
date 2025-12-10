//FUNCTION DECLARATION  // we can call this function before declaring it
// const sum1 = sum(2, 4)
// console.log(sum1)
function sum(a, b) {
    return a + b
}
// const sum1 = sum(2, 4)
// console.log(sum1)

//FUNCTION EXPRESSION   //we cannot call function before declaring it 
// console.log(sum2(3, 4))
const sum2 = function (a, b) {
    return a + b
}
// console.log(sum2(3, 4))


// console.log(square(5))
// var square= function(x){
//     return x*x
// }
// console.log(square(5))

//ARROW FNCTION
var prod = (num1, num2) => {
    return num1 * num2
}
// console.log(prod(4, 5))
// we can also write it like this if there is only one line of code
var prod2 = (num1, num2) => num1 * num2
// console.log(prod2(4, 6))

//ARGUMENT OBJECT IN ARROW FUNCTION -  it is not present in arrow functions Because arrow functions do NOT have their own arguments object so JavaScript doesn't know what arguments refers to here.
let he = 24
let she = 2
let ration = () => {
    console.log(arguments)
    return he / she
}
// console.log(ration(he, she))