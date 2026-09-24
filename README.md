# Portfolio Personal - Sergio Zapata

Portfolio personal desarrollado con Astro y Tailwind CSS. Diseño minimalista con estética "Hacker/Tech Clean", dark/light mode, y optimizado para máximo rendimiento.

## 🚀 Stack Tecnológico

- **Framework:** Astro v7 (Zero JS por defecto)
- **Estilos:** Tailwind CSS v4
- **Iconos:** astro-icon (Simple Icons + Heroicons)
- **Tipado:** TypeScript estricto

## 📦 Instalación

```bash
npm install
```

## 🛠️ Comandos

| Comando | Acción |
| :------------------------ | :----------------------------------------------- |
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |

## 📁 Estructura del Proyecto

```text
/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Hero, Experience, Projects, TechStack, Education
│   │   └── ui/              # Button, Badge, SectionTitle
│   ├── content/
│   │   └── data.ts          # Contenido tipado (perfil, experiencia, proyectos)
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base con toggle dark/light
│   ├── pages/
│   │   └── index.astro      # Single page principal
│   └── styles/
│       └── global.css       # Estilos globales y animaciones
├── public/
│   └── CV_Sergio_Zapata.pdf # CV descargable
└── package.json
```

## ✨ Características

- **Zero JavaScript innecesario** - Solo ~15 líneas de JS para toggle dark/light
- **Dark/Light Mode** - Toggle manual con persistencia en localStorage
- **Responsive Design** - Mobile-first con breakpoints de Tailwind
- **Gradient Blobs** - Efecto visual ambiental con animaciones CSS puras
- **Performance First** - Optimizado para 100/100 en Lighthouse
- **SEO Ready** - Meta tags, JSON-LD, semántica HTML correcta
- **Accesible** - Navegación por teclado, contraste adecuado, ARIA labels

## 🎨 Paleta de Colores

### Dark Mode
- Fondo: `bg-gray-950`, `bg-gray-900`
- Acentos: `text-emerald-400`, `bg-emerald-500`

### Light Mode
- Fondo: `bg-gray-50`, `bg-white`
- Acentos: `text-emerald-700`, `bg-emerald-600`

## 📄 Secciones

1. **Hero** - Presentación profesional con CTAs (GitHub, LinkedIn, Email, CV)
2. **Experience** - Timeline de 4 posiciones laborales
3. **Projects** - Grid de proyectos destacados (SMFotos, ForgeHabits)
4. **Tech Stack** - Tecnologías agrupadas por categorías
5. **Education** - Formación académica

## 🚀 Deploy

El proyecto está desplegado en producción con Vercel

```bash
npm run build
```

## 📝 Licencia

© 2026 Sergio Zapata. Todos los derechos reservados.
