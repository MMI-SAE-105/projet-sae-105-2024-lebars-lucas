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
const carouselSlide1 = document.querySelectorAll('.carousel-slide'); // NodeList de diapositives
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




const carouselSlides2 = document.querySelector('.carousel-slides-2');
const carouselSlide2 = document.querySelectorAll('.carousel-slide-2');
const prevButton2 = document.querySelector('.carousel-button-prev-2');
const nextButton2 = document.querySelector('.carousel-button-next-2');
const indicators2 = document.querySelectorAll('.carousel-indicator-2');

let currentIndex2 = 0;

function changeSlide2() {
  // Vérifie si carouselSlides2 existe avant d'appliquer une transformation
  if (carouselSlides2) {
    carouselSlides2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
  }

  // Met à jour les indicateurs
  indicators2.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentIndex2) {
      indicator.classList.add('active');
    }
  });
}

function nextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % carouselSlide2.length; // Modifie l'index pour passer à la prochaine diapositive
  changeSlide2();
}

function prevSlide2() {
  currentIndex2 = (currentIndex2 - 1 + carouselSlide2.length) % carouselSlide2.length; // Passe à la diapositive précédente
  changeSlide2();
}

if (nextButton2) nextButton2.addEventListener('click', nextSlide2);
if (prevButton2) prevButton2.addEventListener('click', prevSlide2);

indicators2.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex2 = index;
    changeSlide2();
  });
});

// Initialise le carrousel au premier slide
changeSlide2();