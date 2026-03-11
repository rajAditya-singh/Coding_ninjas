class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //   CalDiameter() {
  //     return this.radius * 2;
  //   }

  //Getter
  get Diameter() {
    return this.radius * 2;
  }

  //setter
  set Diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }
}
const circle = new Circle(5);
console.log(circle.radius);
// console.log(circle.CalDiameter());
console.log(circle.Diameter);
circle.radius = 6;
console.log(circle.radius);

circle.Diameter = 30;
console.log(circle.Diameter);
console.log(circle.radius);


// Getters and setters are used to:

// ✔ Access private properties
// ✔ Modify private properties safely
// ✔ Validate data
// ✔ Protect internal data