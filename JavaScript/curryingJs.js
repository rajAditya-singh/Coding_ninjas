// Normal Function
function add(a, b) {
    return a + b
}
// console.log(add(2, 3))

//Currying Function
function add2(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

// console.log(add2(2)(3)(4))

//**************************************** */

function power(a) {
    return function (b) {
        return b ** a
    }
}

const square = power(2)
console.log(square(3))
console.log(square(5))
console.log(square(4))

const cube = power(3)
console.log(cube(3))
console.log(cube(5))
console.log(cube(4))

// In simple words, Currying is 