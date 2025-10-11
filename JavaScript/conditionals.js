/** CONDITIONALS in JavaScript */

//If Statement
//Print Number is even if number is even
// let num = prompt("Enter a number: ");
// let num = 111;
// if(num % 2 === 0) {
//   console.log("Number is even");
// }

// console.log("Number is odd");

//If-Else Statement
//Print whether number is even or odd
// let number = 2;
// let number = prompt("Enter a number: ");
// if(number % 2 === 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

//If-Else If-Else Statement
// let month = prompt("Enter a month (1-12): ");
// if(month>=1 && month<=3) {
//   console.log("Winter");
// }else if (month>=4 && month<=6) {
//   console.log("Spring");
// }else if(month<=7 && month>=9) {
//   console.log("Summer");
// }else if(month>=10 && month<=12) {
//   console.log("Autumn");
// }else {
//   console.log("Invalid month");
// }

// let num = -1
// if (num<0){
//     console.log("Negative Number");
// } else if (num>0){
//     console.log("Positive Number");
// }else {
//     console.log("Zero");
// }

// function checkEligibility(age) {
//   let answer;
//   //Write your code here
//   if (age >= 18) {
//     answer = "granted";
//   } else {
//     answer = "denied";
//   }
//   return answer;
// }


function discountCalculator(totalAmount) {
  // a variable to store the final amount after applying the discount
  let answer;

  // Check if the total amount is 100 or more to apply a 10% discount
  // Then subtract the discount value from the total amount to get the answer
     if (totalAmount >= 100) {
        totalAmount = totalAmount - ((totalAmount * 10) / 100)
        answer=totalAmount
    }else if (totalAmount >= 50 && totalAmount <= 99.99) {
        totalAmount = totalAmount - ((totalAmount * 5) / 100)
        answer=totalAmount
    }else{
        answer=totalAmount
    }

  // Returning the final amount after applying the discount
  return answer;
}
console.log(discountCalculator(100)); // Output: 90
console.log(discountCalculator(80));  // Output: 76
console.log(discountCalculator(40));  // Output: 40
