function changeColor(selector) {
  //Implement your function here
  let elements= document.querySelectorAll(selector)
  elements.forEach((element) =>{
      element.style.backgroundColor="yellow"
      element.style.color="black"
  })
}

changeColor(".my-class");
changeColor("#my-id");
changeColor("button");