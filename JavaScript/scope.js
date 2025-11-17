//SCOPES in Javascript

//Global Scope -- var is a global scope
//Functional Scope -- by default all var let const are functionsal scope
//Block Scope -- only let and const are blocked scope i.e. they can not be accessed outside the block{}

var varNum = 10;
let letNum = 20
const constNum = 30

function print() {
    var varLocal = 40
    let letLocal = 50
    const constLocal = 60

    console.log(varLocal, letLocal, constLocal)
    console.log(varNum, letNum, constNum)
}

console.log(varNum, letNum, constNum)
print()

//Block Scope
{
    var varBlock = 10;
    let letBlock = 20
    const constBlock = 30
    console.log(letBlock)
    console.log(constBlock)
}
console.log(varBlock)
console.log(letBlock)
console.log(constBlock)