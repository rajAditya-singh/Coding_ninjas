const student = {
    name: "Aditya",
    age: 24,
    hobby: "cricket",
    100: 'hundred',
    show: function () {
        console.log('This is the Student details section');
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

const obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    console.log(key)
}