// DATATYPES 
// 1: Objects
// 2: Primitive Datatypes 

// *********************
//  PRIMITIVE DATATYPES
// *********************

//Number (64 Bit)
let a=10;
// console.log(typeof a)
//String
let b = 'Adi'
let x = "Adi Raj"
let y = `Adi`
// console.log(typeof b)
// console.log(typeof x)
// console.log(typeof y)
//Boolean
let bool = false;
// console.log(typeof bool)
//Undefined
let d;
// console.log(typeof d)
//Null
let e=null
// console.log(typeof e)
//Symbol(ES6/2015)
//BigInt(ES2020)
let f=10n;
// console.log(typeof f)

//Intresting Details Fun
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_VALUE*10)
// console.log(12/0)
// console.log(0/0)
// console.log(0/1)
// console.log(1/Infinity)


//Object Wrapper
let num=10;
let bigint = 10n;
let bol = true;

// console.log(num.__proto__)
// console.log(bigint.__proto__)
// console.log(bol.__proto__)


let char = 'aditya Raj singh '
let char2 = 'is my name'
// console.log(char.__proto__)
// console.log(char.charAt(11))
// console.log(char.length)
// console.log(char.concat(char2))
// console.log(char.indexOf('a'))
// console.log(char.lastIndexOf('a'))

function lowerCaseString(str1, str2) {
  let answer;
  // You have been provided with two input strings as parameters: str1 and str2
  // Example: str1 = "JOHN", str2 = "DOE"
  // Do not define or assign values to these inputs; they are provided automatically.
  
  // Task: 
  // 1. Convert str1 and str2 to lowercase.
  // 2. Concatenate the two lowercase strings together.
  // 3. Store the result in the variable 'answer' below.
  
  // Write your logic here:
answer = str1.toLowerCase().concat(str2.toLowerCase());

  return answer; // The final concatenated string will be returned from here.
}

// console.log( lowerCaseString(("JOHN "), ("DOU")))

const sen = "Hello, World!"
const chartofind = 'o';
// const indexofchar = sen.indexOf(chartofind).toUpperCase().charAt(1);
// console.log(indexofchar)