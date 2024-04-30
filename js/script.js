console.log("hi");

function bounce(element) {
  element.style.transform = "scale(0.8)";
  setTimeout(function () {
    element.style.transform = "scale(1)";
  }, 300);
}
