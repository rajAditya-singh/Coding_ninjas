function greet(wish) {
    console.log(`${wish()}, Welcome to the JS cource`)
}

function sayHi() {
    return "Hi!"
}
function sayHello() {
    return "Hello!"
}
function sayGm() {
    return "Good Morning!"
}

greet(sayHi)
greet(sayHello)
greet(sayGm)

// functions inside functions (Returning function from another function)

// function greet(message) {
//     return function (wishes) {
//         console.log(`${wishes}, ${message}`)
//     }
// }
// const gm = greet("Have a nice Day!")
// gm("Good Morning")
//Other way to call
// greet("Have a nice Day!")("Good Morning")