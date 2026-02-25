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
  //Private Property
  #regNumber;
  //constructor
  constructor(name, color, wheels, number) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.#regNumber = number;
  }

  //methods this is called getter method
  getDetails() {
    console.log(
      `name:${this.name}, color:${this.color}, wheels:${this.wheels}, regNumber:${this.#regNumber}`,
    );
  }
}
const veh2 = new VehicleClass("Bike", "blue", 2, "ABC123");
console.log(veh2);
veh2.getDetails();
console.log(veh2.name); 
console.log(veh2.#regNumber); // This will throw an error because #regNumber is private
console.log(veh2.__proto__.__proto__);
