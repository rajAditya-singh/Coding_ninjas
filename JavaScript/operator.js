/** OPERATORS IN JAVASCRIPT **/

//Assignment Operator(=)
let a=10;
// console.log(a)
let b=a;
// console.log(b)
let c =a =20;
// console.log(a)
// console.log(c)

//Arithematic Operator(+, -, *, /, %(Modulus))
// console.log(10 + 2)
// console.log(10 - 2)
// console.log(10 * 2)
// console.log(10 / 2)
// console.log(9 % 5)

//More Arithematic Operator (++(Increment), --(Decrement), +(Unary Plus), -(Unary Minus), **(To The Power))
let i = 10;

// ++(Increment)
i=i+1
i=++i /*PreIncrement */
i++ /*PostIncrement */
++i /*PreIncrement */
// console.log(++i)
// console.log(i++)
// console.log(i)

// --(Decrement)
i=--i /*PreDecrement */
// console.log(i)
i=i-1 
// console.log(i)
i--
// console.log(i)
--i
// console.log(i)

// +(Unary Plus)
let num="43"
// console.log(+num)
let boolPlus = true;
// console.log(+boolPlus)
let string = "Invalid NaN"
// console.log(+string)
let nullVal = null
// console.log(+nullVal)

// -(Unary Minus)
let num2="43"
// console.log(-num2)
let boolPlus2 = false;
// console.log(-boolPlus2)
let string2 = "Invalid NaN"
// console.log(-string2)
let nullVal2 = null
// console.log(-nullVal2)

//** (To The Power)
let z=2;
let q = 6;
// console.log(z ** q)

//Augmented Operator(+=, -=, *=, /=)
let d=20;
d+=10
// console.log(d)
d-=15
// console.log(d)
d*=3
// console.log(d)
d/=9
// console.log(d)

//Comparison Operator
// (==, !=, <, <=, >, >=, ===, !==)
// console.log(5 == 6)
// console.log(5 != 6)
// console.log(5 < 6)
// console.log(5 <= 6)
// console.log(5 >= 6)
// console.log(5 > 6)
// console.log('5' === 5)
// console.log('5' !== 5)


//Logical Operator (&&(AND), ||(OR), !(NOT))

// &&(AND)
let grade = 61;
let scholership = 79;
let eligible = (grade>60) && (scholership>75)
// console.log(eligible)

// ||(OR)
let m1=60
let m2=40
let m3=80
let eligibilty = m1>75 || m2>90 || m3>70
// console.log(eligibilty)
let avg = (m1 + m2 + m3)/3
// console.log(avg)
// !(NOT)
let rightToVote = true
// console.log(!rightToVote) 

//console.log(1 && 3 && 4 && 5 && 6 && 7) /* Last Truthy and First Falsy */
//console.log(1 && 3 && 4 && 5 && 6 && 0) /* Last Truthy and First Falsy */

// console.log(NaN || 0 || false || undefined || null) /* Last Falsy and First Truthy */
// console.log(NaN || 0 || "String" || false || undefined || null) /* Last Falsy and First Truthy */


// /** Type Coercion */
// console.log('5' + 5) /* String Concatenation */
// console.log('5' - 5) /* Arithmetic Operation */
// console.log('5' * 5) /* Arithmetic Operation */
// console.log('5' / 5) /* Arithmetic Operation */
// console.log('5' - '2') /* Arithmetic Operation */
// console.log('5' * '2') /* Arithmetic Operation */
// console.log('5' / '2') /* Arithmetic Operation */
// console.log('5' + '2') /* String Concatenation */
// console.log('5' + true) /* String Concatenation */
// console.log('5' - true) /* Arithmetic Operation */
// console.log('5' + false) /* String Concatenation */
// console.log('5' - false) /* Arithmetic Operation */

 

/* Type Conversion */
// convert to Number 
// console.log("*****To Number*****")
// console.log(Number('5')) /* String to Number */
// console.log(Number(true)) /* Boolean to Number */
// console.log(Number(false)) /* Boolean to Number */
// console.log(Number(null)) /* Null to Number */
// console.log(Number(undefined))  /* Undefined to Number */
// console.log(Number('Hello')) /* Invalid String to Number */ 
// console.log(Number(NaN)) /* NaN to Number */    


// // convert to String
// console.log("*****To String*****")
// console.log(String(5)) /* Number to String */
// console.log(String(true)) /* Boolean to String */
// console.log(String(false)) /* Boolean to String */
// console.log(String(null)) /* Null to String */
// console.log(String(undefined))  /* Undefined to String */
// console.log(String(NaN)) /* NaN to String */        

// //parseInt
// console.log("*****parseInt*****")
// console.log(parseInt('1235f'))
// console.log(parseInt('f1235f'))
// console.log(parseInt('12.35f'))

// //parseFloat
// console.log("*****parseFloat*****")
// console.log(parseFloat('12.35f'))
// console.log(parseFloat('f12.35f'))

// // Convert to Boolean
// console.log("*****To Boolean*****")
// console.log(Boolean(5)) /* Number to Boolean */
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(" "))
// console.log(Boolean("Hello")) /* String to Boolean */
// console.log(Boolean(null)) /* Null to Boolean */
// console.log(Boolean(undefined))  /* Undefined to Boolean */
// console.log(Boolean(NaN)) /* NaN to Boolean */

let num1="50"
let num3="50"
let num4="50"
// let avgnum= (Number(num1) + Number(num3) + Number(num4)) / 3
let avgnum=(parseFloat(num1) + parseFloat(num3) + parseFloat(num4)) / 3

// console.log(avgnum)

let originalPrice = 1000;
let discountPercent = 15;
let finalPrice =originalPrice - (originalPrice * discountPercent) / 100;

console.log(finalPrice)

function temperatureInCelcius(temperatureInCelsius) {
  // Convert the temperature from Celsius to Fahrenheit
  let fahrenheit;
    fahrenheit=(temperatureInCelsius * 9/5) + 32
  // console.log(fahrenheit)
  // Check if the Fahrenheit value is greater than 86
  let isHot;
    isHot=fahrenheit>86
  return isHot;
}
console.log(temperatureInCelcius(30)); // Output: true
console.log(temperatureInCelcius(20)); // Output: false
