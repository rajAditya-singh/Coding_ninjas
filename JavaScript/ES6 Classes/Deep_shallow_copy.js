const user = {
  name: "Aditya",
  age: 25,
  getDetails: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
  details: {
    city: "Delhi",
    country: "India",
  },
};

const user1 = user;
// user1.name = "Rahul";
// console.log(user.name); // Output: Rahul (because user1 is a reference to the same object)
// console.log(user1.name); // Output: Rahul (because user1 is a reference to the same object)

// Shallow copy
// using Object.assign()
const user2 = Object.assign({}, user);
user2.name = "Priya";
// console.log(user.name); // Output: Rahul (because user1 is a reference to the same object)
// console.log(user2.name); // Output: Priya (because user2 is a separate object)

// using spread operator
const user3 = { ...user };
user3.name = "Anjali";
// console.log(user.name); // Output: Rahul (because user1 is a reference to the same object)
// console.log(user3.name); // Output: Anjali (because user3 is a separate object)

// Deep copy
const user4 = JSON.stringify(user);
console.log(user4); // Output: {"name":"Aditya","age":25,"getDetails":function () { console.log(`Name: ${this.name}, Age: ${this.age}`); }}
const user5 = JSON.parse(user4);
user5.name = "Rohit";
console.log(user.name); // Output: Aditya (because user is a separate object)
console.log(user5.name); // Output: Rohit (because user5 is a separate object)
user5.details.city = "Mumbai";
console.log(user.details.city); // Output: Delhi (because user is a separate object)
console.log(user5.details.city); // Output: Mumbai (because user5 is a separate object)
