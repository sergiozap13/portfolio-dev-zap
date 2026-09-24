## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Reglas de Desarrollo - Portfolio Express

### Principios de Código
- Escribir código limpio, legible y mantenible
- Seguir convenciones de nomenclatura de Astro y Tailwind
- No agregar comentarios innecesarios (solo cuando sea crítico)
- Minimizar output de tokens, ser conciso

### Stack Tecnológico
- **Framework:** Astro exclusivamente (componentes .astro)
- **Estilos:** Tailwind CSS v4 para todo el estilizado (no CSS custom)
- **Iconos:** astro-icon package con Simple Icons y Heroicons
- **No inventar:** No agregar librerías externas sin consultar primero

### Estructura de Componentes
- Usar componentes de Astro para UI reutilizable
- Layouts en `src/layouts/`
- Componentes modulares en `src/components/` (ui/, layout/, sections/)
- Páginas en `src/pages/`
- Datos tipados en `src/content/data.ts`

### Metodología de Trabajo
- Seguir ciclo SDD: SPEC → DESIGN → TASKS
- Implementar tarea por tarea, esperando aprobación
- Verificar con build después de cada implementación
- No hacer commits sin solicitud explícita

### Calidad de Código
- Zero JavaScript innecesario (solo toggle dark/light ~10 líneas)
- Responsive design con Tailwind breakpoints (mobile-first)
- Accesibilidad básica (semántica HTML, contraste)
- Performance first (imágenes optimizadas, CSS mínimo)

### Paleta de Colores
- **Dark Mode:** `bg-gray-950`, `bg-gray-900`, `text-emerald-400`, `bg-emerald-500`
- **Light Mode:** `bg-gray-50`, `bg-white`, `text-emerald-700`, `bg-emerald-600`
- **Dark/Light:** Class strategy con toggle manual + localStorage
