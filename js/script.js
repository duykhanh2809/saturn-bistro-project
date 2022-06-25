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

// ACTIVE MAP
const map = L.map("map").setView([10.7791023, 106.6924224], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "@NGUYEN DUY KHANH",
}).addTo(map);

map.on("click", function (mapEvent) {
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "check-popup",
      })
    )
    .setPopupContent("Saturn Bistro Project")
    .openPopup();
});
