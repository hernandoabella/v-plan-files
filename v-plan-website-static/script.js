document.getElementById('menu-toggle').addEventListener('click', function () {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const carousel = document.querySelector('.testimonials-carousel');
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener('click', function () {
    if (index < testimonials.length - 1) {
      index++;
    } else {
      index = 0; // Loop back to the first testimonial
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', function () {
    if (index > 0) {
      index--;
    } else {
      index = testimonials.length - 1; // Loop back to the last testimonial
    }
    updateCarousel();
  });

  // Optional: Auto-slide every 5 seconds
  setInterval(() => {
    nextButton.click();
  }, 10000);
});