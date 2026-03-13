//RegEx - Reguler Expression used to match and manupulate strings. They provide a concise and flexible way to search, validate, and modify text data.

// to Create a RegEx object, you can use the RegExp constructor or the literal syntax. Here are examples of both:

//Using RegExp Constructor;
const regex = new RegExp("Pattern");

// using RegEx Literal Syntax;

var reGex = /Pattern/;
var text = "this is a Pattern example";

var IsMatch = reGex.test(text);
console.log(IsMatch);

var result = reGex.exec(text);
console.log(result);

var matches = text.match(reGex);
console.log(matches);

var search = text.search(reGex);
console.log(search);

var replace = text.replace(reGex, "new Pattern");
console.log(replace);

var regex1 = /[, ]+/;
var text1 = "Apple, Banana, Orange";
var split = text1.split(regex1);
console.log(split);
// Informations - https://chatgpt.com/share/69b44103-2d8c-800a-9b67-bdbb663e0603
