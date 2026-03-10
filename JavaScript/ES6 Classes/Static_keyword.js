// STATIC KEYWORD

class Vehicle {
  static type = "Vehicle";
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  getDetails() {
    console.log(`
            Name: ${this.name}
            Color: ${this.color}
            Wheels: ${this.wheels}
        `);
  }

  static Sayhellor() {
    console.log("Hello from Vehicle class");
  }
}

const car = new Vehicle("Car", "Red", 4);
console.log(car.type); // undefined
console.log(Vehicle.type); // Vehicle is the class and type is the static property of the class
car.Sayhellor(); // TypeError: car.Sayhellor is not a function
Vehicle.Sayhellor(); // Hello from Vehicle class


//Static methods can only use static properties and other static methods. They cannot access instance properties or methods. This is because static methods are called on the class itself, not on instances of the class.
