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


// Sélectionne les éléments du carrousel
const carouselSlides = document.querySelector('.carousel-slides');
const carouselSlide = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
const indicators = document.querySelectorAll('.carousel-indicator');

// Déclare une variable pour suivre l'index de la diapositive actuelle
let currentIndex = 0;

// Fonction pour changer la diapositive
function changeSlide() {
  // Applique la transformation pour déplacer le carrousel
  carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Met à jour l'état des indicateurs
  indicators.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentIndex) {
      indicator.classList.add('active');
    }
  });
}

// Fonction pour aller à la diapositive suivante
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselSlide.length; // Passe à la diapositive suivante, revient au début à la fin
  changeSlide();
}

// Fonction pour aller à la diapositive précédente
function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselSlide.length) % carouselSlide.length; // Passe à la diapositive précédente, revient à la fin à l'avant
  changeSlide();
}

// Écouteurs d'événements pour les boutons de navigation
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Écouteurs d'événements pour les indicateurs
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    changeSlide();
  });
});

// Initialisation du carrousel
changeSlide();







let index = 0;
const images = document.querySelector('.carrousel-personnalise');
const totalImages = document.querySelectorAll('.carrousel-personnalise img').length;

function moveLeft() {
  index = (index === 0) ? totalImages - 1 : index - 1;
  updateCarrousel();
}

function moveRight() {
  index = (index === totalImages - 1) ? 0 : index + 1;
  updateCarrousel();
}

function updateCarrousel() {
  images.style.transform = `translateX(-${index * (250 + 50)}px)`; // 250px image width + 50px margin
}
