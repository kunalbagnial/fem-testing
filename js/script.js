const btnNavEl = document.querySelector(".header__toggle");
const headerEl = document.querySelector(".header");
const overlayEl = document.querySelector(".overlay");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  if (headerEl.classList.contains("nav-open")) {
    overlayEl.style.opacity = "1";
  } else {
    overlayEl.style.opacity = "0";
  }
});
