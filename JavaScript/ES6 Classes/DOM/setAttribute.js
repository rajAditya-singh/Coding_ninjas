//element.setAttribute(attributeName, attributeValue);

let element = document.querySelector(".first");
element.setAttribute("id", "first");
console.log(element);
element.style.color = "red";

const element2 = document.getElementById("para");
element2.setAttribute("data-user", "123");
console.log(element2);

const element3 = document.getElementsByClassName("second");
console.log(element3);

// important 
// getElementsByClassName  returns a collection (like an array) of elements, not a single element. setAttribute only works on individual elements, not on collections.
// setAttribute can only be used on a single elment not on a collection of elements.
// Those methods are - getElementsByClassName, getElementsByTagName, getElementsByName, querySelectorAll. All these methods return a collection of elment in either array form or in nodelistform.

//getElementsByTagName
const element4 = document.getElementsByTagName("h2");
console.log(element4);
//getElementsByName
const element5 = document.getElementsByName("name");
console.log(element5);