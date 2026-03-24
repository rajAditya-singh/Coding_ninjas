//Backticks(``) are used to create template literals in JavaScript. Template literals allow you to embed expressions and create multi-line strings more easily than traditional string concatenation.
//In the context of DOM manipulation, template literals can be used to create HTML elements and insert them into the DOM. This can be done using the innerHTML property or by creating elements and appending them to the DOM.

// let className = "my-class";
// let content = "Hello i am using Backticks to create a div element with class name and content";

// let element = `<div class=${className}>${content}</div>`
// console.log(element);

//Adding through innerHTML
// let parent= document.querySelector(".parent")
// parent.innerHTML = parent.innerHTML + element;
// console.log (document.querySelector(".my-class"));

// adding through insertAdjacentHTML() method:
// let parent= document.querySelector(".parent")
// parent.insertAdjacentHTML("afterbegin", element);
// parent.insertAdjacentHTML("beforeend", element);

// Adding through insertBefore() method:
// let parent= document.querySelector(".parent")
// let newDiv = document.createElement("div")
// newDiv.textContent="Inserted using insertBefore() method before second div"
// let secondDiv = document.querySelector("#second")
// parent.insertBefore(newDiv, secondDiv)

// Adding through appendChild()/append() method:
//adding multiple elements  at once using append() method
let elements = `
<div class="element">Element 1</div>
<div class="element">Element 2</div>
<div class="element">Element 3</div>
`;

let parent= document.querySelector(".parent")

let tempDiv = document.createElement("div");
tempDiv.innerHTML=elements;
// while(tempDiv.firstChild){
//     parent.appendChild(tempDiv.firstChild);
// }

// Array.from(tempDiv.children).forEach(child => {
//     parent.append(child)
// });
// console.log(...tempDiv.children);
parent.append(...tempDiv.children)