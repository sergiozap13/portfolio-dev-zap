# Portfolio Express - Sergio Zapata

## Propósito
Portfolio personal de desarrollo express para Ingeniero de Software Backend transicionando a Full-Stack moderno. Diseñado para demostrar capacidades técnicas y facilitar oportunidades en la agencia.

## Stack Tecnológico
- **Framework:** Astro (Zero JS por defecto, máximo rendimiento)
- **Estilos:** Tailwind CSS v4 (utility-first, responsive)
- **Iconos:** astro-icon (integración nativa con Astro)
  - Simple Icons: logos de marcas (GitHub, LinkedIn, Java, Spring, etc.)
  - Heroicons: iconos UI (email, ubicación, flechas, sol/luna)

## Enfoque de Diseño
- **Ultrarrápido:** Zero JavaScript innecesario, solo CSS y HTML estático
- **Minimalista:** Estética "Hacker/Tech Clean" con dual theme (dark/light)
- **Escalable:** Estructura modular de componentes reutilizables
- **Accesible:** Semántica HTML correcta, contraste adecuado
- **Responsive:** Mobile-first con breakpoints de Tailwind

## Estructura de Contenido
Single Page con secciones ancladas:
1. **Hero** - Presentación profesional (solo texto, sin avatar)
2. **Experience** - Timeline de 4 posiciones laborales
3. **Projects** - Grid de 3 proyectos (SM Fotos, ForgeHabits, + 1 mockeado)
4. **Tech Stack** - Tecnologías destacadas por categorías (5 grupos)
5. **Education** - Grado en Ingeniería Informática (Universidad de Granada)
6. **Footer** - Contacto y redes sociales

## Paleta de Colores
### Dark Mode (default)
- Fondo principal: `bg-gray-950`
- Fondo secundario (cards): `bg-gray-900`
- Borde sutil: `border-gray-800`
- Texto principal: `text-gray-100`
- Texto secundario: `text-gray-400`
- Acento texto: `text-emerald-400`
- Acento fondo: `bg-emerald-500`
- Acento hover: `hover:bg-emerald-400`

### Light Mode
- Fondo principal: `bg-gray-50`
- Fondo secundario: `bg-white`
- Borde sutil: `border-gray-200`
- Texto principal: `text-gray-900`
- Texto secundario: `text-gray-600`
- Acento texto: `text-emerald-700`
- Acento fondo: `bg-emerald-600`
- Acento hover: `hover:bg-emerald-500`

## Dark/Light Mode
- **Estrategia:** Class strategy con `darkMode: 'class'`
- **Toggle:** Manual con checkbox en header
- **Persistencia:** localStorage (guarda preferencia del usuario)
- **Default:** Dark mode (si no hay preferencia guardada)
- **Script:** ~10 líneas de JavaScript inline en BaseLayout

## Idioma
- Todo el contenido en **español**
- `lang="es"` en etiqueta `<html>`

## Datos
- Contenido tipado en `src/content/data.ts`
- Interfaces TypeScript para: profile, experience[], projects[], techStack, education
- Fácil de editar y mantener
