// We use {} curly braces for object destructuring and [] square brackets for array destructuring
const obj1 = {
  a: 1,
  b: 2,
  c: [1, 2, 3],
  d: "Hello",
};

//Binding Pattern
// const { a, b, c, d } = obj1;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c);
// console.log(d);

const { a: a1 } = obj1;
// console.log(a); // a has not been defined as it has been renamed to a1
console.log(a1); // 1

// Assigning Pattern
let b2;
({ b: b2 } = obj1);
console.log(b2); // 2
