//appendChild() method is used to add a child element to the parent element. It takes the child element as an argument and appends it to the end of the list of children of the parent element.
// let parentElement = document.querySelector(".parent");
// console.log(parentElement);

// let childElement = document.createElement("div");
// parentElement.appendChild(childElement);
// childElement.textContent = "Hello I am a child element";
// console.log(childElement);

//append() method is used to add a child element to the parent element. It takes the child element as an argument and appends it to the end of the list of children of the parent element. It can also take multiple arguments and append them all at once.
let parentElement = document.querySelector(".parent");
console.log(parentElement);

let childElement1 = document.createElement("div");
childElement1.textContent = "Hello I am a child element 1";
let childElement2 = document.createElement("div");
childElement2.textContent = "Hello I am a child element 2";
parentElement.append(childElement1, childElement2);
console.log(childElement1);
console.log(childElement2);