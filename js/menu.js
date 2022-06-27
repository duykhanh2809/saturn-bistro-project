"use strict";

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

  setStateSubPage("var(--color-primary)");
});

vintageModifyBtn.addEventListener("click", () => {
  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.remove("header__retro-active");
  vintageModifyBtn.classList.add("header__vintage-active");
  classicModifyBtn.classList.remove("header__classic-active");

  setStateSubPage("var(--color-secondary)");
});

classicModifyBtn.addEventListener("click", () => {
  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.remove("header__retro-active");
  vintageModifyBtn.classList.remove("header__vintage-active");
  classicModifyBtn.classList.add("header__classic-active");

  setStateSubPage("var(--color-tertiary)");
});
