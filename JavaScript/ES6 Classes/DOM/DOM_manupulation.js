// using insertBefore() method to insert an element before another element in the DOM.
let parent = document.getElementById("list");
let newItem = document.createElement("li");
newItem.textContent = "new item";
parent.insertBefore(newItem, parent.querySelector(".second"));

// nextElementSibling Property
let secondItem = document.querySelector(".second");
console.log(`Next Element : ${secondItem.nextElementSibling.textContent}`);

//previousElementSibling Property
console.log(
  `previous Element : ${secondItem.previousElementSibling.textContent}`,
);
