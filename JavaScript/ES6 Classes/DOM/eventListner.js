// adding onclick event listener to element

const first = document.getElementById("first");
// we should only name the function to be called in eventlistner we should not call the function in eventlistner. and in case of calling the function in eventlistner it will be called as soon as the eventlistner is added to the element and not when the event is triggered.
// and if a parameter is to be passed in the function we will use an callback function in eventlistner and in that callback function we will call the function with the parameter.

// first.addEventListener("click", clickHandler);
first.addEventListener("click", function () {
  clickHandler("first child");
});

function clickHandler(name) {
  console.log(name + " I am Clicked");
}

const btn = document.getElementById("btn");
// console.log(btn);
// btn.addEventListener("click", removeDiv);
// function removeDiv() {
//   document.getElementById("third").remove();
// }

const thirdDiv = document.getElementById("third");
const parent = document.querySelector(".parent");
let removed = false;
btn.addEventListener("click", function () {
  if (!removed) {
    thirdDiv.remove();
    removed = true;
  } else {
    parent.insertBefore(thirdDiv, btn);
    removed = false;
  }
});

//More About Events.
//Mouse Events: click, dblclick, mouseenter, mouseleave, mousemove, mousedown, mouseup
//Keyboard Events: keydown, keyup, keypress
//Form Events: submit, change, focus, blur
//Window Events: load, resize, scroll, unload

//Event Object: When an event is triggered, an event object is created and passed to the event handler function. This object contains information about the event, such as the target element, the type of event, and other relevant data. We can access this object by adding a parameter to our event handler function.

// dblclick event is triggered when the user double clicks on an element.
const dblClick = document.createElement("div");
dblClick.textContent = "Double Click Me";
parent.appendChild(dblClick);
dblClick.addEventListener("dblclick", () => {
  dblClick.style.backgroundColor = "yellow";
});
// mouseenter event is triggered when the mouse pointer enters the element.
dblClick.addEventListener("mouseenter", () => {
  dblClick.style.backgroundColor = "green";
});
// mouseleave event is triggered when the mouse pointer leaves the element.
dblClick.addEventListener("mouseleave", () => {
  dblClick.style.backgroundColor = "";
});
// mousemove event is triggered when the mouse pointer moves within the element.
dblClick.addEventListener("mousemove", () => {
  dblClick.style.backgroundColor = "red";
});
// mousedown event is triggered when the user presses a mouse button down on an element.
dblClick.addEventListener("mousedown", () => {
  console.log("Mouse Button Pressed");
});
// mouseup event is triggered when the user releases a mouse button over an element.
dblClick.addEventListener("mouseup", () => {
  console.log("Mouse Button unPressed");
});
// keydown event is triggered when the user presses a key on the keyboard.
document.body.addEventListener("keydown", () => {
  // console.log("Key Down");
});
// keyup event is triggered when the user releases a key on the keyboard.
document.body.addEventListener("keyup", () => {
  // console.log("Key Up");
});
// keypress event is triggered when the user presses a key on the keyboard and it produces a character value.
document.body.addEventListener("keypress", (e) => {
  console.log("Key Pressed");
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.type);
});
// submit event is triggered when a form is submitted.
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
form.appendChild(input);
const submit = document.createElement("button");
submit.textContent = "Submit";
form.appendChild(submit);
parent.appendChild(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();// this will prevent the default action of the form which is to reload the page.
});
// change event is triggered when the value of an input, select, or textarea element changes.
input.addEventListener("change", () => {
  console.log("Input Value Changed");
});
// focus event is triggered when an element receives focus.
input.addEventListener("focus", () => {
  console.log("Input Focused");
});
// blur event is triggered when an element loses focus.

// load event is triggered when a resource and its dependent resources have finished loading.
window.addEventListener("load", () => {
  console.log("Page Loaded");
});
// resize event is triggered when the document view has been resized.
window.addEventListener("resize", () => {
  console.log("Window Resized");
});
// scroll event is triggered when an element's scrollbar is being scrolled.
window.addEventListener("scroll", () => {
  console.log("Window Scrolled");
} );
// unload event is triggered when the document or a child resource is being unloaded.
