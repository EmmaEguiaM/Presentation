# Presentación personal para Ford Motor Company

Presentación de 5 diapositivas (en inglés) hecha con HTML, CSS y JavaScript puro. Sitio estático, sin dependencias ni conexión a internet.

## Estructura

```
ford-presentation/
├── index.html
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/presentation.js
    └── images/
        ├── ford-logo.png
        ├── profile.jpg
        ├── solidworks-prototype.jpg
        ├── ford-1939.jpg
        ├── grand-marquis.jpg
        ├── cycling.jpg
        └── engineering-project.jpg
```

Si descomprimes el ZIP, las carpetas ya existen. Si creas todo a mano, crea `assets/css`, `assets/js` y `assets/images`, y coloca cada archivo en su ruta.

## Fotografías y logo

Copia tus imágenes a `assets/images/` con **estos nombres exactos** (en minúsculas):

| Archivo | Diapositiva |
|---|---|
| `ford-logo.png` | Logo en las 5 diapositivas (esquina superior izquierda) |
| `profile.jpg` | 1 – About Me |
| `solidworks-prototype.jpg` | 2 – BOM & Prototype Development (captura del modelo 3D) |
| `ford-1939.jpg` | 3 – Why Ford? (foto superior) |
| `grand-marquis.jpg` | 3 – Why Ford? (foto inferior) |
| `cycling.jpg` | 4 – Beyond Engineering |
| `engineering-project.jpg` | 5 – What I Can Bring to Ford |

Mientras falte una imagen se muestra un recuadro con su etiqueta (por ejemplo `PROFILE PHOTO`). Al agregar el archivo y recargar la página, la foto aparece sola; no hay que tocar el código. El logo se muestra sobre un recuadro blanco para que se vea bien sobre fondos claros y oscuros.

## Subir a GitHub

1. Crea un repositorio nuevo en GitHub (por ejemplo `ford-presentation`).
2. Sube todos los archivos, con las carpetas incluidas. Desde la web: **Add file > Upload files**, y arrastra el contenido. Con Git:
   ```
   git init
   git add .
   git commit -m "Ford presentation"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/ford-presentation.git
   git push -u origin main
   ```
   Git no guarda carpetas vacías: el archivo `assets/images/.gitkeep` mantiene `images/` hasta que agregues las fotos.

## Activar GitHub Pages

1. En el repositorio: **Settings > Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
4. En uno o dos minutos la presentación queda en `https://TU-USUARIO.github.io/ford-presentation/`.

Todas las rutas son relativas, así que funciona en esa subruta.

## Abrir la presentación

- En línea: abre la URL de GitHub Pages.
- Local: haz doble clic en `index.html`.

## Navegación

| Tecla | Acción |
|---|---|
| → · Espacio · Page Down | Siguiente diapositiva |
| ← · Page Up | Diapositiva anterior |
| Home / End | Primera / última diapositiva |
| F | Activar o desactivar pantalla completa |
| Esc | Salir de pantalla completa |
| N | Mostrar u ocultar las notas del presentador |

También hay botones discretos (anterior, siguiente, pantalla completa) en la esquina inferior derecha. El indicador (`01 / 05`) y la barra de progreso se actualizan solos. No hay avance automático.

## Notas del presentador

Están ocultas por defecto. Presiona **N** para ver las notas de la diapositiva activa y **N** de nuevo para ocultarlas. Para ensayar, usa pantalla completa en tu pantalla y las notas en el mismo navegador.

Tiempos objetivo: 40 s, 75 s, 60 s, 40 s y 40 s (total 4 min 15 s). Cada tiempo está en el atributo `data-time` de su diapositiva y en el encabezado del panel de notas; no se muestra ningún temporizador en las diapositivas.

Las notas están en `assets/js/presentation.js`, en la lista `NOTES`.
