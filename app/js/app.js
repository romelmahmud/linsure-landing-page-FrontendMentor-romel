const burgerMenu = document.querySelector(".nav__burgerMenu");
const dropDownMenu = document.querySelector(".dropDown__linksContainer");
const menuIcon = document.querySelector(".nav__burgerMenu img");

burgerMenu.addEventListener("click", () => {
  if (dropDownMenu.classList.contains("slide")) {
    dropDownMenu.classList.remove("slide");
    dropDownMenu.classList.remove("no-scroll");
    menuIcon.setAttribute("src", "/image/icon-hamburger.svg");
  } else {
    dropDownMenu.classList.add("slide");
    dropDownMenu.classList.add("no-scroll");
    menuIcon.setAttribute("src", "/image/icon-close.svg");
  }
});
