// Inicializa EmailJS con tu Public Key
emailjs.init("144pCfJfQBqZ6_aUE");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_pyq0naa"; // Tu Service ID
    const templateID = "template_s97q7kb"; // Tu Template ID

    emailjs.sendForm(serviceID, templateID, this).then(
        function(response) {
            alert("Mensaje enviado correctamente!");
            document.getElementById("contact-form").reset();
        },
        function(error) {
            alert("Error al enviar el mensaje: " + JSON.stringify(error));
        }
    );
});

// Evento al hacer clic en el botón "EMPEZAR"
document.getElementById('startButton').addEventListener('click', function() {
    alert('¡Bienvenido a PrimeWeb! Explora nuestros servicios para llevar tu negocio al siguiente nivel.');
});

// Función para desplazarse al inicio de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funcionalidad del menú hamburguesa

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('#nav-links');
    const links = document.querySelectorAll('#nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
});

// Efecto de escritura para el logo
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('show');
    });
});

// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 500,
    easing: 'ease-out-quart',
    once: true,
    mirror: false,
});

// Funcionalidad del botón de cambio de tema
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});
