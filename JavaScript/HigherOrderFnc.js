/** HIGHER ORDER FUNCTIONS */

// let input = [2, 3, 4, 5, 6, 7, 8,]

// function operation(input, fn) {
//     let output = [];
//     for (let num of input) {
//         output.push(fn(num))
//     }
//     return output;
// }

// function squared(number) {
//     return number * number;
// }
// function cubed(number) {
//     return number * number * number;
// }

// console.log(operation(input, cubed))
// console.log(operation(input, squared))

function main() {
  // Define the array to be processed
  const array = [2, 4, 6, 2, 7, 8];

  // Create the customMap function with two arguments
  function customMap(array, func) {
      // Create an empty(new) array to store the results.
      let result = [];
      // Iterate over each element in the input array with the help of loop
      for (let num of array) {
            result.push(func(num));           
      };
          // Inside the loop Apply the callback function to the current element
      
          // Add the result to the new array with the help of push method
        return result;
      // Return the new array outside the loop with the modified values
  }

  return customMap;
}