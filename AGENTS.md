# AGENTS.md — Directrices de ejecución para VAN71

Este archivo define reglas obligatorias para cualquier cambio futuro en este repositorio.

## 1) Objetivo del repositorio
- Preparar y mantener una base para generar:
  - Propuestas web de estilo editorial (ej. `rosortaabogados.netlify.app`).
  - Una futura landing de marca.
- Prioridad actual: consistencia visual, mantenibilidad y salida web + impresión.

## 2) Lenguaje visual (obligatorio)
- **Estética:** editorial minimalista.
- **Paleta:** blanco/negro + grises neutros estrictamente necesarios.
- **Decoración:** evitar sombras y efectos superfluos; preferir jerarquía por tipografía, espaciado y composición.
- **Densidad visual:** aireada, con ritmo vertical claro.

## 3) Sistema de layout (grid)
- Usar un sistema de grid consistente para todas las páginas (propuestas y landing).
- Recomendación base:
  - Contenedor central con `max-width` estable.
  - Grid de 12 columnas para desktop.
  - Escalado a 8/4 columnas en breakpoints intermedios y móvil.
- Mantener gutters y márgenes de sección constantes.
- Evitar valores arbitrarios si existe token/escala disponible.

## 4) Tipografía
- Si no existe un sistema tipográfico definido, usar por defecto:
  - **Sans principal:** `Inter`, con fallback `system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`.
  - **Mono para labels/metadata:** `JetBrains Mono`, con fallback `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`.
- Definir escala tipográfica explícita (display, h1-h6, body, small, caption).
- Asegurar contraste AA y legibilidad en pantalla e impresión.

## 5) Componentes reutilizables (mínimos requeridos)
Estandarizar variantes y API de estilo para:
- **Cards**
- **Badges**
- **Tables**
- **Sections**

Reglas:
- Evitar estilos ad-hoc duplicados.
- Documentar props/variantes cuando se introduzca un componente.
- Reutilizar tokens de spacing, bordes y tipografía.

## 6) Accesibilidad (AA)
Todo cambio debe buscar cumplimiento WCAG 2.1 AA como mínimo:
- Contraste de color adecuado.
- Navegación por teclado y foco visible.
- Semántica HTML correcta.
- Etiquetas accesibles en formularios/controles.
- Uso correcto de encabezados y landmarks.

## 7) Performance
- Priorizar rendimiento por defecto:
  - Minimizar dependencias innecesarias.
  - Optimizar imágenes y fuentes.
  - Evitar JavaScript no crítico.
  - Cargar solo lo necesario por ruta/vista.
- Mantener HTML/CSS limpios para mejorar TTI y render.

## 8) Soporte de impresión A4 (CRÍTICO)
**Requisito no negociable:** las propuestas deben imprimir de forma estable en A4.

Implementar y respetar:
- `@page` con tamaño A4 y márgenes definidos.
- Reglas de paged media para evitar cortes visuales:
  - `break-before`, `break-after`, `break-inside`.
  - `page-break-before`, `page-break-after`, `page-break-inside` como compatibilidad.
- Control tipográfico de párrafos:
  - `widows` y `orphans` para evitar líneas huérfanas/viudas.
- Evitar saltos raros en tablas, cards y bloques largos.
- Verificar impresión en vista previa de navegador antes de cerrar cambios.

## 9) Estructura y alcance
- Mantener separación clara entre:
  - `proposals/`
  - `templates/`
  - `brand/`
  - `landing/`
- No mezclar estilos específicos de propuesta en la landing ni viceversa sin abstracción reutilizable.

## 10) Regla de cambios en esta fase
- En esta etapa se permite **infraestructura y documentación**.
- Evitar introducir funcionalidades de producto no solicitadas.
# AGENTS.md — VAN71 Studio

Este archivo define reglas de estilo y criterios editoriales para cualquier contribución en este repositorio.

## 1) Principios de estética editorial minimal

- Priorizar una interfaz limpia, sobria y con alto espacio en blanco.
- Reducir elementos decorativos: cada componente debe tener propósito claro.
- Evitar ruido visual (sombras excesivas, animaciones gratuitas, paletas saturadas).
- La jerarquía debe apoyarse en tipografía, ritmo vertical y contraste, no en ornamentos.

## 2) Tipografía

- Usar como máximo **2 familias tipográficas** (display + texto, o una sola familia variable).
- Definir escala tipográfica consistente (por ejemplo: 12/14/16/20/24/32/48).
- Mantener interlineado cómodo para lectura editorial (ideal entre `1.4` y `1.7` en cuerpo).
- Evitar bloques de texto extensos sin subtítulos ni cortes visuales.
- Garantizar contraste mínimo WCAG AA en texto normal y elementos clave.

## 3) Grid y composición

- Diseñar con grid explícito y repetible (columnas, gutters y márgenes documentados).
- Favorecer alineaciones consistentes y ritmos modulares de espaciado (p. ej. múltiplos de 4/8).
- Respetar anchuras máximas de lectura para texto corrido.
- En responsive, priorizar continuidad editorial sobre densidad de contenido.

## 4) Accesibilidad (obligatorio)

- Cumplir como base con **WCAG 2.1 AA**.
- Preservar foco visible en navegación por teclado.
- Asegurar semántica correcta en estructura (encabezados, landmarks, labels, tablas).
- No depender solo de color para transmitir estado o significado.
- Verificar contraste, tamaño de texto y orden lógico de lectura.

## 5) Impresión A4 (cuando aplique)

Para vistas imprimibles, documentos, reportes o piezas editoriales exportables:

- Definir estilos `@media print` cuando exista salida impresa.
- Optimizar layout para **A4 (210 × 297 mm)**.
- Evitar cortes de bloques importantes entre páginas (`page-break`/`break-inside`).
- Garantizar legibilidad en escala de grises cuando sea necesario.
- Ocultar elementos de navegación o UI no relevantes para impresión.

## 6) Tono de contenido

- Redacción clara, precisa y sobria.
- Evitar marketing inflado; priorizar información útil y verificable.
- Mantener consistencia terminológica en español para documentación interna.

## 7) Regla operativa para esta etapa

- **No introducir cambios de funcionalidad sin instrucción explícita.**
- En esta fase, priorizar documentación, sistema visual y lineamientos de calidad.
