//? selecting element from DOM

const burgerMenu = document.querySelector(".nav__burgerMenu");
const dropDownMenu = document.querySelector(".dropDown__linksContainer");
const menuIcon = document.querySelector(".nav__burgerMenu img");
const body = document.querySelector("body");

//?crreating toggle function

const toggle = () => {
  if (dropDownMenu.classList.contains("slide")) {
    menuIcon.setAttribute("src", "/image/icon-hamburger.svg");
    dropDownMenu.classList.remove("slide");

    body.classList.remove("no-scroll");
  } else {
    dropDownMenu.classList.add("slide");

    menuIcon.setAttribute("src", "/image/icon-close.svg");
    body.classList.add("no-scroll");
  }
};

//? toggle efect on Burger Menu icon and slide menu

burgerMenu.addEventListener("click", () => toggle());

//? disable silde dropdwon menu and no scrolling when mobile link clicked

const navLinks = document.querySelectorAll(".mb-nav-links");
const navLinkList = Array.from(navLinks);

navLinkList.map((link) => link.addEventListener("click", () => toggle()));
