document.addEventListener('DOMContentLoaded', () => {
    // 1. Destacar item do menu ao navegar na página
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu_lista li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.parentElement.classList.remove('ativo');
            if (link.getAttribute('href').includes(current)) {
                link.parentElement.classList.add('ativo');
            }
        });
    });

    // 2. Animação de aparição dos elementos (Scroll Reveal)
    const elementosAnimar = document.querySelectorAll('.animar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.1
    });

    elementosAnimar.forEach(elemento => {
        observer.observe(elemento);
    });
});