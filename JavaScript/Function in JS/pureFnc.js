//PURE FUNCTION
function add(a, b){
    return a+b
}
// console.log(add(2, 3))
//A functio is a pure function when:
//-> It always returns the same output for the same input
//-> It does not produce any side effects (like modifying a global variable, changing the input parameters, etc.)
//-> It does not depend on any external state or variables
//-> it does not have Console logs or alerts inside it

//IMPURE FUNCTION
let discount= 25
function calculatePrice(price){
    discount= discount + 10 //modifying external variable
    return price - discount;
}

//Refactor the given impure function to pure function.
function removeVowels(obj) {
  // Hint: To make this function pure, do not modify the original obj.
  // Instead, create and return a new object with the modified value.
  return { value: obj.value.replace(/[aeiou]/gi, "") };
}

// you don't need to do anything below. 
//you can use it for testing the code.
let strObj = { value: "Hello World" };
//For pure function
//let newObj = removeVowels(strObj);
console.log(removeVowels(strObj));
console.log(strObj.value);
//console.log(newObj.value);