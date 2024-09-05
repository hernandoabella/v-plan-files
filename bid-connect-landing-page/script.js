const track = document.querySelector('.carousel-track');
const cards = Array.from(document.querySelectorAll('.card'));

let currentIndex = 0;

function moveCarousel() {
  currentIndex++;
  track.style.transform = `translateX(-${currentIndex * cards[0].offsetWidth}px)`;

  if (currentIndex >= cards.length) {
    currentIndex = 0;
    track.style.transition = 'none'; // Desactiva la transición para evitar el salto
    track.style.transform = 'translateX(0)';

    // Fuerza el reflow para asegurarse de que el cambio de transición ocurra antes de la siguiente animación
    void track.offsetWidth;
    track.style.transition = 'transform 0.5s ease'; // Reactiva la transición
  }

  requestAnimationFrame(() => setTimeout(moveCarousel, 2000)); // Controla la velocidad
}

// Duplicamos las tarjetas al principio y al final para el efecto continuo
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
  track.insertBefore(clone.cloneNode(true), track.firstChild);
});

moveCarousel();


document.querySelectorAll('input[type="range"]').forEach(function (slider) {
  slider.addEventListener('input', function () {
    let value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #e4ac05 ${value}%, #d7d2ce ${value}%)`;
  });
});
