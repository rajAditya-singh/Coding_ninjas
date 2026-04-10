// Event Propogation - Event Propagation is the order in which the events are received on the page. There are three phases of event propagation - Capturing, Target and Bubbling. By default, events are handled in the bubbling phase, which means that the event is first captured and handled by the innermost element and then propagated to the outer elements.

document.querySelector("h3").addEventListener("click", function (event) {
  event.stopPropagation(); // This will stop the event from propagating to the outer elements
  console.log("h3 clicked");
});
document.querySelector("#innerDiv").addEventListener("click", function (event) {
  event.stopPropagation(); // This will stop the event from propagating to the outer elements
  console.log("Inner clicked");
});
document
  .getElementsByTagName("div")[0]
  .addEventListener("click", function (event) {
    event.stopPropagation(); // This will stop the event from propagating to the outer elements
    console.log("Outer clicked");
  });
document.body.addEventListener("click", function (event) {
  event.stopPropagation(); // This will stop the event from propagating to the outer elements
  console.log("body clicked");
});
