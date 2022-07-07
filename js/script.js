"use strict";
console.log("Bumbaya");
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

// ACTIVE MENU BUTTON
mainBtnOpen.addEventListener("click", () => {
  setMainNav();
  disableScroll();
});

mainBtnClose.addEventListener("click", () => {
  setMainNav();
  enableScroll();
});

// CHANGE BACKGROUND-COLOR SUBHOMEPAGE and UPDATE STATE

retroModifyBtn.addEventListener("click", () => {
  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.add("header__retro-active");
  vintageModifyBtn.classList.remove("header__vintage-active");
  classicModifyBtn.classList.remove("header__classic-active");

  document.body.style.backgroundColor = "var(--color-primary)";

  setStateSubPage("var(--color-primary)");
});

vintageModifyBtn.addEventListener("click", () => {
  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.remove("header__retro-active");
  vintageModifyBtn.classList.add("header__vintage-active");
  classicModifyBtn.classList.remove("header__classic-active");

  document.body.style.backgroundColor = "var(--color-secondary)";

  setStateSubPage("var(--color-secondary)");
});

classicModifyBtn.addEventListener("click", () => {
  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.remove("header__retro-active");
  vintageModifyBtn.classList.remove("header__vintage-active");
  classicModifyBtn.classList.add("header__classic-active");

  document.body.style.backgroundColor = "var(--color-tertiary)";

  setStateSubPage("var(--color-tertiary)");
});
