# Hotel El Eden

Sitio informativo estático bilingüe (español e inglés) hecho con Astro 7, React 18 y CSS propio. El formulario no reserva automáticamente: prepara una solicitud en WhatsApp, que el huésped debe enviar y el hotel debe confirmar.

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

- `src/data/`: habitaciones, FAQ, aviso de privacidad y configuración del hotel.
- `src/i18n/ui.ts`: copys de interfaz en español e inglés.
- `src/components/`: Navbar y galería de áreas.
- `src/react/`: tarjetas, diálogos y formulario de solicitud.
- `src/utils/`: fechas y mensaje de WhatsApp.
- `src/pages/`: portada, páginas de habitación y privacidad en ambos idiomas.
- `src/layouts/Layout.astro`: estructura base, metadatos y datos estructurados.
- `src/styles/global.css`: sistema visual responsive.
- `public/images/README.md`: nombres y medidas de las fotos del hotel.
