// const promiseNew = new Promise((resolve, reject) => {
//     console.log('One');
// });
// promiseNew.then(() => {
//     console.log('Three');
// });
// console.log('Two');

const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("Pizza"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Burger Shop Closed"), 5000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("Ice Cream"), 2000);
});

Promise.all([p1, p2, p3])
.then((result) => {
    console.log(result);
}).catch((err)=>{
    console.log(err)
})