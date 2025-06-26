// js/script.js

// --- Carrousel d'images (Exemple très simple) ---
// Pour un carrousel réel, il faudrait plus de HTML et de logique.
// Ici, nous allons juste simuler un changement de texte/image sur la page d'accueil.
const carouselData = [
    { title: "Découvrez nos solutions", text: "Des services innovants pour vos projets." },
    { title: "Qualité et Expertise", text: "Notre équipe à votre service." },
    { title: "Contactez-nous", text: "Obtenez un devis personnalisé dès aujourd'hui." }
];
let currentSlide = 0;

function updateCarousel() {
    const carouselTitle = document.getElementById('carousel-title');
    const carouselText = document.getElementById('carousel-text');
    if (carouselTitle && carouselText) {
        carouselTitle.textContent = carouselData[currentSlide].title;
        carouselText.textContent = carouselData[currentSlide].text;
        currentSlide = (currentSlide + 1) % carouselData.length;
    }
}

// Exécute le carrousel toutes les 3 secondes si les éléments existent
if (document.getElementById('carousel-title') && document.getElementById('carousel-text')) {
    setInterval(updateCarousel, 3000);
    updateCarousel(); // Affiche la première slide immédiatement
}


// --- Menu Burger pour mobile ---
const navToggle = document.createElement('button');
navToggle.textContent = '☰'; // Symbole de menu burger
navToggle.classList.add('nav-toggle');
document.querySelector('header nav').prepend(navToggle); // Ajoute le bouton avant la liste ul

const navMenu = document.querySelector('header nav ul');
if (navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
    });
}


// --- Effets de scroll animés (Exemple simple: fade-in) ---
const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in'); // Optionnel: pour refaire l'animation si on scroll back
        }
    });
}, {
    threshold: 0.1 // Déclenche quand 10% de la section est visible
});

sections.forEach(section => {
    observer.observe(section);
});

// Ajout d'une classe pour l'animation CSS
document.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        section.style.opacity = 0; // Cache les sections initialement
        section.style.transition = 'opacity 0.8s ease-out'; // Ajoute une transition
    });
});