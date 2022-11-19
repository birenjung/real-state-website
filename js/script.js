let burgerMenu = document.querySelector(".burger-menu");
let menuLinks = document.querySelector(".menu-links");

function bgMenu() {
    burgerMenu.classList.toggle("is-active");
    menuLinks.classList.toggle("is-active");
}