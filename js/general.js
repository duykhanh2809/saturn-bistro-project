"use strict";

// DISABLE - ENABLE SCROLL
function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

disableScroll();

// SHOW LOADING PAGE
window.addEventListener("load", (event) => {
  document.querySelector(".loading").style.display = "none";
  enableScroll();
});

// SCROLL SMOOTHY
const heroMoveDown = document.querySelector(".hero__describe-scroll");
const footerMoveUp = document.querySelector(".footer__scroll-icon");
const sectionDescribe = document.querySelector(".section-describe");

if (heroMoveDown) {
  heroMoveDown.addEventListener("click", () => {
    sectionDescribe.scrollIntoView({
      behavior: "smooth",
    });
  });
}

footerMoveUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// ACTIVE MENU BUTTON
const mainNav = document.querySelector(".main__nav");
const mainBtnOpen = document.querySelector(".main__btn-open");
const mainBtnClose = document.querySelector(".main__btn-close");
const mainBtnIcon = document.querySelector(".main__btn-icon");
const modal = document.querySelector(".modal");

const setMainNav = function () {
  mainBtnOpen.classList.toggle("hidden");
  mainBtnClose.classList.toggle("hidden");
  mainNav.classList.toggle("main__nav-active");
  modal.classList.toggle("modal-active");
};

// CHANGE BACKGROUND-COLOR SUBHOMEPAGE and UPDATE STATE

const retroModifyBtn = document.querySelector(".header__retro-modify");
const vintageModifyBtn = document.querySelector(".header__vintage-modify");
const classicModifyBtn = document.querySelector(".header__classic-modify");
const footerIcon = document.querySelector(".footer__icon");

const setStateSubPage = (color) => {
  footerIcon.style.color = color;

  // CHANGE MENU COLOR
  mainNav.style.backgroundColor = color;
  mainBtnIcon.style.color = color;
  mainBtnOpen.style.setProperty("--color-primary", color);
};
