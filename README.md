# Hotel El Eden

Sitio informativo estático bilingüe (español e inglés) hecho con Astro 7, React y Tailwind CSS. El formulario no reserva automáticamente: prepara una solicitud en WhatsApp, que el huésped debe enviar y el hotel debe confirmar.

## Desarrollo

Requiere Node.js 22.23.4 o superior y npm. La versión recomendada está fijada en `.nvmrc`.

```sh
npm install
npm run dev
```

El servidor local queda en `http://localhost:4321`.

## Validación y publicación

```sh
npm run check
npm run build
npm run preview
```

La compilación estática se genera en `dist/` y se puede publicar en Netlify, Vercel, Cloudflare Pages o un hosting compatible con archivos estáticos.

## Estructura

- `src/data/`: catálogo de habitaciones y configuración del hotel.
- `src/react/HotelExperience.tsx`: tarjetas, galería, diálogo accesible y formulario.
- `src/utils/`: fechas, disponibilidad, respaldo, analítica y mensaje de WhatsApp.
- `src/pages/`: portada en español e inglés, páginas de habitación y privacidad.
- `src/styles/global.css`: sistema visual responsive.
