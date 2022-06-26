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

// ACTIVE MENU BUTTON
const mainNav = document.querySelector(".main__nav");
const mainBtnOpen = document.querySelector(".main__btn-open");
const mainBtnClose = document.querySelector(".main__btn-close");
const mainBtnIcon = document.querySelector(".main__btn-icon");
const mainOpt = document.querySelector(".main__options");
const mainTime = document.querySelector(".main__time");
const mainContact = document.querySelector(".main__contact");
const modal = document.querySelector(".modal");

mainBtnOpen.addEventListener("click", (event) => {
  mainBtnOpen.classList.toggle("hidden");
  mainBtnClose.classList.toggle("hidden");
  mainNav.classList.toggle("main__nav-active");
  modal.classList.toggle("modal-active");
  disableScroll();
});

mainBtnClose.addEventListener("click", (event) => {
  mainBtnOpen.classList.toggle("hidden");
  mainBtnClose.classList.toggle("hidden");
  mainNav.classList.toggle("main__nav-active");
  modal.classList.toggle("modal-active");
  enableScroll();
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
  // CHANGE MENU COLOR
  mainNav.style.backgroundColor = "var(--color-primary)";
  mainBtnIcon.style.color = "var(--color-primary)";
  mainBtnOpen.style.setProperty("--color-primary", "var(--color-primary)");
});

vintageModifyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "var(--color-secondary)";
  footerIcon.style.color = "var(--color-secondary)";
  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.remove("header__retro-active");
  vintageModifyBtn.classList.add("header__vintage-active");
  classicModifyBtn.classList.remove("header__classic-active");
  // CHANGE MENU COLOR
  mainNav.style.backgroundColor = "var(--color-secondary)";
  mainBtnIcon.style.color = "var(--color-secondary)";
  mainBtnOpen.style.setProperty("--color-primary", "var(--color-secondary)");
});

classicModifyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "var(--color-tertiary)";
  footerIcon.style.color = "var(--color-tertiary)";
  // CHANGE STATE ACTIVE
  retroModifyBtn.classList.remove("header__retro-active");
  vintageModifyBtn.classList.remove("header__vintage-active");
  classicModifyBtn.classList.add("header__classic-active");
  // CHANGE MENU COLOR
  mainNav.style.backgroundColor = "var(--color-tertiary)";
  mainBtnIcon.style.color = "var(--color-tertiary)";
  mainBtnOpen.style.setProperty("--color-primary", "var(--color-tertiary)");
});

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
