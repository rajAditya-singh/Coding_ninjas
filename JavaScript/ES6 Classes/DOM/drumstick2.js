let buttonInnerHTML;
let noOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}
function makeSound(key) {
  switch (key) {
    case "w":
      var play1 = new Audio("./Sounds/tom-1-28537.mp3");
      play1.play();
      break;

    case "a":
      var play2 = new Audio("./Sounds/tom-2-28541.mp3");
      play2.play();
      break;

    case "s":
      var play3 = new Audio("./Sounds/tom-3-28542.mp3");
      play3.play();
      break;

    case "d":
      var play4 = new Audio("./Sounds/tom-4-28543.mp3");
      play4.play();
      break;

    case "j":
      var play5 = new Audio("./Sounds/snare-28545.mp3");
      play5.play();
      break;

    case "k":
      var play6 = new Audio("./Sounds/kick-bass-28547.mp3");
      play6.play();
      break;

    case "l":
      var play7 = new Audio("./Sounds/crash-28546.mp3");
      play7.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}
