// Animaciones scroll reveal para las secciones
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('.section');
  const trigger = window.innerHeight * 0.92;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll);

// Language switcher (ES/EN)
function setLang(lang) {
  // Botones
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.lang-btn')[lang === 'es' ? 0 : 1].classList.add('active');
  // About
  document.getElementById('about-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('about-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('about-title').textContent = lang === 'es' ? "👋 Sobre mí" : "👋 About Me";
  // Skills
  document.getElementById('skills-title').textContent = lang === 'es' ? "🛠️ Tecnologías" : "🛠️ Tech Stack";
  // Projects
  document.getElementById('projects-title').textContent = lang === 'es' ? "🚀 Proyectos destacados" : "🚀 Featured Projects";
  document.getElementById('geo-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('geo-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('cars-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('cars-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('unity-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('unity-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  // Goals
  document.getElementById('goals-es').style.display = lang === 'es' ? 'inline' : 'none';
  document.getElementById('goals-en').style.display = lang === 'en' ? 'inline' : 'none';
  // Contact
  document.getElementById('contact-title').textContent = lang === 'es' ? "📫 Contacto" : "📫 Contact";
  document.getElementById('thanks-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('thanks-en').style.display = lang === 'en' ? 'block' : 'none';
  // Hero
  document.getElementById('hero-sub').textContent = lang === 'es'
    ? "Desarrollador de Software | Futuro Ingeniero Informático"
    : "Software Developer | Future Computer Engineer";
}

// Partículas animadas (usando particles.js CDN)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 65, "density": { "enable": true, "value_area": 900 } },
    "color": { "value": "#4de389" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.35, "random": true },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": true, "distance": 130, "color": "#01b6ff", "opacity": 0.21, "width": 1 },
    "move": { "enable": true, "speed": 2.1, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 3 } }
  },
  "retina_detect": true
});
