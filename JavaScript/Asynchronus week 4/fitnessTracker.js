function trackFitness(exercise, duration) {
    //Implement your promise here
    return new Promise((resolve, reject) => {
        if (duration > 0) {
            console.log(`The Exercise: ${exercise}, Duration: ${duration}`)
            setTimeout(() => {
                resolve(duration)
            }, 5000)

        } else {
            reject("Invalid duration. Please provide a positive number")
        }
    })
}

trackFitness("Running", -10)
    .then((duration) => {
        console.log(`Total duration: ${duration} minutes.`);
    })
    .catch((error) => {
        console.log(`Failed to track fitness: ${error}`);
    });