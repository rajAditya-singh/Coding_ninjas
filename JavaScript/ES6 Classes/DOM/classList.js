//ClassList
//The classList property returns the class name(s) of an element, as a DOMTokenList object. This can then be used to manipulate the class list.

// Get the class list of an element
let classList = element.classList;
// Use methods to manipulate classes
element.classList.add("new-class");
element.classList.remove("old-class");
element.classList.toggle("active-class");
element.classList.contains("class-name");

const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.onclick = function () {
  box.classList.toggle("active");
};

// Replace a class:
element.classList.replace("old-class", "new-class");

// Loop through classes:
element.classList.add("class1", "class2", "class3");
for (let className of element.classList) {
  console.log(className);
}

// Key Differences Between className and classList:
// Feature                      className                   classList

// Data Type                    String                      DOMTokenList

// Flexibility                  Manipulates the             Offers methods to manipulate individual classes
//                              entire class
//                              attribute

// Ease of Use                  Requires manual string      Provides built-in methods for common operations
//                              operations

// Risk of Overwriting Classes  High                        Low
//
