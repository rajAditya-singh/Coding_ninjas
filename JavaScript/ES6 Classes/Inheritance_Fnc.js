function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}

Vehicle.prototype.getVehicleDetails = function () {
  console.log(`name: ${this.name}
    color: ${this.color}
    wheels: ${this.wheels}`);
};

function Car(brand, seats) {
  Vehicle.call(this, "car", "Red", 4);
  this.brand = brand;
  this.seats = seats;
}
// to call .getVehicleDetails method of Vehicle constructor function in Car constructor function
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.getDetails = function () {
  console.log(`name: ${this.name}
    color: ${this.color}
    wheels: ${this.wheels}
    brand: ${this.brand}
    seats: ${this.seats}`);
};

const car1 = new Car("BMW", 5);
console.log(car1);
