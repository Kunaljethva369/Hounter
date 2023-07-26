let hamburger = document.getElementById('hamburger');
let menuItems = document.getElementById('menuItems');

hamburger.addEventListener('click', function () {
  menuItems.className == 'menu flex' ? menuItems.className = 'menu active flex' : menuItems.className = 'menu flex';
  document.getElementById("menu-bar").classList.toggle("change");
  document.querySelector(".companyName").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  document.body.style.overflow = 'hidden';
});

const navbar = document.getElementById('navbar');
const companyName = document.querySelector('.companyName');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    companyName.classList.add('change');
  } else {
    navbar.classList.remove('scrolled');
    companyName.classList.remove('change');
  }
});

// category Filter
let categoryItems = document.querySelectorAll('.categoryItems');
let cardHouse = document.querySelectorAll('.cardHouse');
for (let i = 0; i < categoryItems.length; i++) {
  categoryItems[i].addEventListener('click', (el) => {
    for (let i = 0; i < cardHouse.length; i++) {
      el.currentTarget.className.includes(cardHouse[i].id) ? cardHouse[i].className = 'cardHouse flex' : cardHouse[i].className = 'cardHouse d-none flex'
    }
  });
}
function toggleBackground(clickedElement) {
  const elements = document.querySelectorAll('.categoryItems');
  elements.forEach((element) => {
    element.classList.remove('active');
  });
  clickedElement.classList.add('active');
}
for (let i = 0; i < categoryItems.length; i++) {
  categoryItems[i].addEventListener('click', function () {
    toggleBackground(this);
  });
}