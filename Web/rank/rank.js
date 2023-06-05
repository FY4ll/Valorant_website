const carousel = document.getElementById('carousel');
const slides = carousel.querySelectorAll('.slide');
let currentSlideIndex = 0; // Index de la deuxième image
let touchStartX = 0;
let touchEndX = 0;

// Le reste du code reste inchangé
// ...

showSlide(currentSlideIndex);

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}


function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}


function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleGesture();
}

function handleGesture() {
    const gestureThreshold = 50;
    if (touchEndX - touchStartX > gestureThreshold) {
        prevSlide();
    } else if (touchStartX - touchEndX > gestureThreshold) {
        nextSlide();
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        if (currentSlideIndex !== 0){prevSlide();}
    } else if (event.key === 'ArrowRight') {
        if (currentSlideIndex !== 8){nextSlide();}

    }
});

carousel.addEventListener('touchstart', handleTouchStart);
carousel.addEventListener('touchend', handleTouchEnd);

// Désactiver le défilement automatique
clearInterval(carouselInterval);

showSlide(currentSlideIndex);

