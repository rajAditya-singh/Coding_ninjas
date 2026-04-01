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
