// var username = "Aditya"
// var userage = 24
// console.log(username)
// console.log(userage)

// greetUser(username)

// function greetUser(name) {
//     console.log("*******************************")
//     var greet = "Hello"
//     console.log(`${greet} ${name}, hope u doing fine!`)
//     var currentYear = 2024
//     const year = birthyear(currentYear, userage)
//     console.log("*******************************")
//     return `you were born in ${year}`
// }
// function birthyear(year, age){
//     console.log("Calculating birth year")
//     return year-age
// }
// var byear =  greetUser(username)
// console.log(byear)

// function factorial(n) {
//     if (n === 0) {
//         return 1
//     }

//     return n * factorial(n - 1)
// }
// console.log(factorial(5))

function foo() {
    console.log("Hello foo")
}
function bar() {
    foo()
    console.log("Hello bar")
}
function baz() {
    bar()
    console.log("Hello baz")
}

baz()