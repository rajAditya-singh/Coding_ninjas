/*
Check the following conditions to check if a given year is a leap year or not:
Condition 1: If a year is divisible by 4, it is a leap year.
Condition 2: If a year is divisible by 100, it is not a leap year.
Condition 3: If a year is divisible by 400, it is a leap year even though it is divisible by 100.
*/

// function leapYear(year) {
//     let answer;
//    //Write your code here
//    if (year % 400 === 0){
//     answer=true
//    }
//    if (year % 100 === 0){
//     answer=false
//    }
//    if (year % 4 === 0){
//     answer=true
//    }else{
//         answer=false
//     }
// return answer
// }

function leapYear(year) {
    let answer;
    if (year % 400 === 0) {
        answer = true;
    } else if (year % 100 === 0) {
        answer = false;
    } else if (year % 4 === 0) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
console.log(leapYear(2100))