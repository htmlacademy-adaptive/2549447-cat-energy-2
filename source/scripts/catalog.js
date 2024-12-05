const navMain = document.querySelector('.navigation');
const buttonToggle = document.querySelector('.button-toggle');
const navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('navigation--nojs');
navMain.classList.remove('navigation--open');
navMain.classList.add('navigation--close');
buttonToggle.classList.add('button-toggle--open');
buttonToggle.classList.remove('button-toggle--nojs');


navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--close')) {
    navMain.classList.remove('navigation--close');
    navMain.classList.add('navigation--open');
  } else {
    navMain.classList.add('navigation--close');
    navMain.classList.remove('navigation--open');
  }
});

navToggle.addEventListener('click', () => {
  if (navToggle.classList.contains('button-toggle--open')) {
    navToggle.classList.remove('button-toggle--open');
    navToggle.classList.add('button-toggle--close');
  } else {
    navToggle.classList.add('button-toggle--open');
    navToggle.classList.remove('button-toggle--close');
  }
});
