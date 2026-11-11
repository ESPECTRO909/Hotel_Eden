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
      es: 'Una habitación práctica con la cama que prefieras —individual, matrimonial, king o queen—, wifi gratuito y estacionamiento en el centro de La Piedad.',
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
      es: 'Dos camas individuales, wifi gratuito y estacionamiento. Una opción sencilla para viajar acompañado en el centro de La Piedad.',
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
      es: 'Tres camas individuales para viajar en grupo, con wifi gratuito y estacionamiento en el centro de La Piedad.',
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
      es: 'Dos camas matrimoniales para familias o grupos de hasta cuatro personas, con wifi gratuito y estacionamiento en el centro de La Piedad.',
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
  { title: { es: 'Patio y jardín', en: 'Patio and garden' }, detail: { es: 'Un respiro al aire libre', en: 'A breath of fresh air' }, src: '/images/areas/patio.webp', fallback: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', alt: { es: 'Patio de hotel con vegetación', en: 'Hotel patio with greenery' } },
  { title: { es: 'Áreas comunes', en: 'Shared spaces' }, detail: { es: 'Lugares para compartir', en: 'Places to spend time together' }, src: '/images/areas/areas-comunes.webp', fallback: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85', alt: { es: 'Área común con sala y mobiliario', en: 'Shared lounge with seating' } },
];

export const amenities = {
  es: [
    { title: 'Un comienzo lento', copy: 'Desayuno preparado con ingredientes locales, servido sin prisa.', symbol: '01' },
    { title: 'Agua y jardín', copy: 'Una piscina pequeña para refrescarse entre horas de sol.', symbol: '02' },
    { title: 'Espacios para respirar', copy: 'Patios y rincones verdes para leer, conversar o no hacer nada.', symbol: '03' },
    { title: 'Siempre conectados', copy: 'Wi-Fi de alta velocidad en habitaciones y áreas comunes.', symbol: '04' },
  ],
  en: [
    { title: 'A slower morning', copy: 'Breakfast made with local ingredients, served without a rush.', symbol: '01' },
    { title: 'Water and garden', copy: 'A small pool to cool off between hours in the sun.', symbol: '02' },
    { title: 'Room to breathe', copy: 'Green corners and quiet patios for reading, talking or doing nothing.', symbol: '03' },
    { title: 'Stay connected', copy: 'High-speed Wi-Fi in rooms and shared spaces.', symbol: '04' },
  ],
};

export const faq = {
  es: [
    { q: '¿Cómo funciona la solicitud de reserva?', a: 'Elige una habitación y tus fechas. La solicitud se abre en WhatsApp con los datos organizados; el equipo del hotel confirma disponibilidad y precio final.' },
    { q: '¿A qué hora puedo entrar y salir?', a: `El check-in es desde las ${siteConfig.checkIn} y el check-out hasta las ${siteConfig.checkOut}. Si necesitas otro horario, consúltalo al enviar tu solicitud.` },
    { q: '¿El precio mostrado es definitivo?', a: 'Es un estimado por noche en MXN, sin impuestos. El hotel confirma el importe final y la disponibilidad antes de formalizar la reserva.' },
    { q: '¿Puedo solicitar una habitación para niños?', a: 'La Habitación Cuádruple admite hasta cuatro huéspedes. Indica el número de adultos y niños en el formulario para recibir confirmación.' },
    { q: '¿Cómo se gestionan mis datos?', a: 'Los datos se usan para atender tu solicitud y se comparten por WhatsApp. Consulta el aviso de privacidad para conocer el alcance y tus derechos.' },
  ],
  en: [
    { q: 'How does a booking request work?', a: 'Choose a room and your dates. Your request opens in WhatsApp with the details arranged; the hotel team confirms availability and the final price.' },
    { q: 'What are the check-in and check-out times?', a: `Check-in starts at ${siteConfig.checkIn} and check-out is by ${siteConfig.checkOut}. Ask when you send your request if you need a different time.` },
    { q: 'Is the displayed price final?', a: 'It is an estimate per night in MXN, excluding taxes. The hotel confirms the final amount and availability before formalizing your booking.' },
    { q: 'Can I request a room for children?', a: 'The Quadruple Room accommodates up to four guests. Include the number of adults and children in your form for confirmation.' },
    { q: 'How is my information handled?', a: 'Your details are used to handle your request and are shared through WhatsApp. See the privacy notice for the full scope and your rights.' },
  ],
};
