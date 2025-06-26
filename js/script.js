document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navUl = document.querySelector('nav ul');

    if (burgerMenu && navUl) {
        burgerMenu.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });

        // Fermer le menu si un lien est cliqué (pour les ancres)
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                }
            });
        });
    }
});