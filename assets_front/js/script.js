/* menu mobile */
const menuToggle = document.querySelector("#menuToggle");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
  menuToggle.classList.add("visible");
});

closeMenu.addEventListener("click", () => {
  menuToggle.classList.remove("visible");
});
/* menu mobile */

/* scroll button */
function bounce(element) {
  element.style.transform = "scale(0.8)";
  setTimeout(function () {
    element.style.transform = "scale(1)";
  }, 300);
}
/* scroll button */