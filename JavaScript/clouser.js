// let a = 'Global'

// function outerPrint() {
//     let b = 'outerPrint'

//     return function innerPrint() {
//         let c = 'innerPrint'
//         return `${a} -> ${b} -> ${c}`;
//     }

// }
// const show = outerPrint();
// console.log(show);
// const printInner = show();
// console.log(printInner);

//Closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//In JavaScript, closures are created whenever a function is created. To use a closure, simply define a function inside another function and expose it. The inner function will have access to the variables in the outer function’s scope, even after the outer function has returned.
//So it remembers the environment in which it was created.

// Complete the genrateID function
//Do not alter the starter code
// function generateID(num){
//     let count = num;
//     //Implement Your function here
//     return function () {
//         return `A_2023_${count++}`
//     }
    
// }

// const func = generateID(99);
// console.log(func());//Output : A_2023_99
// console.log(func()); // Output: A_2023_100

var a =1
function b(){
    a = 10
    return;
    function a(){}
}
b();
console.log(a); // 1