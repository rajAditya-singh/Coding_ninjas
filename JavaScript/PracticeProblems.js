/* // PROBLEM 1 : Write a program to check if a number is positive or negative.
let num = prompt("Please Enter a Number")
console.log(num>0 ? "Positive Number" : num<0 ? "Negative Number" : "Zero")
*/

/*// PROBLEM 2 : Check if a person is eligible to vote (age ≥ 18).
let Age = prompt("Enter Your Age");
if (Age >= 18) {
  console.log("You Are Eligible To vote");
} else {
  console.log("You Are Not Eligible To vote");
}*/

/*// PROBLEM 3 : Check if a number is even or odd.
let num = prompt("Enter A Number")
console.log((num%2==0) ? "Number Is Even" : "Number Is Odd" )
*/

/*// PROBLEM 4 : Given a temperature, print "Hot" if above 30°C, otherwise "Cool".
let Temp = prompt("Enter Temperature")
console.log(Temp>30 ? "Hot" : "Cool" )
*/

/*// PROBLEM 5 : Check if a given year is leap year or not.
let year = prompt("Enter Year Here");
if (year % 400 == 0) {
  console.log("Leap Year");
} else if (year % 100 == 0) {
  console.log("Not A Leap Year");
} else if (year % 4 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not A Leap Year");
}
*/
/*
//Problem 6 : Check if a Character is a Vowel or Consonant
// let char = prompt("Enter the character")
// char = char.toLowerCase()
// if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//   console.log("Is Vowel")
// }else{
//   console.log("Is Consonant")
// }
*/
/*
// PROBLEM 7 and 8 : Compare Two Numbers/ Compare Three Numbers
// let a = Number(prompt("Enter 1st Num"))
// let b = Number(prompt("Enter 2nd Num"))
// let c = Number(prompt("Enter 3rd Num"))
// // console.log(a>b ? "a is greater than b" : a==b ? "a is equal to b" : "b is greater than a" )
// if(a>b && a!=b && a>c && a!=c){
//   console.log("A is gretest")
// }else if(b>a && b!=a && b>c && b!=c){
//   console.log("B is gretest")
// }else{
//   console.log("C is Gretest")
// }
*/
/*
// PROBLEM 9 : Identify Triangle Type
// let a = Number(prompt("enter 1st side"))
// let b = Number(prompt("enter 2nd side"))
// let c = Number(prompt("enter 3rd side"))

// if(a+b>c && b+c>a && c+a>b){
//   console.log("Your Triangle is a Valid")
//   if(a==b && b==c){
//     console.log("Triangle is Equivalent")
//   }else if(a==b || b==c || c==a){
//     console.log("Triangle is Isosceles")
//   }else{
//     console.log("Triangle is Scalene")
//   }
// }else{
//   console.log("Your Triangle is a not Valid")
// }
*/
/*
//PROBLEM 10 : Check Pass or Fail(marks ≥ 40)
// let marks = Number(prompt("Enter your number"))

// console.log(marks>=40 ? "Pass" : "Fail")
*/
/*
// PROBLEM 11 :
//Grade a student: 90–100 → A / 75–89 → B / 60–74 → C / Below 60 → Fail 

let marks=Number(prompt("Enter Your Marks"))
switch(true){
  case (marks>=90 && marks<=100) : console.log("Grade A");
  break;
  case (marks>=75 && marks<=89) : console.log("Grade B");
  break;
  case (marks>=60 && marks<=74) : console.log("Grade C");
  break;
  default : console.log("Fail");
}
*/
/*
// PROBLEM 12 : Divisible by both 3 & 5, only 3, only 5, or neither

let num = Number(prompt("Enter your number"))

if(num%3==0 && num%5==0){
  console.log("Number is divisible by both")
}else if(num%3==0){
  console.log("Number is divisible by 3")
}else if(num%5==0){
  console.log("Number is divisible by 5")
}else{
  console.log("Number is not divisible")
}
  */
/*
// PROBLEM : 3.	Input time in 24-hour format and print "Good Morning", "Good Afternoon", "Good Evening", or "Good Night".

let time = Number(prompt("Enter Time"));

if (time >= 5 && time <= 11) {
  console.log("Good Morning ☀️");
} else if (time >= 12 && time <= 16) {
  console.log("Good Afternoon 🌞");
} else if (time >= 17 && time <= 20) {
  console.log("Good Evening 🌆");
} else if ((time >= 21 && time <= 23) || (time >= 0 && time <= 4)) {
  console.log("Good Night 🌙");
} else {
  console.log("Please enter a valid hour between 0 and 23");
}
*/
/*
// PROBLEM 14 : Check whether a given character is uppercase, lowercase, digit, or special symbol.

let it =prompt("Enter It")

if (it>="A" && it<="Z"){
  console.log("It is a Uppercase Character")
}else if (it>="a" && it<="z"){
  console.log("It is a Lowercase Character")
}else if (it>="0" && it<="9"){
  console.log("It is a Digit")
}else{
  console.log("It is a Special Character")
}
*/
/*
// PROBLEM 15 : Nested If: Check if a person can apply for a job — must be over 18, have a degree, and have at least 1 year of experience.

let age = Number(prompt("Enter Your Age"));

if (age >= 18) {
  let degree = prompt("Do you have a degree yes/no");
  if (degree.toLowerCase() === "yes") {
    let exp = Number(prompt("Total Number of Experience"));
    if (exp >= 1) {
      console.log("Eligible for job");
    } else {
      console.log("Not Eligible - less experience");
    }
  } else {
    console.log("Not eligible - no degree");
  }
} else {
  console.log("not eligible - Age less than 18");
}
*/