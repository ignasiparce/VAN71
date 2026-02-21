# VAN71

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
