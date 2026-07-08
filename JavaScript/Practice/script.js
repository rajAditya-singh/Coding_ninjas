const promiseNew = new Promise((resolve, reject) => {
    console.log('One');
});
promiseNew.then(() => {
    console.log('Three');
});
console.log('Two');