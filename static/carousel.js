// Script pour le carousel de la page d'accueil

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dotsNav = document.querySelector('.carousel-dots');
    const dots = Array.from(document.querySelectorAll('.dot'));
    
    if (!track || !slides.length) return;
    
    let currentIndex = 0;
    let interval;
    
    // Initialiser le premier slide comme actif
    slides[0].classList.add('active');
    dots[0].classList.add('active');
    
    // Fonction pour passer au slide suivant
    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % slides.length;
        
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Fonction pour passer au slide précédent
    function prevSlide() {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Fonction pour aller à un slide spécifique
    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Événements pour les boutons de navigation
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            clearInterval(interval);
            nextSlide();
            startAutoSlide();
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            clearInterval(interval);
            prevSlide();
            startAutoSlide();
        });
    }
    
    // Événements pour les points de navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (currentIndex !== index) {
                clearInterval(interval);
                goToSlide(index);
                startAutoSlide();
            }
        });
    });
    
    // Démarrer le défilement automatique
    function startAutoSlide() {
        interval = setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    startAutoSlide();
    
    // Mettre en pause le défilement au survol
    track.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    track.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});
