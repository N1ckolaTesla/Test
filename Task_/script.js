let right = 0;
let space = document.querySelector('.reviews-items');

function showRight() {
  let contentWidth = document.querySelector('.reviews-content').getBoundingClientRect().width;
  let userWidth = document.documentElement.clientWidth;
  let userWidthParsed = parseInt(userWidth);
  let difference = (1200 - contentWidth);

  if (userWidthParsed < 1300 && right < difference) {
      let timer = setInterval(() => {
        right += 1;
        if (right % 288 == 0) {
          clearInterval(timer);
        } else if (right >= difference) {
          right = difference;
          clearInterval(timer);
        }
        space.style.right = right + 'px';
      }, 1);
  }
}

function showLeft() {
  let contentWidth = document.querySelector('.reviews-content').getBoundingClientRect().width;
  let userWidth = document.documentElement.clientWidth;
  let userWidthParsed = parseInt(userWidth);
  let difference = (1200 - contentWidth);

  if (userWidthParsed < 1300) {
      let timer = setInterval(() => {
        right -= 1;
        if (right == difference - 288) {
          clearInterval(timer);
        } else if (right <= 0) {
          right = 0;
          clearInterval(timer);
        }
        space.style.right = right + 'px';
      }, 1);
  }
}

let numLeft = 0;

window.addEventListener('resize', () => {
  let slideWidth = document.querySelector('.slide-active').clientWidth;
  let trackRight = document.querySelector('.track').style.right;
  const slides = document.querySelectorAll('.slide');
  let trackRightParsed = parseInt(trackRight);

  numLeft += 1;

  let countRight = Math.round(trackRightParsed / slideWidth);
  trackRightParsed = countRight * slideWidth;
  trackRight = trackRightParsed += 'px';


  // if (trackRightParsed % slideWidth !== 0) {
  //   trackRight = Math.round(trackRightParsed % slideWidth == 0) + 'px';
  //   console.log(trackRight)
  // }
})

let trackPos = 0;
let posRight = 0;


const track = document.querySelector('.track');

function nextSlide() {
  let slides = document.querySelectorAll('.slide');
  let active = document.querySelector('.slide-active');
  let slideWidth = active.clientWidth;
  let dots = document.querySelectorAll('.dot');
  
  trackPos += slideWidth;
  posRight = trackPos + 'px';
  track.style.right = posRight;
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('dot-active')) {
      if (i == dots.length-1) {
        break;
      }
      dots[i].classList = 'dot';
      dots[i+1].classList = 'dot dot-active';
      break;
    }
  }
  if (trackPos >= slideWidth * (slides.length-2)) {
    trackPos = slideWidth * (slides.length-2);
  }
}

function prevSlide() {
  let active = document.querySelector('.slide-active');
  let slideWidth = active.clientWidth;
  let dots = document.querySelectorAll('.dot');
  
  trackPos -= slideWidth;
  if (trackPos <= 0) {
    trackPos = 0;
  }
  posRight = trackPos + 'px';
  track.style.right = posRight;
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('dot-active')) {
      if (i == 0) {
        break;
      }
      dots[i].classList = 'dot';
      dots[i-1].classList = 'dot dot-active';
      break;
    }
  }
}



function currentSlide(n) {
  let dots = document.querySelectorAll('.dot');
  let slideWidth = document.querySelector('.slide').clientWidth;

  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList == 'dot dot-active') {
      dots[i].classList = 'dot';
      dots[n].classList = 'dot dot-active';
      trackPos = slideWidth * n;
      posRight = trackPos + 'px';
      track.style.right = posRight;
    }
  }
}

function currentDot(n) {
  let dotts = document.querySelectorAll('.dott');
  let slideWidth = document.querySelector('.slide').clientWidth;

  for (let i = 0; i < dotts.length; i++) {
    if (dotts[i].classList == 'dott dott-active') {
      dotts[i].classList = 'dott';
      dotts[n].classList = 'dott dott-active';
      trackPos = slideWidth * n;
      posRight = trackPos + 'px';
      track.style.right = posRight;
    }
  }
}

function tab(x) {
  let btns = document.querySelectorAll('.offer-btn');

    if (!btns[x].classList.contains('offer-btn-open')){
      btns[x].classList += ' offer-btn-open';
    }
    for (let i = 0; i < btns.length; i++) {
      if (btns[i] !== btns[x]) {
        btns[i].classList = 'offer-btn';
      }
    }
    openBlock();
}

function openBlock() {
  let btns = document.querySelectorAll('.offer-btn');
  let firstTab = document.querySelector('.offer-items');
  let secondTab = document.querySelector('.offer-items-2');

  if (btns[0].classList.contains('offer-btn-open')) {
    firstTab.style.display = 'flex';
    secondTab.style.display = 'none';
  } else {
    firstTab.style.display = 'none';
    secondTab.style.display = 'flex';
  }
}

// функция сброса , слушаем событие смена ширины экрана и сбрасываем состояния слайдеров
let dots = document.querySelectorAll('.dot');
let dotts = document.querySelectorAll('.dott');
window.addEventListener(`resize`, event => {
  right = 0;
  trackPos = 0;
  posRight = 0;
  space.style.right = right + 'px';
  track.style.right =  posRight + 'px';
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList = 'dot';
    dotts[i].classList = 'dott';
  }
  dots[0].classList = 'dot dot-active';
  dotts[0].classList = 'dott dott-active';
}, false);

// let blockHeight = 0;
// let opacity = 0;

let x = 'none';

function showText() {
  const tab = document.querySelector('.info-text-tab');
  const tabHeight = tab.clientHeight;
  const btn = document.querySelector('.info-btn');

  if (x == 'none') {
    x = 'block'
    tab.style.display = 'block';
    tab.style.animation = 'slide 1s';
    btn.style.animation = 'slide 1s';
  } else {
    x = 'none';
    setTimeout(() => {
      tab.style.display = x;
    }, 400)
    tab.style.animation = 'slide1 .4s';
    btn.style.animation = 'btn .4s';
  }
}