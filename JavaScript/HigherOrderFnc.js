/** HIGHER ORDER FUNCTIONS */

let input = [2, 3, 4, 5, 6, 7, 8,]

function operation(input, fn) {
    let output = [];
    for (let num of input) {
        output.push(fn(num))
    }
    return output;
}

function squared(number) {
    return number * number;
}
function cubed(number) {
    return number * number * number;
}

console.log(operation(input, cubed))
console.log(operation(input, squared))