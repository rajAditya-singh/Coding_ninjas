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

// PROBLEM 5 : Check if a given year is leap year or not.
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
