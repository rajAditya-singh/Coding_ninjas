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
    
  }
}
const circle = new Circle(5);
console.log(circle.radius);
// console.log(circle.CalDiameter());
Circle.Diameter=20; 
console.log(circle.Diameter);
console.log(circle.radius);