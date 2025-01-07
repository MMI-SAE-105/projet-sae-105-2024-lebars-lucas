const menuButton = document.querySelector('.hamburger-icon-menu');
const menu = document.getElementById('mainNav');

menuButton.addEventListener('click', () => {
  const isHidden = menu.getAttribute('aria-hidden') === 'true';
  menu.setAttribute('aria-hidden', !isHidden);
});

document.addEventListener('click', function(event) {
  if (event.target.src.endsWith('/assets/icons/X-close-icon.svg')) {
    menu.setAttribute('aria-hidden', 'true');
  }
});



const carouselSlides1 = document.querySelector('.carousel-slides');
const carouselSlide1 = document.querySelectorAll('.carousel-slide'); 
const prevButton1 = document.querySelector('.carousel-button-prev');
const nextButton1 = document.querySelector('.carousel-button-next');
const indicators1 = document.querySelectorAll('.carousel-indicator');

let currentIndex1 = 0;

function changeSlide1() {
  carouselSlides1.style.transform = `translateX(-${currentIndex1 * 100}%)`;

  indicators1.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentIndex1) {
      indicator.classList.add('active');
    }
  });
}

function nextSlide1() {
  currentIndex1 = (currentIndex1 + 1) % carouselSlide1.length; // Utilise carouselSlide1.length ici
  changeSlide1();
}

function prevSlide1() {
  currentIndex1 = (currentIndex1 - 1 + carouselSlide1.length) % carouselSlide1.length; // Utilise carouselSlide1.length ici
  changeSlide1();
}

nextButton1.addEventListener('click', nextSlide1);
prevButton1.addEventListener('click', prevSlide1);

indicators1.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex1 = index;
    changeSlide1();
  });
});

changeSlide1();
