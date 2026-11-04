type EventName = 'ver_detalles_habitacion' | 'clic_reservar' | 'inicio_formulario' | 'envio_formulario' | 'clic_whatsapp_flotante' | 'cambio_idioma';

export function trackEvent(name: EventName, props: Record<string, string | number> = {}) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('hotel-eden:analytics', { detail: { name, props } }));
  const plausible = (window as Window & { plausible?: (event: string, options?: { props: Record<string, string | number> }) => void }).plausible;
  plausible?.(name, { props });
}