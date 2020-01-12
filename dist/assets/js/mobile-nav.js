const menu = document.querySelector('.js-menu');
const mobileMenu = document.querySelector('.js-mobilemenu');
const navbar = document.querySelector('.js-navbar');
const hamIcon = document.querySelector('.ham');

function init(){
  menu.addEventListener(
    'click',
    function(link){
      link.preventDefault();
      _changeClass(mobileMenu);
      transBG(navbar);
    },
    false
  );
}

function closeMenu(){
  mobileMenu.classList.remove("is-active");
  navbar.classList.remove("is-transparent");
  hamIcon.classList.toggle("active");
}

function _changeClass(el) {
  el.classList.toggle("is-active");
}

function transBG(el) {
  el.classList.toggle("is-transparent");
}

init();