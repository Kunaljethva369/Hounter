let hamburger = document.getElementById('hamburger');
let menuItems = document.getElementById('menuItems');

hamburger.addEventListener('click', function () {
    menuItems.className == 'menu flex' ? menuItems.className = 'menu active flex' : menuItems.className = 'menu flex';
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.body.style.overflow = 'hidden';
});