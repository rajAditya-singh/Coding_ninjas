//Email Verification
//Input an email
//length should be greater than 11
// after . only 2 to 3 characters
// minimum 3 characters before @ and .

// let email = "example@es.com";
// let emailLen = email.length();
// console.log(emailLen);

// let dotIndex = email.lastIndexOf(".");
// console.log(dotIndex);

// let atIndex = email.lastIndexOf("@");
// console.log(atIndex);

// let lastIndex = emailLen - 1;
// console.log(lastIndex);

// if (
//   emailLen < 11 ||
//   lastIndex - dotIndex < 2 ||
//   lastIndex - dotIndex > 3 ||
//   dotIndex - atIndex <= 3
// ) {
//   console.log("Invalid Email");
// } else {
//   console.log("Valid Email");
// }

function main(email) {
  let result;

  // Step 1: Find the index of "@" in the email
  let atIndex = email.indexOf("@")

  // Step 2: Find the index of the last dot "." in the email
  let dotIndex = email.lastIndexOf(".")

  // Step 3: Calculate the length of the email
  let emailLen = email.length;
  // Step 4: Validate the email
  // Check if there are at least 3 characters before the "@" symbol
  // Ensure there is a dot "." at least 4 characters after "@"
  // Make sure there are at least 2 characters after the last dot "."
  // If all conditions are met, assign a welcome message with email name to result
  // If any condition fails, assign "invalid email" to result
  if (emailLen >= 11 && atIndex >= 3 && dotIndex - atIndex >= 4 && (emailLen - 1) - dotIndex >= 2) {
    result = `Welcome ${email} to our site`;
  } else {
    result = "invalid email";
  }
  // Return the final result
  return result;

}
// Example usage
let email = "xy@gmail.com";
console.log(main(email)); // Output: Welcome xys@gmail.com to our site
