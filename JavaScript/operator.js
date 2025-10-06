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
console.log(avg)
// !(NOT)
let rightToVote = true
// console.log(!rightToVote) 

//console.log(1 && 3 && 4 && 5 && 6 && 7) /* Last Truthy and First Falsy */
//console.log(1 && 3 && 4 && 5 && 6 && 0) /* Last Truthy and First Falsy */

// console.log(NaN || 0 || false || undefined || null) /* Last Falsy and First Truthy */
// console.log(NaN || 0 || "String" || false || undefined || null) /* Last Falsy and First Truthy */