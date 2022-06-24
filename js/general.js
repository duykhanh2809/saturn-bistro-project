"use strict";

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

// CHANGE OUTLINE AND STATE FOR BUTTON ON TOP PAGE
const retroBtn = document.querySelector(".header__color-retro");
const vintageBtn = document.querySelector(".header__color-vintage");
const classicBtn = document.querySelector(".header__color-classic");
const heroSection = document.querySelector(".section-hero");
const headerImg = document.querySelector(".header__img");
const footerIcon = document.querySelector(".footer__icon");

const setState = function (colorToSet) {
  document.body.style.backgroundColor = colorToSet;
  heroSection.style.color = colorToSet;
  footerIcon.style.color = colorToSet;
};

const changeOutline = function (colorToConvert) {
  retroBtn.style.setProperty("--color-button", colorToConvert);
  vintageBtn.style.setProperty("--color-button", colorToConvert);
  classicBtn.style.setProperty("--color-button", colorToConvert);
};
