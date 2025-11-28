// Hoisting - Using Variables and Functions before Declaration Them
greetUser(userName)
console.log(userName)   
console.log(userAge)


let userName="Adi"
var userAge=24;
console.log(userName)
console.log(userAge)

function greetUser(name){
    let greet = 'I hope You are doing Fine'
    console.log(`hello! ${name}, ${greet}`)
}
greetUser(userName)