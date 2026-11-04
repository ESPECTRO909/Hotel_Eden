export type LocalizedText = { es: string; en: string };

export type Room = {
  slug: string;
  name: LocalizedText;
  eyebrow: LocalizedText;
  description: LocalizedText;
  price: number;
  capacity: number;
  adults: number;
  children: number;
  size: number;
  beds: LocalizedText;
  highlights: LocalizedText[];
  amenities: LocalizedText[];
  policies: LocalizedText[];
  images: { src: string; fallback: string; alt: LocalizedText }[];
  blockedDates: string[];
};

const photo = (path: string, id: string, width = 1200) => ({
  src: `/images/${path}.webp`,
  fallback: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`,
});

export const rooms: Room[] = [
  {
    slug: 'suite-jardin',
    name: { es: 'Suite Jardín', en: 'Garden Suite' },
    eyebrow: { es: 'Calma entre hojas', en: 'A slower kind of stay' },
    description: {
      es: 'Un refugio sereno con terraza privada y luz de mañana. Diseñada para bajar el ritmo, abrir las puertas al jardín y dejar que el día encuentre su propio paso.',
      en: 'A quiet hideaway with a private terrace and morning light. Made for slowing down, opening the doors to the garden and letting the day find its own pace.',
    },
    price: 2850,
    capacity: 2,
    adults: 2,
    children: 0,
    size: 38,
    beds: { es: '1 cama king', en: '1 king bed' },
    highlights: [
      { es: 'Terraza privada', en: 'Private terrace' },
      { es: 'Vista al jardín', en: 'Garden view' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    amenities: [
      { es: 'Aire acondicionado', en: 'Air conditioning' },
      { es: 'Wi-Fi de alta velocidad', en: 'High-speed Wi-Fi' },
      { es: 'Cafetera de especialidad', en: 'Specialty coffee maker' },
      { es: 'Baño con ducha de lluvia', en: 'Rain shower bathroom' },
      { es: 'Ropa de cama de algodón', en: 'Cotton bed linen' },
      { es: 'Desayuno para dos', en: 'Breakfast for two' },
    ],
    policies: [
      { es: 'Check-in desde las 15:00', en: 'Check-in from 3:00 PM' },
      { es: 'Check-out hasta las 12:00', en: 'Check-out until 12:00 PM' },
      { es: 'No se permite fumar', en: 'No smoking' },
    ],
    images: [
      { ...photo('rooms/suite-jardin/01', 'photo-1611892440504-42a792e24d32'), alt: { es: 'Suite luminosa con cama king', en: 'Bright suite with a king bed' } },
      { ...photo('rooms/suite-jardin/02', 'photo-1616486338812-3dadae4b4ace'), alt: { es: 'Sala de descanso con materiales naturales', en: 'Lounge with natural materials' } },
      { ...photo('rooms/suite-jardin/03', 'photo-1600210492486-724fe5c67fb0'), alt: { es: 'Interior cálido de la suite', en: 'Warm suite interior' } },
    ],
    blockedDates: [],
  },
  {
    slug: 'habitacion-terra',
    name: { es: 'Habitación Terra', en: 'Terra Room' },
    eyebrow: { es: 'Texturas que abrazan', en: 'A room with texture' },
    description: {
      es: 'Un espacio íntimo de tonos minerales y texturas honestas. Todo lo esencial está cerca: una cama amplia, un baño tranquilo y una ventana que enmarca el jardín.',
      en: 'An intimate space in mineral tones and honest textures. Everything essential is close: a generous bed, a quiet bathroom and a window framing the garden.',
    },
    price: 2150,
    capacity: 2,
    adults: 2,
    children: 0,
    size: 29,
    beds: { es: '1 cama queen', en: '1 queen bed' },
    highlights: [
      { es: 'Luz natural', en: 'Natural light' },
      { es: 'Vista al jardín', en: 'Garden view' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    amenities: [
      { es: 'Aire acondicionado', en: 'Air conditioning' },
      { es: 'Wi-Fi de alta velocidad', en: 'High-speed Wi-Fi' },
      { es: 'Cafetera de especialidad', en: 'Specialty coffee maker' },
      { es: 'Baño con ducha de lluvia', en: 'Rain shower bathroom' },
      { es: 'Ropa de cama de algodón', en: 'Cotton bed linen' },
      { es: 'Desayuno para dos', en: 'Breakfast for two' },
    ],
    policies: [
      { es: 'Check-in desde las 15:00', en: 'Check-in from 3:00 PM' },
      { es: 'Check-out hasta las 12:00', en: 'Check-out until 12:00 PM' },
      { es: 'No se permite fumar', en: 'No smoking' },
    ],
    images: [
      { ...photo('rooms/habitacion-terra/01', 'photo-1616486029423-aaa4789e8c9a'), alt: { es: 'Habitación Terra, tonos naturales', en: 'Terra room in natural tones' } },
      { ...photo('rooms/habitacion-terra/02', 'photo-1615874694520-474822394e73'), alt: { es: 'Detalle de textiles y madera', en: 'Textile and wood details' } },
      { ...photo('rooms/habitacion-terra/03', 'photo-1600607687939-ce8a6c25118c'), alt: { es: 'Espacio de descanso junto a la ventana', en: 'Resting area by the window' } },
    ],
    blockedDates: [],
  },
  {
    slug: 'suite-familiar',
    name: { es: 'Suite Familiar', en: 'Family Suite' },
    eyebrow: { es: 'Tiempo para estar juntos', en: 'Room to be together' },
    description: {
      es: 'Una suite amplia para compartir el viaje sin renunciar al espacio propio. Dos áreas para descansar, guardar las maletas y despertar con tiempo.',
      en: 'A spacious suite for sharing the trip without giving up room to breathe. Two places to unwind, unpack and wake up without a rush.',
    },
    price: 3650,
    capacity: 4,
    adults: 2,
    children: 2,
    size: 52,
    beds: { es: '1 cama king y 2 individuales', en: '1 king and 2 single beds' },
    highlights: [
      { es: 'Hasta 4 huéspedes', en: 'Up to 4 guests' },
      { es: 'Sala independiente', en: 'Separate lounge' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    amenities: [
      { es: 'Aire acondicionado', en: 'Air conditioning' },
      { es: 'Wi-Fi de alta velocidad', en: 'High-speed Wi-Fi' },
      { es: 'Cafetera de especialidad', en: 'Specialty coffee maker' },
      { es: 'Baño con ducha de lluvia', en: 'Rain shower bathroom' },
      { es: 'Ropa de cama de algodón', en: 'Cotton bed linen' },
      { es: 'Desayuno para cuatro', en: 'Breakfast for four' },
    ],
    policies: [
      { es: 'Check-in desde las 15:00', en: 'Check-in from 3:00 PM' },
      { es: 'Check-out hasta las 12:00', en: 'Check-out until 12:00 PM' },
      { es: 'No se permite fumar', en: 'No smoking' },
    ],
    images: [
      { ...photo('rooms/suite-familiar/01', 'photo-1616594039964-ae9021a400a0'), alt: { es: 'Suite familiar con área de descanso', en: 'Family suite with a lounge area' } },
      { ...photo('rooms/suite-familiar/02', 'photo-1618221195710-dd6b41faaea6'), alt: { es: 'Sala de la suite familiar', en: 'Family suite lounge' } },
      { ...photo('rooms/suite-familiar/03', 'photo-1617104678098-de229db51175'), alt: { es: 'Habitación familiar con cama amplia', en: 'Family room with a spacious bed' } },
    ],
    blockedDates: [],
  },
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
    { q: '¿A qué hora puedo entrar y salir?', a: `El check-in es desde las ${'15:00'} y el check-out hasta las ${'12:00'}. Si necesitas otro horario, consúltalo al enviar tu solicitud.` },
    { q: '¿El precio mostrado es definitivo?', a: 'Es un estimado por noche. El hotel confirma el importe final y la disponibilidad antes de formalizar la reserva.' },
    { q: '¿Puedo solicitar una habitación para niños?', a: 'La Suite Familiar admite hasta cuatro huéspedes. Indica el número de adultos y niños en el formulario para recibir confirmación.' },
    { q: '¿Cómo se gestionan mis datos?', a: 'Los datos se usan para atender tu solicitud y se comparten por WhatsApp. Consulta el aviso de privacidad para conocer el alcance y tus derechos.' },
  ],
  en: [
    { q: 'How does a booking request work?', a: 'Choose a room and your dates. Your request opens in WhatsApp with the details arranged; the hotel team confirms availability and the final price.' },
    { q: 'What are the check-in and check-out times?', a: 'Check-in starts at 3:00 PM and check-out is by 12:00 PM. Ask when you send your request if you need a different time.' },
    { q: 'Is the displayed price final?', a: 'It is an estimate per night. The hotel confirms the final amount and availability before formalizing your booking.' },
    { q: 'Can I request a room for children?', a: 'The Family Suite accommodates up to four guests. Include the number of adults and children in your form for confirmation.' },
    { q: 'How is my information handled?', a: 'Your details are used to handle your request and are shared through WhatsApp. See the privacy notice for the full scope and your rights.' },
  ],
};