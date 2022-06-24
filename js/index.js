"use strict";

// CHANGE STATE ON HOMEPAGE

const heroOptions = document.querySelectorAll(".hero__options-list");

retroBtn.addEventListener("click", () => {
  setState("var(--color-primary)");
  headerImg.src = "../img/logo/smile_yellow.png";

  // CHANGE STATE ACTIVE
  retroBtn.classList.add("header__color-retro-active");
  vintageBtn.classList.remove("header__color-vintage-active");
  classicBtn.classList.remove("header__color-classic-active");

  // CHANGE COLOR OUTLINE
  changeOutline("var(--color-primary)");
  // CHANGE HOVER EFFECT
  heroOptions.forEach((ele) => {
    ele.style.setProperty("--source-default", "var(--source-yellow)");
  });
});

vintageBtn.addEventListener("click", () => {
  setState("var(--color-secondary)");
  headerImg.src = "../img/logo/smile_pastel.png";

  // CHANGE STATE ACTIVE
  retroBtn.classList.remove("header__color-retro-active");
  vintageBtn.classList.add("header__color-vintage-active");
  classicBtn.classList.remove("header__color-classic-active");

  // CHANGE COLOR OUTLINE
  changeOutline("var(--color-secondary)");

  // CHANGE HOVER EFFECT
  heroOptions.forEach((ele) => {
    ele.style.setProperty("--source-default", "var(--source-pink)");
  });
});

classicBtn.addEventListener("click", () => {
  setState("var(--color-tertiary)");
  headerImg.src = "../img/logo/smile_whitepink.png";

  // CHANGE STATE ACTIVE
  retroBtn.classList.remove("header__color-retro-active");
  vintageBtn.classList.remove("header__color-vintage-active");
  classicBtn.classList.add("header__color-classic-active");

  // CHANGE COLOR OUTLINE
  changeOutline("var(--color-tertiary)");
  // CHANGE HOVER EFFECT
  heroOptions.forEach((ele) => {
    ele.style.setProperty("--source-default", "var(--source-ecru)");
  });
});
