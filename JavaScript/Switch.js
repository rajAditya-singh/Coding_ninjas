/** Switch Statement */

//Simulate A traffic light using switch statement
// let color = "Yellow"

// switch(color){
//     case "Red": console.log("STOP! The light is Red")
//     break;

//     case "Yellow": console.log("CAUTION! The light is Yellow")
//     break;

//     case "Green": console.log("GO AHEAD!")
//     break;

//     default:console.log("InValid Color")
// }

function coffeeMachine(coffeeType) {
  let answer;

  // Convert the input coffee type to lowercase using the toLowerCase() method.
    answer=coffeeType.toLowerCase();
  // Use a switch statement to handle different coffee types and store the price in 'answer'.
  // Example:
  // case "regular":
  //     answer = "$2.50";
  //     break;
  switch(coffeeType){
    case "Regular":
        answer="$2.50";
    break;  
    case "Latte":
        answer="$3.50";
    break;
    case "Cappuccino":
        answer="$4.00";
    break;
    case "Espresso":
        answer="$2.50";
    break;
    default:
        answer="Invalid Coffee Type"
  }

  // Add a default case to handle any invalid coffee types.

  return answer;
}
console.log(coffeeMachine("Espresso")); // Output: $3.50
console.log(coffeeMachine("Mocha")); // Output: Invalid Coffee Type

