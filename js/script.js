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

// CHANGE BACKGROUND-COLOR SUBHOMEPAGE and UPDATE STATE

const retroModifyBtn = document.querySelector(".header__retro-modify");
const vintageModifyBtn = document.querySelector(".header__vintage-modify");
const classicModifyBtn = document.querySelector(".header__classic-modify");

retroModifyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "var(--color-primary)";
  footerIcon.style.color = "var(--color-primary)";

  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.add("header__retro-active");
  vintageModifyBtn.classList.remove("header__vintage-active");
  classicModifyBtn.classList.remove("header__classic-active");
});

vintageModifyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "var(--color-secondary)";
  footerIcon.style.color = "var(--color-secondary)";

  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.remove("header__retro-active");
  vintageModifyBtn.classList.add("header__vintage-active");
  classicModifyBtn.classList.remove("header__classic-active");
});

classicModifyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "var(--color-tertiary)";
  footerIcon.style.color = "var(--color-tertiary)";

  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.remove("header__retro-active");
  vintageModifyBtn.classList.remove("header__vintage-active");
  classicModifyBtn.classList.add("header__classic-active");
});
