function Movie(title) {
  this.title = title;
}

Movie.prototype.getDetails = function () {
  //Prototype does not create a new copy for each object but shares the same method this way memory is saved.
  console.log(`Movie: ${this.title}`);
};

const movie1 = new Movie("Avatar");

// console.log(movie1);
movie1.year = 2020;
// console.log(movie1)

const movie2 = new Movie("Inception");
// console.log(movie2)

// console.log(movie1.__proto__)
<<<<<<< HEAD
console.log(movie2.__proto__)
console.log(movie2.__proto__.__proto__)
console.log(movie2.__proto__.__proto__.__proto__)
=======
// console.log(movie2.__proto__.__proto__.__proto__)
>>>>>>> d70521a4bc39be745da3b967cc7f9191fa938a33

function Game(name, platform) {
  this.name = name;
  this.platform = platform;
}
// console.log(Game.prototype)
const fifa = new Game("Fifa 23", "PS5");
// console.log(fifa.__proto__ === Game.prototype)

let obj = { a: 1, b: 2 };
// console.log(Object.getPrototypeOf(obj));
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(obj) === Object.prototype);
// console.log(Object.getPrototypeOf(obj) === obj.__proto__);
// console.log(Object.prototype === obj.__proto__);

function Person(name) {
  this.name = name;
}
Person.prototype.age = 30;

const john = new Person("John");

john.__proto__.age = 40; // Instance property

// console.log(john.age); // Output: 40
// console.log(Person.prototype.age); // Output: 40 why?   Because john.__proto__ points to Person.prototype, so modifying john.__proto__.age modifies Person.prototype.age.

const myobject = { a: 1 };
console.log(myobject.__proto__);
// myobject.prototype.b = 2; //  This will not work as expected because 'prototype' is not a property of instances.
