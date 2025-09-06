// Mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navLinks = document.querySelectorAll(".main-nav-link");

// Toggle menu when button clicked
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  });
});
