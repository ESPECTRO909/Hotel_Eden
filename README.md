# Hotel Edén

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

## Datos por completar

Editar `src/data/siteConfig.ts` antes de publicar:

- Verificar que el número de WhatsApp configurado sea el oficial y esté en formato internacional, sin `+`, espacios ni guiones.
- Completar teléfono, correo de contacto, dirección, URL de mapa y enlace de indicaciones.
- Dominio de producción en `astro.config.mjs` para canonicals, sitemap y `public/robots.txt`.
- URL de respaldo de solicitudes y CSV público de disponibilidad, si el hotel los configura.
- Horarios, políticas, precios, capacidad y contenido de muestra en `src/data/hotelData.ts`.

Las fotografías de Unsplash, descripciones, precios, amenidades y políticas son material temporal de demostración. Sustituirlas por activos y datos oficiales. La guía de nombres y tamaños de fotos está en `public/images/README.md`; coloca cada foto en esa estructura conservando su nombre y el sitio la usará automáticamente. El mapa no se conecta hasta configurar su URL. No publicar el aviso de privacidad sin completar los datos del responsable y solicitar revisión legal conforme a la normativa mexicana.

El número de WhatsApp ya está cargado en `src/data/siteConfig.ts`; confirmar que pertenezca al hotel antes de publicar.

## Estructura

- `src/data/`: catálogo de habitaciones y configuración del hotel.
- `src/react/HotelExperience.tsx`: tarjetas, galería, diálogo accesible y formulario.
- `src/utils/`: fechas, disponibilidad, respaldo, analítica y mensaje de WhatsApp.
- `src/pages/`: portada en español e inglés, páginas de habitación y privacidad.
- `src/styles/global.css`: sistema visual responsive.
