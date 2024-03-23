let currentIndex = 0;

function changeSlide(offset) {
  const slides = document.querySelector('.slider');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentIndex += offset;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}
