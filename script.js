// Animaciones scroll reveal para las secciones
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('.section-wide');
  const trigger = window.innerHeight * 0.94;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll);

// Language switcher (ES/EN)
function setLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.lang-btn')[lang === 'es' ? 0 : 1].classList.add('active');
  document.getElementById('about-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('about-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('about-title').innerHTML = lang === 'es' ? '<i class="ri-user-smile-line"></i> Sobre mí' : '<i class="ri-user-smile-line"></i> About Me';
  document.getElementById('skills-title').innerHTML = lang === 'es' ? '<i class="ri-tools-line"></i> Tecnologías' : '<i class="ri-tools-line"></i> Tech Stack';
  document.getElementById('projects-title').innerHTML = lang === 'es' ? '<i class="ri-rocket-2-line"></i> Proyectos destacados' : '<i class="ri-rocket-2-line"></i> Featured Projects';
  document.getElementById('geo-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('geo-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('cars-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('cars-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('unity-desc-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('unity-desc-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('goals-es').style.display = lang === 'es' ? 'inline' : 'none';
  document.getElementById('goals-en').style.display = lang === 'en' ? 'inline' : 'none';
  document.getElementById('contact-title').innerHTML = lang === 'es' ? '<i class="ri-mail-send-line"></i> Contacto' : '<i class="ri-mail-send-line"></i> Contact';
  document.getElementById('thanks-es').style.display = lang === 'es' ? 'block' : 'none';
  document.getElementById('thanks-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('hero-sub').textContent = lang === 'es'
    ? "Desarrollador de Software | Futuro Ingeniero Informático"
    : "Software Developer | Future Computer Engineer";
}

// Efecto máquina de escribir en tu nombre (heavy)
const phrases = [
  "Raúl Moreno",
  "Software Engineer",
  "Web & Mobile Developer",
  "Tech Lover 🚀"
];
let currentPhrase = 0, letter = 0, isDeleting = false;
function typeWriter() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const current = phrases[currentPhrase];
  if (isDeleting) {
    letter--;
    el.textContent = current.substring(0, letter);
    if (letter === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(typeWriter, 350);
    } else {
      setTimeout(typeWriter, 38);
    }
  } else {
    letter++;
    el.textContent = current.substring(0, letter);
    if (letter === current.length) {
      isDeleting = true;
      setTimeout(typeWriter, 900);
    } else {
      setTimeout(typeWriter, 57);
    }
  }
}
window.onload = typeWriter;

// Partículas animadas (usando particles.js CDN)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 90, "density": { "enable": true, "value_area": 900 } },
    "color": { "value": "#18d3ff" },
    "shape": { "type": "polygon" },
    "opacity": { "value": 0.27, "random": true },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": true, "distance": 160, "color": "#50fa7b", "opacity": 0.22, "width": 1.2 },
    "move": { "enable": true, "speed": 2.1, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});
