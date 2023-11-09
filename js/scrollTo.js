// main.js

// Función para manejar el desplazamiento suave
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        console.log('Desplazamiento a sección:', sectionId, 'OffsetTop:', section.offsetTop);

        const targetY = section.offsetTop;
        const duration = 1000; // Duración del desplazamiento en milisegundos
        const startTime = performance.now();
        const startY = window.scrollY;

        function scrollStep(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            window.scrollTo(0, startY + progress * (targetY - startY));

            if (progress < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }
}




// Obterner todas las opciones del menu 

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSectionId = this.getAttribute('href').substring(1);
        console.log('Click en enlace: ', targetSectionId);
        scrollToSection(targetSectionId);
    });
});