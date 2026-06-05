const btn = document.getElementById("btn")
const text = document.getElementById("text")

btn.addEventListener("click", () => {
    text.textContent = "Async is working"

    setTimeout(() => {
        text.textContent = ""
    })
})

for (var i = 0; i < 5; i++) {
    // console.log(i)
    // setTimeout(() => {
    //     console.log(i)
    // }, 1000)
}
console.log("This is for let loop")
for (let i = 0; i < 5; i++) {
    // console.log(i)
    // setTimeout(() => {
    //     console.log(i)
    // }, 1000)
}

function timer() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000
        );
        console.log("Hello ninjas!");
    }
}
timer();

// Do not edit the rest of the code
