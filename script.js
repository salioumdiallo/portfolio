document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');

    burgerMenu.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Formulaire - Feedback après soumission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        alert('Merci de m\'avoir contacté, je reviendrai vers vous bientôt.');
    });
});
