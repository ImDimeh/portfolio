const menuHamburger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");
const social_network = document.querySelectorAll("div.social-network ul li ");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

menuHamburger.addEventListener("click", () => {
  social_network.forEach((social_network) => {
    social_network.classList.toggle("mobile-social-network");
  });
});
console.log(social_network);
