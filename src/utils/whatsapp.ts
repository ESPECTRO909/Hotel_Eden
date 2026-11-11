import type { Room } from '../data/hotelData';
import { siteConfig } from '../data/siteConfig';
import { nightsBetween } from './dates';

export type Reservation = {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  arrival: string;
  comments: string;
  language: 'es' | 'en';
};

const dateLabel = (value: string) => {
  if (!value) return '';
  return new Intl.DateTimeFormat('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T12:00:00Z`));
};

export function buildWhatsAppMessage(room: Room, reservation: Reservation): string {
  const nights = nightsBetween(reservation.checkIn, reservation.checkOut);
  const total = nights * room.price;
  return [
    '*SOLICITUD DE RESERVA*',
    `*Habitación:* ${room.name.es}`,
    `*Precio:* $${room.price.toLocaleString('es-MX')} MXN por noche (más impuestos)`,
    '',
    '*DATOS DEL HUÉSPED*',
    `Nombre: ${reservation.name}`,
    `Teléfono: ${reservation.phone}`,
    `Correo: ${reservation.email || 'No indicado'}`,
    '',
    '*ESTANCIA*',
    `Entrada: ${dateLabel(reservation.checkIn)}`,
    `Salida: ${dateLabel(reservation.checkOut)}`,
    `Noches: ${nights}`,
    `Huéspedes: ${reservation.adults} adultos, ${reservation.children} niños`,
    `Llegada estimada: ${reservation.arrival || 'No indicada'}`,
    `Total estimado: $${total.toLocaleString('es-MX')} MXN (más impuestos)`,
    '',
    `*Comentarios:* ${reservation.comments || 'Ninguno'}`,
    '',
    `_Solicitud enviada desde la web. Sujeta a disponibilidad._`,
    reservation.language === 'en' ? 'Idioma del cliente: EN' : '',
  ].filter((line, index, list) => line || (index > 0 && list[index - 1] !== '')).join('\n');
}

export function buildWhatsAppUrl(message: string): string {
  const phone = siteConfig.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}