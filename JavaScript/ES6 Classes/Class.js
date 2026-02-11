//Constructor function
function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;

  this.getDetails = function () {
    console.log(
      `name:${this.name}, color:${this.color}, wheels:${this.wheels}`,
    );
  };
}

// const veh1 = new Vehicle("Car", "red", 4);
// console.log(veh1);
// veh1.getDetails();

//Class In JavaScript-Class Declaration
class VehicleClass {
  //Properties(optional)
  name;
  color;
  wheels;

  //constructor
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }

  //methods
  getDetails() {
    console.log(
      `name:${this.name}, color:${this.color}, wheels:${this.wheels}`,
    );
  }
}
const veh2 = new VehicleClass("Bike", "blue", 2);
console.log(veh2);
veh2.getDetails();
console.log(veh2.__proto__.__proto__);
