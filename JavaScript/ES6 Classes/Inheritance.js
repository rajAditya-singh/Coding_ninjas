// INHERITANCE IN ES6 CLASSES
class Vehicle {
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
}

class Car extends Vehicle {
  constructor(color, brand, purpose) {
    super("Car", color, 4);
    this.brand = brand;
    this.purpose = purpose;
  }
}

const Car1 = new Car("Red", "BMW", "Personal");
Car1.getDetails();
console.log(Car1);
