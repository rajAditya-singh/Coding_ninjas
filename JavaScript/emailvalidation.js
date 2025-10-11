//Email Verification
//Input an email
//length should be greater than 11
// after . only 2 to 3 characters
// minimum 3 characters before @ and .

let email = "example@es.com";
let emailLen = email.length;
console.log(emailLen);

let dotIndex = email.lastIndexOf(".");
console.log(dotIndex);

let atIndex = email.lastIndexOf("@");
console.log(atIndex);

let lastIndex = emailLen - 1;
console.log(lastIndex);

if (
  emailLen < 11 ||
  lastIndex - dotIndex < 2 ||
  lastIndex - dotIndex > 3 ||
  dotIndex - atIndex <= 3
) {
  console.log("Invalid Email");
} else {
  console.log("Valid Email");
}
