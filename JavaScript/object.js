const student = {
    name: "Aditya",
    age: 24,
    hobby: "cricket",
    100: 'hundred',
    show: function () {
        // console.log('This is the Student details section');
    }
};

// console.log(student)
// console.log(student.name)
// console.log(student["name"])
// console.log(student["age"])
// console.log(student.hobby)
// student.show()

// student.class = 12
// console.log(student["age"])
// console.log(student.age)
// console.log(student)

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     console.log(key)
// }

// --------------------------------------
//complete the calculatePrice function
//Do not alter the starter code
const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 },
};
function calculatePrice(goods) {
    // Hint 1: Initialize a variable to store the total price, e.g., let totalPrice = 0;
    let totalPrice = 0;
    // Hint 2: Use a for-in loop to iterate over the properties (items) in the goods object
    // for (let item in goods) { ... }
    for (let item in goods) {
        const { price, quantity } = goods[item];
        totalPrice += price * quantity;
    }
    
    // Hint 3: Use object destructuring to extract the price and quantity of each item

    // Hint 4: Calculate the total price for each item and add it to the totalPrice

    // Hint 5: Return the totalPrice after the loop
    return totalPrice;
}
console.log(calculatePrice(goods));
//output : 650