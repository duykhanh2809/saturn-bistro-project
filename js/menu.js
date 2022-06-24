"use strict";

// CHANGE BACKGROUND-COLOR MENUPAGE
const bodyClasslist = document.body.classList;

if (bodyClasslist.contains("regular-body")) {
  document.body.style.backgroundColor = "var(--color-pale-pink)";
} else if (bodyClasslist.contains("beer-body")) {
  document.body.style.backgroundColor = "var(--color-beer)";
} else if (bodyClasslist.contains("coffee-body")) {
  document.body.style.backgroundColor = "var(--color-coffee)";
} else if (bodyClasslist.contains("cocktails-body")) {
  document.body.style.backgroundColor = "var(--color-cocktails)";
} else if (bodyClasslist.contains("wines-body")) {
  document.body.style.backgroundColor = "var(--color-wines)";
}

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

// CHANGE BACKGROUND-COLOR MENUPAGE

retroBtn.addEventListener("click", () => {
  headerImg.src = "../img/logo/smile_yellow.png";
  footerIcon.style.color = "var(--color-primary)";

  // CHANGE STATE
  retroBtn.classList.add("header__color-retro-active");
  vintageBtn.classList.remove("header__color-vintage-active");
  classicBtn.classList.remove("header__color-classic-active");

  changeOutline("var(--color-primary)");
});

vintageBtn.addEventListener("click", () => {
  headerImg.src = "../img/logo/smile_pastel.png";
  footerIcon.style.color = "var(--color-secondary)";

  // CHANGE STATE
  retroBtn.classList.remove("header__color-retro-active");
  vintageBtn.classList.add("header__color-vintage-active");
  classicBtn.classList.remove("header__color-classic-active");

  changeOutline("var(--color-secondary)");
});

classicBtn.addEventListener("click", () => {
  headerImg.src = "../img/logo/smile_whitepink.png";
  footerIcon.style.color = "var(--color-tertiary)";

  // CHANGE STATE
  retroBtn.classList.remove("header__color-retro-active");
  vintageBtn.classList.remove("header__color-vintage-active");
  classicBtn.classList.add("header__color-classic-active");

  changeOutline("var(--color-tertiary)");
});
