# Portfolio · Raúl Moreno Moya

Portfolio personal de **Raúl Moreno Moya**, Desarrollador de Software Full Stack
(Angular · .NET · C# · Java · Supabase).

🔗 **En vivo:** https://rmoreno03.github.io/

## Características
- HTML semántico, CSS moderno (custom properties, flexbox, grid) y JavaScript vanilla, **sin frameworks**.
- **Mobile-first** y totalmente responsive.
- **Tema claro/oscuro** y selector de idioma **ES/EN**, ambos recordados con `localStorage`.
- Accesible: contraste AA, navegación por teclado, `alt` y etiquetas ARIA, `prefers-reduced-motion`.
- SEO + Open Graph + datos estructurados (JSON-LD).
- Rápido: sin dependencias pesadas (solo la fuente Inter y los iconos de marca de devicon).

## Estructura
```
index.html          Página única con navegación por anclas
css/styles.css      Sistema de diseño, temas y responsive
js/main.js          i18n, tema, menú móvil, scroll-reveal, formulario mailto
assets/             Imágenes, CV y favicon
```

## Desarrollo local
No requiere build. Abre `index.html` o sirve la carpeta:
```bash
python -m http.server 8000
# http://localhost:8000
```

## Despliegue
Se publica automáticamente con **GitHub Pages** desde la rama `main` (carpeta raíz).
