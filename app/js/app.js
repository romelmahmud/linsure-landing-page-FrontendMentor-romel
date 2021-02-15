const burgerMenu = document.querySelector(".nav__burgerMenu");
const dropDownMenu = document.querySelector(".dropDown__linksContainer");

burgerMenu.addEventListener("click", () => {
  if (dropDownMenu.classList.contains("slide")) {
    dropDownMenu.classList.remove("slide");
    dropDownMenu.classList.remove("no-scroll");
  } else {
    dropDownMenu.classList.add("slide");
    dropDownMenu.classList.add("no-scroll");
  }
});
