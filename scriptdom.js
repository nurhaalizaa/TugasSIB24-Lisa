document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    let currentIndex = 0;
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    prevButton.addEventListener('click', function () {
        changeSlide(-1);
        });

    nextButton.addEventListener('click', function () {
        changeSlide(1);
        });

    function changeSlide(offset) {
        currentIndex += offset;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
            }
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        }
});
