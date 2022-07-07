"use strict";

// CHANGE OUTLINE AND STATE FOR BUTTON ON TOP PAGE
const retroBtn = document.querySelector(".header__color-retro");
const vintageBtn = document.querySelector(".header__color-vintage");
const classicBtn = document.querySelector(".header__color-classic");
const heroSection = document.querySelector(".section-hero");
const headerImg = document.querySelector(".header__img");

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

// ACTIVE MENU BUTTON
const imgLogoHeader = document.querySelectorAll(".header__img");
const headerColor = document.querySelector(".header__nav");

mainBtnOpen.addEventListener("click", () => {
  imgLogoHeader.forEach((ele) => ele.classList.toggle("header__img-active"));
  headerColor.classList.toggle("hidden");
  setMainNav();
  disableScroll();
});

mainBtnClose.addEventListener("click", () => {
  imgLogoHeader.forEach((ele) => ele.classList.toggle("header__img-active"));
  headerColor.classList.toggle("hidden");
  setMainNav();
  enableScroll();
});

// REVEAL SECTION
const sectionReveal = document.querySelector(".section-describe");
const sectionRevealFn = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionRevealFn, {
  root: null,
  threshold: 0.075,
});

sectionObserver.observe(sectionReveal);
sectionReveal.classList.add("section-hidden");

// LAZY LOADING IMAGES
// const imageTargets = document.querySelectorAll("img[data-src]");
// const imageLazyLoad = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;
//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//   });
//   observer.unobserve(entry.target);
// };

// const imageObserver = new IntersectionObserver(imageLazyLoad, {
//   root: null,
//   threshold: 0,
// });

// imageTargets.forEach((ele) => {
//   imageObserver.observe(ele);
// });

// CHANGE STATE ON HOMEPAGE
const heroOptions = document.querySelectorAll(".hero__options-list");
retroBtn.addEventListener("click", () => {
  setState("var(--color-primary)");
  headerImg.src = "/img/logo/smile_yellow.png";

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

  setStateSubPage("var(--color-primary)");
});

vintageBtn.addEventListener("click", () => {
  setState("var(--color-secondary)");
  headerImg.src = "/img/logo/smile_pastel.png";

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

  setStateSubPage("var(--color-secondary)");
});

classicBtn.addEventListener("click", () => {
  setState("var(--color-tertiary)");
  headerImg.src = "/img/logo/smile_whitepink.png";

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

  setStateSubPage("var(--color-tertiary)");
});
