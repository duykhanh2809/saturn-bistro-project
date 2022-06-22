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
