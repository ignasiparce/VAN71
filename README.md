# VAN71

Base de trabajo para crear propuestas web editoriales y una futura landing, con foco en consistencia visual, reutilización y salida estable en web + impresión A4.

## Estructura del repositorio

```text
/
├── AGENTS.md
├── README.md
├── proposals/   # Propuestas finales o por cliente/proyecto
├── templates/   # Plantillas base reutilizables para propuestas
├── brand/       # Tokens, guías visuales y recursos de marca
└── landing/     # Sitio/landing principal de VAN71
```

### Convención por carpeta
- `proposals/`: entregables concretos (cada propuesta en su subcarpeta).
- `templates/`: layouts, bloques y estilos base para acelerar nuevas propuestas.
- `brand/`: definición transversal (tipografía, grid, color, assets y lineamientos).
- `landing/`: implementación independiente del sitio público.

> Nota: en esta fase no se incluyen propuestas ni funcionalidades nuevas; solo preparación de infraestructura documental.

## Despliegue en Netlify por carpeta

La estrategia recomendada es desplegar cada área como sitio independiente en Netlify, usando **Base directory** distinto por proyecto.

### Opción A — Sitios separados (recomendado)
1. Crear un sitio en Netlify para cada destino que quieras publicar (por ejemplo, una propuesta o la landing).
2. Conectar el mismo repositorio en cada sitio.
3. Configurar en cada sitio:
   - **Base directory**: la carpeta objetivo (`proposals/<nombre>`, `templates/<nombre>`, `landing`, etc.).
   - **Build command**: según stack (ej. `npm run build`, `pnpm build`, o vacío si es estático puro).
   - **Publish directory**: salida de build (ej. `dist`, `build`) o `.` si no compila.
4. Activar deploy previews para validar cambios antes de producción.

### Opción B — Un solo sitio con subrutas
- Solo recomendable si más adelante se define una estrategia clara de routing y build unificado.
- Requiere coordinar redirects/rewrites y estructura de publicación.

## Checklist de verificación (infraestructura)

- [ ] Existe `AGENTS.md` con directrices estrictas de diseño, accesibilidad, rendimiento e impresión A4.
- [ ] `README.md` documenta estructura `proposals/`, `templates/`, `brand/`, `landing/`.
- [ ] `README.md` explica despliegue en Netlify por carpeta.
- [ ] No se agregaron funcionalidades de producto ni propuestas concretas.
- [ ] Documentación escrita para facilitar escalado y consistencia del repositorio.

## Próximos pasos sugeridos
- Crear estructura inicial de carpetas con `.gitkeep`.
- Definir tokens de marca en `brand/`.
- Diseñar una plantilla base en `templates/` con reglas de impresión A4 desde el inicio.
