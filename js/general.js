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
