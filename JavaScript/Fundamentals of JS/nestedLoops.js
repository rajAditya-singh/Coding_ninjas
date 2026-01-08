/*------Nested Loops------ */
// Print Multiplication Table Of 4
// let num =4
// for(let i=1; i<=10; i++){
//     // console.log(num*i)
// }

//***************************** */

// Print Multiplication Table From 1 to 10
// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         // console.log(`${i}*${j}=${i*j}`)
//     }
//     // console.log(" ")
// }

//***************************** */

// Print All the prime numbers from 2 to 100
// for(let i = 2; i<=100; i++){
//     let isprime=true;
//     for(j=2; j<i; j++){
//         if(i%j==0){
//             isprime=false;
//             break;
//         }
//     }
//     if(isprime){
//         console.log(`${i} is Prime`)
//     }else{
//         console.log(`${i} is Not Prime`)
//     }
// }

//***************************** */

// function sumOfPrimeNumbers(limit) {
//   let answer = 0; // Variable to store the sum of all prime numbers

// // Iterate through all numbers from 0 to the given limit
//     // Inside the first loop create a variable to count the number of
//     // divisors of i
//     // Check how many numbers divide i without a remainder
//     // by using nested loop
// // If count equals 2, then i is a prime number
//     for (let i = 0; i <= limit; i++){
//         let count = 0;
//         for (let j = 1; j <= i; j++){
//             if (i % j == 0) {
//                 count=count+1
//             }
//         }
//         if (count == 2) {
//             answer=answer+i
//         }
//     }

//   // Return the sum of all prime numbers between 0 and limit
//   return answer;
// }
// console.log(sumOfPrimeNumbers(50))

//***************************** */

// Write the program to calculate the discount on the given amount
// store the calculated discount in the "discount" variable
// Please do not alter anything given in the starter code
// function calculate(amount) {
//   let discount;

//   switch (true) {
//     case (amount < 500):
//       discount = "No Discount";
//       break;
//     case (amount >= 500 && amount < 1000):
//       discount = (amount * 10) / 100;
//       break;
//     case (amount >= 1000 && amount < 2000):
//       discount = (amount * 20) / 100;
//       break;
//     case (amount >= 2000 && amount < 4000):
//       discount = (amount * 30) / 100;
//       break;
//     case (amount >= 4000 && amount < 5000):
//       discount = (amount * 40) / 100;
//       break;
//     case (amount >= 5000):
//       discount = (amount * 50) / 100;
//       break;
//     default: discount="Invalid Input"
//   }
//   // write your code here

//   return discount;
// }
// console.log(calculate(1000))

//***************************** */

//Do not alter anything else given in the starter code
// Step 1: Convert the temperature from Fahrenheit to Celsius.
// Step 2: Store the converted temperature in a new variable.
// Step 3: Check if the rounded temperature is 37?C or higher with the help of if and else condition
// Use the toFixed() method to format converted temperature in celcius to one decimal place.
// function main(tempF) {
//   let result;
//   let tempC = ((tempF - 32) * 5) / 9;
//   if(tempC>=37){
//     result=`You have a fever! Your temperature is ${tempC.toFixed(1)}°C.`
//   }else{
//      result=`No fever! Your temperature is ${tempC.toFixed(1)}°C.`
//   }

//   return result;
// }
// console.log(main(90))

function sumOfFactorial(num) {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      answer = answer + i;
    }
  }
  return answer;
}
console.log(sumOfFactorial(6));
