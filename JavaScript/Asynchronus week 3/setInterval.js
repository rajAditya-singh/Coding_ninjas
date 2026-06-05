const TimeText = document.getElementById("time")

let seconds = 0
TimeText.textContent = seconds;

const timer = setInterval(() => {
    seconds++
    TimeText.textContent = seconds;

    if (seconds >= 10) {
        clearInterval(timer)
    }
}, 1000)
//how to know datatype of setInterval.
console.log(typeof timer)