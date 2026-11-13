# Fotos del Hotel El Eden

Copia las fotos reales usando estos nombres. No hace falta cambiar el código: el sitio las detectará y dejará de usar las fotos temporales de Unsplash.

Usa formato `.webp` o `.jpg`. Si usas `.jpg`, actualiza la extensión `.webp` en `src/data/hotelData.ts` y en `src/pages/index.astro` y `src/pages/en/index.astro`.

## Portada

- `hero/portada.webp`: imagen principal horizontal, ideal 2200 × 1400 px o mayor.
- `hero/cierre.webp`: imagen horizontal para la sección final, ideal 2200 × 1200 px.

## Galería de áreas

- `areas/fachada.webp`: fachada del hotel. Si falta, la galería usa la foto de portada.
- `areas/habitaciones.webp`: vista general de las habitaciones.
- `areas/estacionamiento.webp`: estacionamiento del hotel (15 cajones).
- `areas/lobby.webp`: lobby y recepción.

## Habitaciones

Cada carpeta necesita tres imágenes. La primera es la portada de la tarjeta y la galería comienza por ella.

- `rooms/sencilla/01.webp`, `02.webp`, `03.webp`
- `rooms/doble/01.webp`, `02.webp`, `03.webp`
- `rooms/triple/01.webp`, `02.webp`, `03.webp`
- `rooms/cuadruple/01.webp`, `02.webp`, `03.webp`

Para mejores resultados usa fotos horizontales de al menos 1400 × 1000 px, bien iluminadas y optimizadas para web. Evita subir archivos originales pesados directamente desde la cámara.

Las imágenes deben mostrar las instalaciones reales del hotel. Las fotos actuales son temporales y se muestran automáticamente mientras falte cada archivo local.
