// Animación typing para el hero
const phrases = [
  "Raúl Moreno",
  "Fullstack Developer",
  "Apps & Tech Enthusiast 🚗🏍️"
];
let i = 0, j = 0, isDeleting = false;
function typeWriter() {
  const typed = document.getElementById('typed');
  if (!typed) return;
  const current = phrases[i];
  typed.textContent = current.substring(0, j);
  if (!isDeleting) {
    if (j < current.length) {
      j++; setTimeout(typeWriter, 60);
    } else {
      isDeleting = true; setTimeout(typeWriter, 1000);
    }
  } else {
    if (j > 0) {
      j--; setTimeout(typeWriter, 32);
    } else {
      isDeleting = false; i = (i+1) % phrases.length; setTimeout(typeWriter, 420);
    }
  }
}
window.onload = function() {
  typeWriter();
  setLang('es');
  revealOnScroll();
};

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 68, "density": { "enable": true, "value_area": 900 } },
    "color": { "value": "#18d3ff" },
    "shape": { "type": "polygon" },
    "opacity": { "value": 0.13, "random": true },
    "size": { "value": 3.0, "random": true },
    "line_linked": { "enable": true, "distance": 130, "color": "#50fa7b", "opacity": 0.17, "width": 1.1 },
    "move": { "enable": true, "speed": 2.1, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "repulse": { "distance": 54 }, "push": { "particles_nb": 2 } }
  },
  "retina_detect": true
});

// Reveal de las cards
function revealOnScroll() {
  document.querySelectorAll('.card').forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.97) card.classList.add('reveal');
  });
}
window.addEventListener('scroll', revealOnScroll);

// Cambia idioma (ES/EN) y textos de proyectos
function setLang(lang) {
  document.getElementById('about-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('about-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('about-title').innerHTML = lang === 'es'
    ? '<i class="ri-user-smile-line"></i> Sobre mí'
    : '<i class="ri-user-smile-line"></i> About Me';
  document.getElementById('subtitle').textContent = lang === 'es'
    ? 'Fullstack Developer en constante crecimiento 🚀'
    : 'Fullstack Developer always growing 🚀';
  document.getElementById('tagline').textContent = lang === 'es'
    ? 'Actualmente desarrollando una app de rutas para moto y coche 🌍'
    : 'Currently developing a motorcycle & car routes app 🌍';
  // Proyectos
  document.getElementById('geo-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('geo-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('cars-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('cars-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('unity-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('unity-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  // Botones idioma
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

// Tema claro/oscuro pro
function toggleTheme() {
  document.body.classList.toggle('light');
  document.documentElement.classList.toggle('light');
  document.getElementById('theme-toggle').textContent =
    document.body.classList.contains('light') ? '🌞' : '🌚';
  document.getElementById('footer-theme').textContent =
    document.body.classList.contains('light') ? '☀️ Light mode' : '🌙 Dark mode';
}
