let angle = 0;
const carousel = document.querySelector('.carousel-container');
const prev    = document.getElementById('prev');
const next    = document.getElementById('next');

prev.addEventListener('click', () => {
  angle -= 120;
  carousel.style.transform = `rotateY(${angle}deg)`;
});

next.addEventListener('click', () => {
  angle += 120;
  carousel.style.transform = `rotateY(${angle}deg)`;
});

