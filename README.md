# Nuestro Aniversario ♥

Página de regalo de aniversario (Jenifer y Alejo). Sitio estático: HTML, CSS y JavaScript sin dependencias ni build.

## Estructura

```
index.html          Página principal
css/styles.css      Estilos
js/config.js        ← AQUÍ se editan los textos, fotos, preguntas, chat y vale
js/main.js          Lógica (corazón, galería, quiz, raspa y gana, lluvia de corazones…)
img/                Fotos
music/              Canción
```

## Cambiar contenido

Todo el contenido está en `js/config.js` (objeto `REGALO`). Para agregar una foto, cópiala a `img/` y añade una línea en `fotos`.

## Probar en local

```
python3 -m http.server 8000
```
y abre http://localhost:8000

## Subir a Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com → **Add New → Project** → importa el repositorio.
3. Framework Preset: **Other**. No hace falta build command ni output directory.
4. **Deploy**.

> Nota: la vibración funciona en Android abriendo el enlace en Chrome. En iPhone no está disponible.
