# VAN71 — Sistema de Propuestas Comerciales

Este repositorio define un sistema reutilizable para construir propuestas comerciales de VAN71 Studio con una lógica editorial consistente, modular y preparada para visualización digital e impresión.

## 1) Principios del sistema

El sistema de propuestas se rige por las siguientes reglas base:

- **Estética editorial minimal (blanco/negro)**: composición sobria, jerarquía clara y sin adornos innecesarios.
- **Tipografía**:
  - `Inter` (primary): titulares, subtítulos y texto principal.
  - `Space Mono` (labels): etiquetas, metadatos, índices y microcopy técnico.
- **Grid consistente**: retícula estable entre secciones para alinear ritmo visual y lectura.
- **Componentes reutilizables**: uso sistemático de `cards`, `sections` y `labels` como bloques base.
- **Accesibilidad básica**: contraste suficiente, estructura semántica clara y legibilidad robusta.
- **Soporte de impresión A4**: preparado para `@page`, márgenes consistentes y prevención de cortes de contenido.

> Nota: en esta fase se define únicamente el sistema documental y de reglas. No se incluye implementación HTML.

---

## 2) Arquitectura de la propuesta comercial

La propuesta se organiza como una secuencia modular de capítulos. Cada bloque puede adaptarse por cliente sin romper la estructura principal.

### 2.1 Cover
- Identidad del documento (cliente, proyecto, fecha, versión).
- Titular editorial de alto impacto.
- Subtítulo breve con enfoque estratégico.

### 2.2 Strategic Overview
Bloque marco para alinear visión y alcance.

- **Context**: estado actual del cliente y su entorno.
- **Opportunity**: ventana de valor y potencial de crecimiento.
- **Direction**: tesis estratégica propuesta por VAN71.
- **Approach**: método de trabajo y principios de ejecución.

### 2.3 Core Service — Strategic Communication & Positioning
Servicio central de VAN71.

- Definición del problema estratégico de comunicación.
- Propuesta de posicionamiento y narrativa.
- Marco de mensajes clave y tono.
- Entregables nucleares y criterios de éxito.

### 2.4 Modular Services
Módulos opcionales que se acoplan al Core Service:

- **Branding**
  - Sistema verbal/visual, lineamientos de marca, aplicaciones prioritarias.
- **Social Media**
  - Estrategia editorial, pilares de contenido, cadencia y gobernanza.
- **Landing**
  - Estructura de conversión, mensajes de valor y alcance funcional.

### 2.5 Timeline
- Fases, hitos, duración estimada y dependencias.
- Lectura cronológica clara con checkpoints.

### 2.6 Investment
- Estructura de inversión por bloques (core + módulos).
- Supuestos, inclusiones/exclusiones y condiciones de facturación.

### 2.7 Terms
- Condiciones operativas, propiedad intelectual, revisiones y validez.
- Reglas de colaboración y responsabilidades compartidas.

### 2.8 Next Steps
- Pasos inmediatos para activación del proyecto.
- Decisiones requeridas, responsables y timing.

---

## 3) Sistema reutilizable (cómo usarlo)

Para reutilizar este sistema en nuevas propuestas:

1. Mantener la arquitectura base de 8 bloques en el mismo orden.
2. Ajustar el contenido por cliente sin alterar principios editoriales.
3. Escalar alcance mediante módulos (Branding, Social Media, Landing) según necesidad.
4. Verificar siempre accesibilidad básica y preparación de impresión A4.
5. Documentar versión y fecha de cada propuesta para trazabilidad.

## 4) Checklist de calidad antes de entregar una propuesta

- [ ] Se respetan estética blanco/negro y jerarquías tipográficas.
- [ ] Inter y Space Mono se aplican según rol definido.
- [ ] La retícula y espaciados son consistentes entre secciones.
- [ ] Se usan componentes reutilizables (`cards`, `sections`, `labels`).
- [ ] Hay contraste adecuado y estructura legible.
- [ ] La propuesta está lista para impresión A4 (márgenes y cortes controlados).
- [ ] Incluye Timeline, Investment, Terms y Next Steps completos.

## 5) Estado actual del repositorio

- ✅ Definidas las reglas del sistema en `AGENTS.md`.
- ✅ Definida y documentada la arquitectura de propuestas en este `README.md`.
- ✅ Sin implementación HTML en esta etapa.
