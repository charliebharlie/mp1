const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a');
const sections = document.querySelectorAll('.section');

// 4. Navbar resizing
function updateNavbarSize() {
  if (window.scrollY > 50) {
    navbar.classList.add('small');
  } else {
    navbar.classList.remove('small');
  }
}

// 3. Position indicator
function updatePositionIndicator() {
  const navbarHeight = navbar.getBoundingClientRect().height;
  let currentSectionId = sections[0].id;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= navbarHeight) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.section === currentSectionId);
  });
}

function onScroll() {
  updateNavbarSize();
  updatePositionIndicator();
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// 6. Carousel
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

// 11. Modal
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', () => modal.classList.remove('hidden'));
closeModalButton.addEventListener('click', () => modal.classList.add('hidden'));
