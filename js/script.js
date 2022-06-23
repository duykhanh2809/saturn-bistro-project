"use strict";

// ACCORDION
const questionAll = document.querySelectorAll(".faq__question");
const answerAll = Array.from(document.querySelectorAll(".faq__answer"));

questionAll.forEach((ele, ind) => {
  ele.addEventListener("click", (event) => {
    const icon = ele.querySelector("i");
    if (answerAll[ind].classList.contains("faq__answer-active")) {
      icon.style.transform = "rotate(0)";
    } else {
      icon.style.transform = "rotate(45deg)";
    }
    answerAll[ind].classList.toggle("faq__answer-active");
  });
});

// CHANGE BACKGROUND-COLOR SUBHOMEPAGE
const retroBtn = document.querySelector(".header__color-retro");
const vintageBtn = document.querySelector(".header__color-vintage");
const classicBtn = document.querySelector(".header__color-classic");
const heroSection = document.querySelector(".section-hero");
const headerImg = document.querySelector(".header__img");
const footerIcon = document.querySelector(".footer__icon");

retroBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "var(--color-primary)";
  // heroSection.style.color = "var(--color-primary)";
  // headerImg.src = "../img/logo/smile_yellow.png";
  footerIcon.style.color = "var(--color-primary)";
});

vintageBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "var(--color-secondary)";
  // heroSection.style.color = "var(--color-secondary)";
  // headerImg.src = "../img/logo/smile_pastel.png";
  footerIcon.style.color = "var(--color-secondary)";
});

classicBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "var(--color-tertiary)";
  // heroSection.style.color = "var(--color-tertiary)";
  // headerImg.src = "../img/logo/smile_whitepink.png";
  footerIcon.style.color = "var(--color-tertiary)";
});
