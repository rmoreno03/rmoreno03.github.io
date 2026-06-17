/* =====================================================================
   Portfolio · Raúl Moreno Moya
   JavaScript vanilla, sin dependencias.
   Funcionalidades: i18n (ES/EN), tema claro/oscuro, menú móvil,
   scroll-reveal, nav activa, año del footer y formulario mailto.
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1. Diccionario de traducciones (ES por defecto, EN como overlay)   */
  /*    El HTML ya contiene el español; aquí solo se sustituye el texto */
  /*    de los elementos marcados con data-i18n / data-i18n-attr.       */
  /* ------------------------------------------------------------------ */
  var I18N = {
    es: {
      'nav.about': 'Sobre mí',
      'nav.skills': 'Tecnologías',
      'nav.projects': 'Proyectos',
      'nav.experience': 'Experiencia',
      'nav.education': 'Formación',
      'nav.contact': 'Contacto',

      'hero.role': 'Desarrollador de Software Full Stack',
      'hero.cta.projects': 'Ver proyectos',
      'hero.cta.contact': 'Contacto',
      'hero.cta.cv': 'Descargar CV',

      'about.title': 'Sobre mí',
      'about.body': 'Desarrollador de software con experiencia en prácticas profesionales y proyectos propios en producción. Trabajo principalmente con Angular, .NET, C#, Java y Supabase: desarrollo interfaces, consumo APIs REST y trabajo en entornos ágiles con Git. Actualmente curso Ingeniería Informática en la UAX mientras sigo desarrollando proyectos reales. Disponibilidad inmediata.',

      'skills.title': 'Tecnologías',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      'skills.databases': 'Bases de datos',
      'skills.mobile': 'Móvil',
      'skills.tools': 'Herramientas',

      'projects.title': 'Proyectos',
      'projects.curvea.tag': 'Proyecto personal',
      'projects.curvea.desc': 'App web y móvil que genera rutas con curvas para motoristas. Full stack de principio a fin: Angular en el cliente web, Supabase (PostgreSQL, Auth, RLS, Storage) en el backend, Mapbox + OpenRouteService para mapas y rutas, y app móvil con Flutter. Arquitectura limpia y modular feature-first.',
      'projects.geouax.tag': 'Proyecto universitario',
      'projects.geouax.desc': 'Aplicación web de geolocalización con mapas interactivos, consumo de APIs REST y autenticación con Firebase. Desarrollada con Angular y Firebase.',
      'projects.code': 'Código',
      'projects.demo': 'Demo en vivo',

      'experience.title': 'Experiencia',
      'experience.role': 'Desarrollador en prácticas',
      'experience.dates': 'Marzo 2025 – Junio 2025',
      'experience.desc': 'Desarrollo de funcionalidades web con Angular y EntityLite para gestión de datos empresariales. Interfaces modernas, trabajo en equipo con metodología ágil y control de versiones con Git.',

      'education.title': 'Formación',
      'education.uax.title': 'Ingeniería Informática',
      'education.uax.dates': 'Sep 2025 – Actualidad',
      'education.dam.title': 'CFGS Desarrollo de Aplicaciones Multiplataforma',
      'education.dam.dates': 'Sep 2023 – Jun 2025',

      'contact.title': 'Contacto',
      'contact.lead': '¿Tienes un proyecto o una oportunidad? Escríbeme y te respondo lo antes posible.',
      'contact.location': 'Madrid, España · Disponibilidad inmediata',
      'contact.form.name': 'Nombre',
      'contact.form.email': 'Email',
      'contact.form.message': 'Mensaje',
      'contact.form.send': 'Enviar mensaje',
      'contact.form.namePh': 'Tu nombre',
      'contact.form.emailPh': 'tucorreo@ejemplo.com',
      'contact.form.messagePh': 'Cuéntame brevemente…',

      'footer.tagline': 'Hecho con HTML, CSS y JavaScript.',

      'a11y.skip': 'Saltar al contenido',
      'a11y.menu': 'Abrir menú de navegación',
      'a11y.theme': 'Cambiar entre tema claro y oscuro',
      'a11y.lang': 'Cambiar idioma a inglés',
      'a11y.github': 'GitHub de Raúl Moreno',
      'a11y.linkedin': 'LinkedIn de Raúl Moreno',
      'a11y.email': 'Enviar un correo a Raúl Moreno'
    },

    en: {
      'nav.about': 'About',
      'nav.skills': 'Tech',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.contact': 'Contact',

      'hero.role': 'Full Stack Software Developer',
      'hero.cta.projects': 'View projects',
      'hero.cta.contact': 'Contact',
      'hero.cta.cv': 'Download CV',

      'about.title': 'About me',
      'about.body': 'Software developer with experience from professional internships and my own projects in production. I work mainly with Angular, .NET, C#, Java and Supabase: I build interfaces, consume REST APIs and work in agile environments with Git. I’m currently studying Computer Engineering at UAX while continuing to develop real-world projects. Available immediately.',

      'skills.title': 'Technologies',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      'skills.databases': 'Databases',
      'skills.mobile': 'Mobile',
      'skills.tools': 'Tools',

      'projects.title': 'Projects',
      'projects.curvea.tag': 'Personal project',
      'projects.curvea.desc': 'Web and mobile app that generates curvy routes for motorcyclists. Full stack end to end: Angular on the web client, Supabase (PostgreSQL, Auth, RLS, Storage) on the backend, Mapbox + OpenRouteService for maps and routing, and a mobile app built with Flutter. Clean, modular feature-first architecture.',
      'projects.geouax.tag': 'University project',
      'projects.geouax.desc': 'Geolocation web app with interactive maps, REST API consumption and Firebase authentication. Built with Angular and Firebase.',
      'projects.code': 'Code',
      'projects.demo': 'Live demo',

      'experience.title': 'Experience',
      'experience.role': 'Software Developer Intern',
      'experience.dates': 'March 2025 – June 2025',
      'experience.desc': 'Development of web features with Angular and EntityLite for enterprise data management. Modern interfaces, teamwork with agile methodology and version control with Git.',

      'education.title': 'Education',
      'education.uax.title': 'Computer Engineering',
      'education.uax.dates': 'Sep 2025 – Present',
      'education.dam.title': 'Higher VET — Multiplatform App Development',
      'education.dam.dates': 'Sep 2023 – Jun 2025',

      'contact.title': 'Contact',
      'contact.lead': 'Got a project or an opportunity? Drop me a line and I’ll get back to you as soon as possible.',
      'contact.location': 'Madrid, Spain · Available immediately',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send message',
      'contact.form.namePh': 'Your name',
      'contact.form.emailPh': 'youremail@example.com',
      'contact.form.messagePh': 'Tell me briefly…',

      'footer.tagline': 'Built with HTML, CSS and JavaScript.',

      'a11y.skip': 'Skip to content',
      'a11y.menu': 'Open navigation menu',
      'a11y.theme': 'Switch between light and dark theme',
      'a11y.lang': 'Switch language to Spanish',
      'a11y.github': 'Raúl Moreno on GitHub',
      'a11y.linkedin': 'Raúl Moreno on LinkedIn',
      'a11y.email': 'Send an email to Raúl Moreno'
    }
  };

  var root = document.documentElement;

  /* ------------------------------------------------------------------ */
  /* 2. Idioma                                                          */
  /* ------------------------------------------------------------------ */
  function applyLang(lang) {
    if (!I18N[lang]) lang = 'es';
    var dict = I18N[lang];

    // Texto de los nodos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Atributos traducibles: data-i18n-attr="aria-label:clave;placeholder:clave"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        var attr = (parts[0] || '').trim();
        var key = (parts[1] || '').trim();
        if (attr && dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });

    root.setAttribute('lang', lang);
    try { localStorage.setItem('lang', lang); } catch (e) {}

    // El botón muestra el idioma al que se cambiará
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.querySelector('.lang-label').textContent = lang === 'es' ? 'EN' : 'ES';
    }
  }

  function initLang() {
    var stored = 'es';
    try { stored = localStorage.getItem('lang') || 'es'; } catch (e) {}
    applyLang(stored);

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        var next = (root.getAttribute('lang') === 'es') ? 'en' : 'es';
        applyLang(next);
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* 3. Tema claro/oscuro (el tema inicial ya se fija en <head>)        */
  /* ------------------------------------------------------------------ */
  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function sync() {
      btn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');
    }
    sync();

    btn.addEventListener('click', function () {
      var next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 4. Menú móvil (hamburguesa)                                        */
  /* ------------------------------------------------------------------ */
  function initMenu() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    function open() {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) close(); else open();
    });

    // Cerrar al pulsar un enlace o la tecla Escape
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 5. Scroll-reveal + enlace de navegación activo (IntersectionObs.)  */
  /* ------------------------------------------------------------------ */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { io.observe(el); });
  }

  function initActiveNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-menu a[href^="#"]'));
    if (!links.length || !('IntersectionObserver' in window)) return;

    var map = {};
    links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) {
            l.removeAttribute('aria-current');
            l.classList.remove('is-active');
          });
          var active = map[entry.target.id];
          if (active) {
            active.setAttribute('aria-current', 'true');
            active.classList.add('is-active');
          }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(map).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) io.observe(sec);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 6. Formulario de contacto → abre el cliente de correo (mailto)     */
  /* ------------------------------------------------------------------ */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.elements.name.value || '').trim();
      var email = (form.elements.email.value || '').trim();
      var message = (form.elements.message.value || '').trim();

      var subject = 'Contacto desde el portfolio' + (name ? ' — ' + name : '');
      var body =
        'Nombre: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message;

      window.location.href =
        'mailto:rulomorenomo@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 7. Año actual en el footer                                         */
  /* ------------------------------------------------------------------ */
  function initYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------ */
  /* Arranque                                                           */
  /* ------------------------------------------------------------------ */
  function init() {
    initLang();
    initTheme();
    initMenu();
    initReveal();
    initActiveNav();
    initContactForm();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
