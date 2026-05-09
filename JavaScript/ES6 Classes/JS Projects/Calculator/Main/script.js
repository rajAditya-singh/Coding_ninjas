// Kindly do not modify the prewritten code.
// Your task is to implement the functions below to make the calculator work.

let display = document.getElementById("display");
let currentInput = "";

function clearDisplay() {
  // TODO: Implement the clearDisplay function
  // This function should reset the currentInput and update the display
  currentInput = "";
  display.textContent = "0";
}

function deleteLast() {
  // TODO: Implement the deleteLast function
  // This function should remove the last character from currentInput and update the display
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || "0";
}

function appendNumber(number) {
  // TODO: Implement the appendNumber function
  // This function should add the given number to currentInput and update the display
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  // TODO: Implement the appendOperator function
  // This function should add the given operator to currentInput and update the display
  currentInput += operator;
  display.textContent = currentInput;
}

function calculateResult() {
  // TODO: Implement the calculateResult function
  // This function should evaluate the currentInput, display the result, and handle errors
  try {
    // Evaluate the expression and update the display
    let result = eval(currentInput);
    // console.log(currentInput)
    display.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    // Handle errors (e.g., invalid expression)
    display.textContent = "Error";
    currentInput = "";
  }
}
