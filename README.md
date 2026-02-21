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
Repositorio base de **VAN71 Studio**.

> Estado actual: el repositorio está en fase inicial y todavía no incluye código de aplicación ejecutable. Este README deja preparado el flujo para arrancar el proyecto en cuanto se incorpore la primera versión funcional.

## Requisitos previos

1. **Git** instalado (recomendado `>=2.39`).
2. **Node.js LTS** instalado (recomendado `>=20`) y `npm` disponible.
3. Editor recomendado: **VS Code** u otro con soporte para Markdown/TypeScript.

## Puesta en marcha (paso a paso)

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPO>
   cd VAN71
   ```

2. Verifica la rama y estado:

   ```bash
   git branch --show-current
   git status
   ```

3. Instala dependencias del proyecto (cuando exista `package.json`):

   ```bash
   npm install
   ```

4. Arranca entorno de desarrollo (cuando se añada el script `dev`):

   ```bash
   npm run dev
   ```

5. Abre la URL local que indique la terminal (normalmente `http://localhost:3000` o similar).

## Comandos esperados (próxima fase)

Cuando se incorpore la base de código, se espera documentar y habilitar al menos estos comandos:

- `npm run dev` — servidor de desarrollo.
- `npm run build` — build de producción.
- `npm run test` — pruebas automatizadas.
- `npm run lint` — validación de estilo y calidad.

## Solución de problemas

- Si `npm install` falla por versión de Node, valida con:

  ```bash
  node -v
  npm -v
  ```

- Si falta `package.json`, significa que el proyecto aún está en fase de bootstrap. Espera al siguiente commit de funcionalidad base.

## Convenciones iniciales

- No introducir cambios funcionales sin ticket o alcance definido.
- Mantener la documentación en español para el equipo interno.
- Registrar en `AGENTS.md` cualquier norma transversal de diseño/estilo del estudio.
