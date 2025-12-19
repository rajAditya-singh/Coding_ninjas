'use strict';
// console.log(this)

function checkthis(){
    console.log(this)
}

// checkthis()

const object={
    name:"Aditya",
    age:24,
    getDetails: function(){
        console.log(this)
    }
}
// object.getDetails()

const object2={
    name:"Raj",
    arrowFunction:()=>{
        console.log(this)
    }
}
object2.getDetails = object.getDetails
// object2.getDetails()
// object2.arrowFunction()

// const arrowFunction = ()=>{
//     console.log(this)
// }
// arrowFunction()

{
    function block(){
        console.log(this)
    }
    // block()
}

const myObject = {
name: "YourName",
regularMethod() {
console.log("regularMethod:", this.name);
},
arrowMethod: () => {
console.log(this);
}
};
myObject.regularMethod(); // Output: "YourName"
myObject.arrowMethod();   // Output: undefined