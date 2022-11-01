const menuHamburger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");
const social_network = document.querySelectorAll(
  "div.social-network  ul  li  "
);
const social_network2 = document.querySelectorAll(
  "div.social-network  ul  li  "
);

const active_page = document.querySelectorAll(" .navbar .nav-links ul li ");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

menuHamburger.addEventListener("click", () => {
  social_network.forEach((social_network) => {
    social_network.classList.toggle("mobile-social-network");
  });
});

navLinks.addEventListener("click", () => {
  active_page.forEach((active_page) => {
    active_page.classList.toggle("active");
  });
});
