let hamburger = document.getElementById('hamburger');
let menuItems = document.getElementById('menuItems');

hamburger.addEventListener('click', function () {
    menuItems.className == 'menu flex' ? menuItems.className = 'menu active flex' : menuItems.className = 'menu flex';
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.body.style.overflow = 'hidden';
});

const navbar = document.getElementById('navbar');
const companyName = document.querySelector('.companyName');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    companyName.classList.add('whiteName');
  } else {
    navbar.classList.remove('scrolled');
    companyName.classList.remove('whiteName');
  }
});