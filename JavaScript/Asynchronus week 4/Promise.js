const request = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Just started");
        // resolve({ name: 'aditya', age: 24 })
        // reject("Ops Something worng Happaned!")
    }, 1000)
});

request.then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Game Ended")
})

console.log(reject)