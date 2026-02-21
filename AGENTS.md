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
