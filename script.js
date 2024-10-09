document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Merci de m\'avoir contacté, je reviendrai vers vous bientôt.');
        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.testimonial-slide');
    let dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
    setInterval(nextSlide, 5000); // Change de témoignage toutes les 5 secondes
});
