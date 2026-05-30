'use strict';

let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let links = document.querySelectorAll(".mobile-menu a")

function classToggler() {
 hamburger.classList.toggle("hamburger_active");
 mobileMenu.classList.toggle("active");
};

hamburger.addEventListener("click", classToggler)

links.forEach(link => {
 link.addEventListener("click", classToggler)
})