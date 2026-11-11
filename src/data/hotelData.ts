import { siteConfig } from './siteConfig';

export type LocalizedText = { es: string; en: string };

export type Room = {
  slug: string;
  name: LocalizedText;
  eyebrow: LocalizedText;
  description: LocalizedText;
  price: number;
  capacity: number;
  beds: LocalizedText;
  highlights: LocalizedText[];
  amenities: LocalizedText[];
  policies: LocalizedText[];
  images: { src: string; fallback: string; alt: LocalizedText }[];
  blockedDates: string[];
};

const photo = (path: string, id: string) => ({
  src: `/images/${path}.webp`,
  fallback: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`,
});

const roomAmenities: LocalizedText[] = [
  { es: 'Wi-Fi gratuito', en: 'Free Wi-Fi' },
  { es: 'Estacionamiento (15 cajones)', en: 'Parking (15 spaces)' },
];

const roomPolicies: LocalizedText[] = [
  { es: `Check-in desde las ${siteConfig.checkIn}`, en: `Check-in from ${siteConfig.checkIn}` },
  { es: `Check-out hasta las ${siteConfig.checkOut}`, en: `Check-out until ${siteConfig.checkOut}` },
  { es: 'Precios en MXN, más impuestos', en: 'Prices in MXN, plus taxes' },
];

export const rooms: Room[] = [
  {
    slug: 'sencilla',
    name: { es: 'Habitación Sencilla', en: 'Standard Room' },
    eyebrow: { es: 'Lo esencial, bien hecho', en: 'The essentials, done well' },
    description: {
      es: 'Una habitación práctica con la cama que prefieras —individual, matrimonial, king o queen—, Wi-Fi gratuito y estacionamiento en el centro de La Piedad.',
      en: 'A practical room with the bed of your choice —single, double, king or queen—, free Wi-Fi and parking in the center of La Piedad.',
    },
    price: 600,
    capacity: 2,
    beds: { es: '1 cama: individual, matrimonial, king o queen', en: '1 bed: single, double, king or queen' },
    highlights: [
      { es: 'Cama a elegir', en: 'Choice of bed' },
      { es: 'Wi-Fi gratuito', en: 'Free Wi-Fi' },
    ],
    amenities: roomAmenities,
    policies: roomPolicies,
    images: [
      { ...photo('rooms/sencilla/01', 'photo-1611892440504-42a792e24d32'), alt: { es: 'Habitación Sencilla de Hotel El Eden', en: 'Standard Room at Hotel El Eden' } },
      { ...photo('rooms/sencilla/02', 'photo-1616486338812-3dadae4b4ace'), alt: { es: 'Interior de la Habitación Sencilla', en: 'Standard Room interior' } },
      { ...photo('rooms/sencilla/03', 'photo-1600210492486-724fe5c67fb0'), alt: { es: 'Rincón de descanso de la Habitación Sencilla', en: 'Standard Room seating corner' } },
    ],
    blockedDates: [],
  },
  {
    slug: 'doble',
    name: { es: 'Habitación Doble', en: 'Twin Room' },
    eyebrow: { es: 'Para compartir', en: 'Room to share' },
    description: {
      es: 'Dos camas individuales, Wi-Fi gratuito y estacionamiento. Una opción sencilla para viajar acompañado en el centro de La Piedad.',
      en: 'Two single beds, free Wi-Fi and parking. A simple option for traveling with someone in the center of La Piedad.',
    },
    price: 650,
    capacity: 2,
    beds: { es: '2 camas individuales', en: '2 single beds' },
    highlights: [
      { es: '2 camas individuales', en: '2 single beds' },
      { es: 'Wi-Fi gratuito', en: 'Free Wi-Fi' },
    ],
    amenities: roomAmenities,
    policies: roomPolicies,
    images: [
      { ...photo('rooms/doble/01', 'photo-1616486029423-aaa4789e8c9a'), alt: { es: 'Habitación Doble con dos camas individuales', en: 'Twin Room with two single beds' } },
      { ...photo('rooms/doble/02', 'photo-1615874694520-474822394e73'), alt: { es: 'Detalle de textiles de la Habitación Doble', en: 'Twin Room textile detail' } },
      { ...photo('rooms/doble/03', 'photo-1600607687939-ce8a6c25118c'), alt: { es: 'Espacio de descanso de la Habitación Doble', en: 'Twin Room resting area' } },
    ],
    blockedDates: [],
  },
  {
    slug: 'triple',
    name: { es: 'Habitación Triple', en: 'Triple Room' },
    eyebrow: { es: 'En buena compañía', en: 'Good company' },
    description: {
      es: 'Tres camas individuales para viajar en grupo, con Wi-Fi gratuito y estacionamiento en el centro de La Piedad.',
      en: 'Three single beds for traveling as a group, with free Wi-Fi and parking in the center of La Piedad.',
    },
    price: 700,
    capacity: 3,
    beds: { es: '3 camas individuales', en: '3 single beds' },
    highlights: [
      { es: '3 camas individuales', en: '3 single beds' },
      { es: 'Wi-Fi gratuito', en: 'Free Wi-Fi' },
    ],
    amenities: roomAmenities,
    policies: roomPolicies,
    images: [
      { ...photo('rooms/triple/01', 'photo-1616594039964-ae9021a400a0'), alt: { es: 'Habitación Triple con tres camas individuales', en: 'Triple Room with three single beds' } },
      { ...photo('rooms/triple/02', 'photo-1618221195710-dd6b41faaea6'), alt: { es: 'Interior de la Habitación Triple', en: 'Triple Room interior' } },
      { ...photo('rooms/triple/03', 'photo-1617104678098-de229db51175'), alt: { es: 'Área de descanso de la Habitación Triple', en: 'Triple Room resting area' } },
    ],
    blockedDates: [],
  },
  {
    slug: 'cuadruple',
    name: { es: 'Habitación Cuádruple', en: 'Quadruple Room' },
    eyebrow: { es: 'Espacio para todos', en: 'Room for everyone' },
    description: {
      es: 'Dos camas matrimoniales para familias o grupos de hasta cuatro personas, con Wi-Fi gratuito y estacionamiento en el centro de La Piedad.',
      en: 'Two double beds for families or groups of up to four, with free Wi-Fi and parking in the center of La Piedad.',
    },
    price: 750,
    capacity: 4,
    beds: { es: '2 camas matrimoniales', en: '2 double beds' },
    highlights: [
      { es: '2 camas matrimoniales', en: '2 double beds' },
      { es: 'Wi-Fi gratuito', en: 'Free Wi-Fi' },
    ],
    amenities: roomAmenities,
    policies: roomPolicies,
    images: [
      { ...photo('rooms/cuadruple/01', 'photo-1611892440504-42a792e24d32'), alt: { es: 'Habitación Cuádruple con dos camas matrimoniales', en: 'Quadruple Room with two double beds' } },
      { ...photo('rooms/cuadruple/02', 'photo-1616594039964-ae9021a400a0'), alt: { es: 'Interior de la Habitación Cuádruple', en: 'Quadruple Room interior' } },
      { ...photo('rooms/cuadruple/03', 'photo-1600607687939-ce8a6c25118c'), alt: { es: 'Detalle de la Habitación Cuádruple', en: 'Quadruple Room detail' } },
    ],
    blockedDates: [],
  },
];

const prices = rooms.map((room) => room.price);
const lowest = Math.min(...prices).toLocaleString('es-MX');
const highest = Math.max(...prices).toLocaleString('es-MX');
export const priceRange = `$${lowest} - $${highest} ${siteConfig.currency}`;

export type Area = {
  title: LocalizedText;
  detail: LocalizedText;
  alt: LocalizedText;
  src: string;
  fallback: string;
};

export const areas: Area[] = [
  { title: { es: 'Fachada', en: 'Facade' }, detail: { es: 'Hotel El Eden · La Piedad', en: 'Hotel El Eden · La Piedad' }, src: '/images/areas/fachada.webp', fallback: '/images/hero/La-Piedad-1.jpeg.webp', alt: { es: 'Fachada de Hotel El Eden', en: 'Hotel El Eden facade' } },
  { title: { es: 'Habitaciones', en: 'Guest rooms' }, detail: { es: 'Espacios para descansar', en: 'Spaces to rest' }, src: '/images/areas/habitaciones.webp', fallback: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85', alt: { es: 'Habitación de hotel preparada para huéspedes', en: 'Hotel room prepared for guests' } },
  { title: { es: 'Estacionamiento', en: 'Parking' }, detail: { es: '15 cajones para tu auto', en: '15 spaces for your car' }, src: '/images/areas/estacionamiento.webp', fallback: '/images/hero/La-Piedad-1.jpeg.webp', alt: { es: 'Estacionamiento de Hotel El Eden', en: 'Hotel El Eden parking' } },
  { title: { es: 'Lobby', en: 'Lobby' }, detail: { es: 'Recepción y bienvenida', en: 'Reception and welcome' }, src: '/images/areas/lobby.webp', fallback: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85', alt: { es: 'Lobby de Hotel El Eden', en: 'Hotel El Eden lobby' } },
];

export const faq = {
  es: [
    { q: '¿Cómo funciona la solicitud de reserva?', a: 'Elige una habitación y tus fechas. La solicitud se abre en WhatsApp con los datos organizados; el equipo del hotel confirma disponibilidad y precio final.' },
    { q: '¿A qué hora puedo entrar y salir?', a: `El check-in es desde las ${siteConfig.checkIn} y el check-out hasta las ${siteConfig.checkOut}. Si necesitas otro horario, consúltalo al enviar tu solicitud.` },
    { q: '¿El precio mostrado es definitivo?', a: 'Es un estimado por noche en MXN, sin impuestos. El hotel confirma el importe final y la disponibilidad antes de formalizar la reserva.' },
    { q: '¿Puedo alojarme con niños?', a: 'La Habitación Cuádruple admite hasta cuatro huéspedes. Indica el número de adultos y niños en el formulario para recibir confirmación.' },
    { q: '¿Cómo se gestionan mis datos?', a: 'Los datos se usan para atender tu solicitud y se comparten por WhatsApp. Consulta el aviso de privacidad para conocer el alcance y tus derechos.' },
  ],
  en: [
    { q: 'How does a booking request work?', a: 'Choose a room and your dates. Your request opens in WhatsApp with the details arranged; the hotel team confirms availability and the final price.' },
    { q: 'What are the check-in and check-out times?', a: `Check-in starts at ${siteConfig.checkIn} and check-out is by ${siteConfig.checkOut}. Ask when you send your request if you need a different time.` },
    { q: 'Is the displayed price final?', a: 'It is an estimate per night in MXN, excluding taxes. The hotel confirms the final amount and availability before formalizing your booking.' },
    { q: 'Can I stay with children?', a: 'The Quadruple Room accommodates up to four guests. Include the number of adults and children in your form for confirmation.' },
    { q: 'How is my information handled?', a: 'Your details are used to handle your request and are shared through WhatsApp. See the privacy notice for the full scope and your rights.' },
  ],
};

export type PrivacyContent = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  back: string;
  lead: string;
  sections: { heading: string; body: string }[];
};

export const privacy: { es: PrivacyContent; en: PrivacyContent } = {
  es: {
    title: 'Aviso de privacidad | Hotel El Eden',
    description: 'Información sobre el tratamiento de datos personales en Hotel El Eden.',
    eyebrow: 'HOTEL EL EDEN · MÉXICO',
    heading: 'Aviso de privacidad',
    back: 'Volver a Hotel El Eden',
    lead: 'Este aviso describe cómo se utilizan los datos que compartes al enviar una solicitud de estancia.',
    sections: [
      {
        heading: 'Responsable y contacto',
        body: `El responsable del tratamiento es ${siteConfig.name}. Dirección: ${siteConfig.address}. Teléfono: ${siteConfig.phone}. Correo de contacto: ${siteConfig.email}.`,
      },
      {
        heading: 'Datos y finalidad',
        body: 'Podemos recibir tu nombre, teléfono, correo electrónico, fechas de estancia, número de huéspedes, hora estimada de llegada y comentarios. Se utilizan exclusivamente para atender, dar seguimiento y confirmar tu solicitud de reserva.',
      },
      {
        heading: 'Canales y conservación',
        body: 'Al enviar el formulario, se prepara un mensaje en WhatsApp y debes confirmar su envío dentro de esa aplicación. El hotel recibe la solicitud en ese chat y la conserva solo durante el tiempo necesario para gestionar la estancia y cumplir las obligaciones aplicables.',
      },
      {
        heading: 'Cookies y analítica',
        body: 'Este sitio no utiliza cookies de analítica, publicidad ni seguimiento. No se registran eventos de navegación ni se comparte información con proveedores de analítica.',
      },
      {
        heading: 'Tus derechos',
        body: `Puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus datos escribiendo a ${siteConfig.email}. La solicitud se atenderá conforme a la normativa aplicable en México.`,
      },
    ],
  },
  en: {
    title: 'Privacy notice | Hotel El Eden',
    description: 'How Hotel El Eden handles personal information submitted with a stay request.',
    eyebrow: 'HOTEL EL EDEN · MEXICO',
    heading: 'Privacy notice',
    back: 'Back to Hotel El Eden',
    lead: 'This notice explains how we use the information you share when requesting a stay.',
    sections: [
      {
        heading: 'Controller and contact',
        body: `The data controller is ${siteConfig.name}. Address: ${siteConfig.address}. Phone: ${siteConfig.phone}. Contact email: ${siteConfig.email}.`,
      },
      {
        heading: 'Information and purpose',
        body: 'We may receive your name, phone number, email, stay dates, guest count, estimated arrival time and comments. These details are used only to handle, follow up on and confirm your booking request.',
      },
      {
        heading: 'Channels and retention',
        body: 'When you submit the form, a WhatsApp message is prepared and you must confirm sending it in that app. The hotel receives the request in that chat and retains it only as long as needed to manage the stay and meet applicable obligations.',
      },
      {
        heading: 'Cookies and analytics',
        body: 'This site does not use analytics, advertising or tracking cookies. It does not record browsing events or share information with analytics providers.',
      },
      {
        heading: 'Your rights',
        body: `You may request access, correction, deletion or objection by contacting ${siteConfig.email}. Requests will be handled under applicable Mexican law.`,
      },
    ],
  },
};
