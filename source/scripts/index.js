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

const slider = document.querySelector('.slider');
const range = slider.querySelector('.slider__range');
const sliderStyles = getComputedStyle(slider);
let rangePlaceStart;
let clientX;

window.addEventListener('pointerup', stopTheRangeShifting);
range.addEventListener('pointerdown', startTheRangeShifting);

function startTheRangeShifting (event) {
  rangePlaceStart = Number(sliderStyles.getPropertyValue('--range'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheRange);
}

function shiftТheRange (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = rangePlaceStart + deltaX / slider.clientWidth;
  const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty('--range', `${curtainPlace}`);
}

function stopTheRangeShifting () {
  window.removeEventListener('pointermove', shiftТheRange);
}
