const car = {
  name: "car",
  color: "Red",
  getDetails: function (brand, seat) {
    console.log(`
    this is a ${this.name} and its color is ${this.color} and 
    brand is ${brand} with seat capacity of ${seat}`);
  },
};

car.getDetails("Germany", 5);

const bus = {
  name: "bus",
  color: "Blue",
};

// using Call()
car.getDetails.call(bus, "mercedes", 50);
// using Apply()
car.getDetails.apply(bus, ["volvo", 50]);

// using Bind()
const veh = car.getDetails.bind(bus);
veh("scania", 40);
veh("scania", 10);
veh("scania", 20);
