const menuHamburger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");
const social_network = document.querySelector(".social-network >");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  social_network.classList.toggle("mobile-social-network");
});
