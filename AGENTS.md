# AGENTS.md — VAN71 Studio Proposal System

## Design & Editorial Rules

1. **Estética editorial minimal (blanco/negro)**
   - Priorizar fondos blancos, texto negro y uso mínimo de grises neutros.
   - Evitar ornamentos visuales innecesarios, gradientes y efectos decorativos.

2. **Tipografía**
   - `Inter` como tipografía principal para títulos, cuerpo y jerarquías principales.
   - `Space Mono` para labels, metadatos, numeraciones y elementos auxiliares.

3. **Grid consistente**
   - Mantener una retícula unificada para todas las secciones de la propuesta.
   - Conservar ritmos de espaciado predecibles (horizontal y vertical).

4. **Componentes reutilizables**
   - Construir y documentar componentes base reutilizables:
     - `cards`
     - `sections`
     - `labels`
   - Evitar variantes ad hoc cuando una variante del componente base sea suficiente.

5. **Accesibilidad básica**
   - Garantizar contraste legible en toda la propuesta.
   - Mantener tamaños tipográficos y espaciados que favorezcan lectura y escaneo rápido.
   - Usar estructura semántica clara para encabezados y bloques de contenido.

6. **Soporte de impresión A4**
   - Incluir directrices para impresión con `@page`.
   - Evitar cortes de bloques clave entre páginas (`break-inside: avoid` donde aplique).
   - Definir márgenes consistentes para la salida en A4.

## Scope
Estas reglas aplican a toda la documentación y futura implementación del sistema de propuestas comerciales de VAN71 Studio dentro de este repositorio.
