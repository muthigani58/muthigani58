let slideIndex = 0;
const slides = document.querySelectorAll('.carousel_slide img');
const numVisibleSlides = 4;
let totalSlides = slides.length;
let remainingSlides = totalSlides - numVisibleSlides;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index < slideIndex || index >= slideIndex + numVisibleSlides) {
            slide.style.display = 'none';
        } else {
            slide.style.display = 'block';
        }
    });
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide();
    }
}

function nextSlide() {
    if (slideIndex < remainingSlides) {
        slideIndex++;
        showSlide();
    }
}
let currentSlide = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemsPerView = window.innerWidth <= 768 ? 1 : 4;

    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalItems - itemsPerView;
    } else if (currentSlide >= totalItems) {
        currentSlide = 0;
    }

    const offset = -currentSlide * (100 / itemsPerView);
    carousel.style.transform = `translateX(${offset}%)`;
}

window.addEventListener('resize', () => {
    currentSlide = 0;
    moveCarousel(0);
});
