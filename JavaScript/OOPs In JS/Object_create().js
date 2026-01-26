const car = {
  name: "BMW",
  getDetails: function (color) {
    console.log(`Car is ${this.name} and its color is ${color}`);
  },
};

const car1 = Object.create(car);
// console.log(car1);
// console.log(car1.__proto__);
// car1.getDetails("Red");
car1.name = "Audi";
// car1.getDetails("Red");

let parent = {
  name: "Parent",
  children: [],
};
let child1 = Object.create(parent);
child1.name = "Child1";
child1.children.push("Child1");
console.log(parent.children[0]);
