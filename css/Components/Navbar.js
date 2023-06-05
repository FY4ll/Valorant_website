const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlink");
const navLink = document.querySelectorAll(".navbutton");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}