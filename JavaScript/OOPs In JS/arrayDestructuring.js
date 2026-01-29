const fruits = ["Apple", "mango", "banana", "strawberry", "orange"];

//Binding Pattern
// const [a, m, , s] = fruits;
// console.log(a, m, s); // Apple mango strawberry

// const [a, b, ...other] = fruits;
// console.log(a); // Apple
// console.log(b); // mango
// console.log(other); // [ 'banana', 'strawberry', 'orange' ]

const [a, b, ...[ba, st]] = fruits;
console.log(a); // Apple
console.log(b); // mango
console.log(ba); // strawberry
console.log(st); // orange
