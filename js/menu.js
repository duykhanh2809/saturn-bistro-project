"use strict";

// CHANGE BACKGROUND-COLOR MENUPAGE
const bodyClasslist = document.body.classList;

if (bodyClasslist.contains("regular-body")) {
  document.body.style.backgroundColor = "var(--color-pale-pink)";
} else if (bodyClasslist.contains("beer-body")) {
  document.body.style.backgroundColor = "var(--color-beer)";
} else if (bodyClasslist.contains("coffee-body")) {
  document.body.style.backgroundColor = "var(--color-coffee)";
} else if (bodyClasslist.contains("cocktails-body")) {
  document.body.style.backgroundColor = "var(--color-cocktails)";
} else if (bodyClasslist.contains("wines-body")) {
  document.body.style.backgroundColor = "var(--color-wines)";
}

// BACKGROUND-MENU HOVER CHANGE
const optionList = document.querySelectorAll(".menu__option-list");
const colorBodyMenu = [
  "--color-pale-pink",
  "--color-beer",
  "--color-coffee",
  "--color-cocktails",
  "--color-wines",
];

optionList.forEach((ele, ind) => {
  ele.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = `var(${colorBodyMenu[ind]})`;
  });
});

// CHANGE BACKGROUND-COLOR MENUPAGE
const retroBtn = document.querySelector(".header__color-retro");
const vintageBtn = document.querySelector(".header__color-vintage");
const classicBtn = document.querySelector(".header__color-classic");
const heroSection = document.querySelector(".section-hero");
const headerImg = document.querySelector(".header__img");
const footerIcon = document.querySelector(".footer__icon");

retroBtn.addEventListener("click", () => {
  // document.body.style.backgroundColor = "var(--color-primary)";
  // heroSection.style.color = "var(--color-primary)";
  headerImg.src = "../img/logo/smile_yellow.png";
  footerIcon.style.color = "var(--color-primary)";
});

vintageBtn.addEventListener("click", () => {
  // document.body.style.backgroundColor = "var(--color-secondary)";
  // heroSection.style.color = "var(--color-secondary)";
  headerImg.src = "../img/logo/smile_pastel.png";
  footerIcon.style.color = "var(--color-secondary)";
});

classicBtn.addEventListener("click", () => {
  // document.body.style.backgroundColor = "var(--color-tertiary)";
  // heroSection.style.color = "var(--color-tertiary)";
  headerImg.src = "../img/logo/smile_whitepink.png";
  footerIcon.style.color = "var(--color-tertiary)";
});
