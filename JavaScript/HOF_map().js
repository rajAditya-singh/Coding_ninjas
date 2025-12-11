/** JS Higher Order Functions */

// map()

// const input = [2,3,4,5,6];
// // let newinput = input.map(())
// let newinput = input.map(()=>{})
// console.log(newinput);
//in map() it take function as an argument and returns new array and we can pass 3 arguments in that function
// 1. currentValue
// 2. index
// 3. array
//index and array are optional parameters but currentValue is mandatory.
// Example : map(function(currentValue, index, array){})

/************************************ */

// const squaredArray = input.map(function(currentValue){
//     return currentValue * currentValue;
// })

/************************************ */

//The other Way of writing the same function using arrow function
// const squaredArray = input.map((num) => {
//     return num * num;})
// console.log(squaredArray); // [4, 9, 16, 25, 36]

/************************************ */

//Using index parameter
// const doubledWithIndex = input.map((n, i)=>{
//     return n*2+i
// })
// console.log(`doubledWithIndex: ${doubledWithIndex}`); // doubledWithIndex: 4,7,10,13,16

/************************************ */

// Mapping over array of objects
// const people = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
// const user = people.map((p)=>{
//     return `${p.name} is ${p.age} years old.`;
// })
// console.log(user)

/************************************ */

// const products = [
//     {id:1, name:'Laptop', price:800},
//     {id:2, name:'Phone', price:500},
//     {id:3, name:'Tablet', price:300}
// ]

// // return the list of product names
// const productName = products.map((pro)=>{
//     return pro.name
// })
// // console.log(`productName: ${productName}`); // productName: Laptop,Phone,Tablet
// console.log(productName)
// //Add a new property discountedPrice to each product with a 10% discount applied
// const addDiscountedPrice = products.map((pro)=>{
//     return {...pro, DiscountedPrice:pro.price-(pro.price*0.1)}
// })
// // console.log(addDiscountedPrice)


/********************************* */
// More About map()
const input = [2,3,4,5,6];
// let newinput = input.map() //it returns undefied is not a function
let newinput = input.map(()=>{})// it returns array of undefined [undefined, undefined, undefined, undefined, undefined]
console.log(newinput);
