const menuHamburger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");
const social_network = document.querySelector("div.social-network > ul > li  ");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  social_network.classList.toggle("mobile-social-network");
});
