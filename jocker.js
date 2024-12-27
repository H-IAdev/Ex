function playTrailer() {
    const videoContainer = document.querySelector('.video-container');
    const trailerUrl = 'https://www.youtube.com/embed/zAGVQLHvwOY'; // URL del tráiler de Joker
    
    videoContainer.innerHTML = `
        <iframe width="80%" height="100%" src="${trailerUrl}?autoplay=1" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
}

function playTrailerZero() {
    const videoContainer = document.querySelector('.video-fc');
    const trailerUrl = 'Joker-Linkin Park-Rebellion.mp4'; // URL del tráiler de Joker con musica
    
    videoContainer.innerHTML = `
        <iframe width="100%" height="100%" src="${trailerUrl}?autoplay=1" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
}

// Función para manejar el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar el color de la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.barra-navegacion');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

// Función para manejar la aparición y desaparición de las secciones
function handleSectionVisibility() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Evento para manejar el scroll
window.addEventListener('scroll', handleSectionVisibility);

// Llamar a la función una vez al cargar la página para manejar las secciones visibles inicialmente
window.addEventListener('load', handleSectionVisibility);