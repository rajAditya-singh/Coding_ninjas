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
}
const circle = new Circle(5);
console.log(circle.radius);
// console.log(circle.CalDiameter());
