/*------ITERATIONS-------
1 - For loop
2 - While loop
3 - do-while loop
*/

/*-------FOR Loop--------*/
// for(let i=1; i<=20; i++){
//     console.log(i)
// }

//Print Even No from 1 to 50
// for(let i = 2; i<=50; i++){
//     if(i%2==0){
//         // console.log(i)
//     }
// }

// ---------------------------

//Print odd No from 1 to 50
// for(let i=1; i<=50; i++){
//     if(i%2!=0){
//         // console.log(i)
//     }
// }

// ---------------------------

//Sum of Even Number
// function sumOfEvenNumbers(limit) {
//   // Initialize sum to store the sum of even numbers
//     let result = 0;
//     for (let i = 1; i <= limit; i++){
//         if (i % 2 == 0) {
//             result = result + i;
//         }
//     }
//   // Iterate through numbers from 1 to the given limit
//   // Check if the current number is even
//   // If even, add it to the sum


//   // Return the sum of even numbers
//   return result;
// }
// console.log(sumOfEvenNumbers(8))

// ---------------------------

//calculate the factorial of a given positive integer. 
// function factorial(limit) {
//   let result = 1;

//   //write your code below 
//     for (let i = 1; i <= limit; i++){
//         result=result*i
//     }
//   return result;
// }
// console.log(factorial(10)

// ---------------------------

// Number is prime or not
let n = Number(prompt("Enter your number"))
let isPrime = true;
for(let i=2; i<n; i++){
    if(n%i==0){
        isPrime=false
        break;
    }
}
if(isPrime){
    // console.log("Prime")
}else{
    // console.log("Not Prime")
}

// ---------------------------

//Number is a composite number
function Composite(number) {
    let answer; // This variable will store the result (true or false)

    // Initialize a variable to count the number of factors
    let count = 0;
    // Loop through all integers from 1 up to 'number'.
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            // Increment the count for each integer that is a divisor of 'number'.
            count++
        }
    }
    if (count > 2) {
        answer = true
    } else {
        answer = false
    }

    // After the loop, check if the count of factors is more than 2

    // Return the result 
    return answer;
}
console.log(Composite(7))