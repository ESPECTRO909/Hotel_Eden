import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronLeft, ChevronRight, Copy, MessageCircle, X } from 'lucide-react';
import type { Room } from '../data/hotelData';
import { siteConfig } from '../data/siteConfig';
import { ui } from '../i18n/ui';
import { datesOverlap, nightsBetween, todayISO } from '../utils/dates';
import { buildWhatsAppMessage, buildWhatsAppUrl, type Reservation } from '../utils/whatsapp';
import AmenityList from './AmenityList';

type Language = 'es' | 'en';
type Copy = (typeof ui)[Language];
type Props = { lang: Language; rooms: Room[]; copy: Copy };
type FormValues = Omit<Reservation, 'language'> & { privacy: boolean; website: string };

const emptyValues = (room: Room): FormValues => ({
  name: '', phone: '', email: '', checkIn: '', checkOut: '', adults: Math.min(2, room.capacity), children: 0,
  arrival: '', comments: '', privacy: false, website: '',
});

const money = (amount: number, lang: Language) => new Intl.NumberFormat(lang === 'es' ? 'es-MX' : 'en-US', {
  style: 'currency', currency: siteConfig.currency, maximumFractionDigits: 0,
}).format(amount);

type DatePickerProps = {
  label: string;
  value: string;
  minDate: string;
  blockedDates: string[];
  copy: Copy;
  disabled?: boolean;
  rangeUnavailable?: (date: string) => boolean;
  onChange: (date: string) => void;
};

function DatePickerField({ label, value, minDate, blockedDates, copy, disabled = false, rangeUnavailable, onChange }: DatePickerProps) {
  const lang = copy.language;
  const [open, setOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const source = value || todayISO();
    const [year, month] = source.split('-').map(Number);
    return new Date(year, month - 1, 1);
  });
  const rootRef = useRef<HTMLDivElement>(null);
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const dayCount = new Date(year, month + 1, 0).getDate();
  const blanks = new Date(year, month, 1).getDay();
  const calendarDays: Array<number | null> = [
    ...Array.from({ length: blanks }, () => null),
    ...Array.from({ length: dayCount }, (_, index) => index + 1),
  ];
  while (calendarDays.length % 7 !== 0) calendarDays.push(null);
  const monthLabel = new Intl.DateTimeFormat(lang === 'es' ? 'es-MX' : 'en-US', { month: 'long', year: 'numeric' }).format(visibleMonth);
  const weekdays = Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(lang === 'es' ? 'es-MX' : 'en-US', { weekday: 'short' }).format(new Date(2023, 0, index + 1)),
  );

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, [open]);

  function isoDate(day: number) {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }

  function chooseDate(date: string) {
    onChange(date);
    setOpen(false);
  }

  return (
    <div className="field date-picker-field" ref={rootRef}>
      <span>{label}</span>
      <button
        className="date-picker-trigger"
        type="button"
        disabled={disabled}
        aria-label={`${label}${value ? `: ${value}` : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => {
          if (value) {
            const [selectedYear, selectedMonth] = value.split('-').map(Number);
            setVisibleMonth(new Date(selectedYear, selectedMonth - 1, 1));
          }
          setOpen((current) => !current);
        }}
      >
        <span>{value ? new Intl.DateTimeFormat(lang === 'es' ? 'es-MX' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T12:00:00`)) : copy.datePlaceholder}</span>
        <CalendarDays size={17} aria-hidden="true" />
      </button>
      {open && (
        <div className="calendar-popover" role="group" aria-label={label}>
          <div className="calendar-heading">
            <button type="button" className="calendar-month-button" onClick={() => setVisibleMonth(new Date(year, month - 1, 1))} aria-label={copy.previousMonth}><ChevronLeft size={17} /></button>
            <span aria-live="polite">{monthLabel}</span>
            <button type="button" className="calendar-month-button" onClick={() => setVisibleMonth(new Date(year, month + 1, 1))} aria-label={copy.nextMonth}><ChevronRight size={17} /></button>
          </div>
          <div className="calendar-grid" role="grid">
            {weekdays.map((weekday, index) => <span className="calendar-weekday" role="columnheader" key={`${weekday}-${index}`}>{weekday}</span>)}
            {calendarDays.map((day, index) => {
              if (!day) return <span className="calendar-empty" role="gridcell" key={`empty-${index}`} />;
              const date = isoDate(day);
              const unavailable = date < minDate || blockedDates.includes(date) || Boolean(rangeUnavailable?.(date));
              const selected = date === value;
              return <button className={`calendar-day${selected ? ' calendar-day-selected' : ''}${unavailable ? ' calendar-day-blocked' : ''}`} type="button" role="gridcell" key={date} disabled={unavailable} aria-pressed={selected} aria-label={date} onClick={() => chooseDate(date)}>{day}</button>;
            })}
          </div>
          <p className="calendar-legend"><span></span>{copy.unavailableDate}</p>
        </div>
      )}
    </div>
  );
}

export default function HotelExperience({ lang, rooms, copy }: Props) {
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);
  const [bookingRoom, setBookingRoom] = useState<Room | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [values, setValues] = useState<FormValues | null>(null);
  const [error, setError] = useState('');
  const [sentMessage, setSentMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogMode = detailRoom ? 'detail' : bookingRoom ? 'booking' : null;

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('reserva');
    const initialRoom = rooms.find((room) => room.slug === slug);
    if (initialRoom) {
      setBookingRoom(initialRoom);
      setValues(emptyValues(initialRoom));
    }
  }, [rooms]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialogMode || !dialog) return;
    if (!dialog.open) dialog.showModal();
    dialog.addEventListener('close', closeDialog);
    return () => dialog.removeEventListener('close', closeDialog);
  }, [dialogMode]);

  function closeDialog() {
    setDetailRoom(null);
    setBookingRoom(null);
    setSentMessage('');
    setError('');
  }

  function showDetails(room: Room) {
    setPhotoIndex(0);
    setDetailRoom(room);
  }

  function startBooking(room: Room) {
    setValues(emptyValues(room));
    setSentMessage('');
    setError('');
    setBookingRoom(room);
    setDetailRoom(null);
  }

  function updateValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => current ? { ...current, [key]: value } : current);
    setError('');
  }

  function changePhoto(step: number) {
    if (!detailRoom) return;
    setPhotoIndex((current) => (current + step + detailRoom.images.length) % detailRoom.images.length);
  }

  function submitReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!bookingRoom || !values) return;
    if (values.website) return;
    if (!values.name.trim() || !values.phone.trim() || !values.checkIn || !values.checkOut || !values.privacy) {
      setError(copy.requiredError);
      return;
    }
    const phoneDigits = values.phone.replace(/\D/g, '');
    if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      setError(copy.phoneError);
      return;
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setError(copy.emailError);
      return;
    }
    if (values.checkIn < todayISO() || nightsBetween(values.checkIn, values.checkOut) < 1) {
      setError(copy.datesError);
      return;
    }
    if (datesOverlap(values.checkIn, values.checkOut, blockedDates)) {
      setError(copy.unavailableDatesError);
      return;
    }
    if (values.adults + values.children > bookingRoom.capacity) {
      setError(copy.capacityError);
      return;
    }

    const reservation: Reservation = {
      name: values.name.trim(), phone: values.phone.trim(), email: values.email.trim(),
      checkIn: values.checkIn, checkOut: values.checkOut, adults: values.adults,
      children: values.children, arrival: values.arrival, comments: values.comments.trim(), language: lang,
    };
    const message = buildWhatsAppMessage(bookingRoom, reservation);
    setSentMessage(message);
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(sentMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setError(copy.copyError);
    }
  }

  function floatingWhatsApp() {
    const message = copy.whatsappGreeting;
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }

  const blockedDates = bookingRoom ? [...new Set([...siteConfig.blockedDates, ...bookingRoom.blockedDates])] : [];
  const nights = values ? nightsBetween(values.checkIn, values.checkOut) : 0;
  const total = bookingRoom ? nights * bookingRoom.price : 0;

  return (
    <>
      <div className="room-grid">
        {rooms.map((room, index) => (
          <article className={`room-card room-card-${index + 1}`} key={room.slug}>
            <button className="room-card-image" onClick={() => showDetails(room)} aria-label={`${copy.details}: ${room.name[lang]}`}>
              <img src={room.images[0].src} data-fallback={room.images[0].fallback} alt={room.images[0].alt[lang]} loading="lazy" />
              <span className="room-image-index">0{index + 1} / 0{rooms.length}</span>
              <span className="room-image-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
            </button>
            <div className="room-card-content">
              <p className="room-eyebrow">{room.eyebrow[lang]}</p>
              <div className="room-card-title-row"><h3>{room.name[lang]}</h3></div>
              <p className="room-highlights">{room.highlights.slice(0, 2).map((item) => item[lang]).join(' · ')}</p>
              <div className="room-card-bottom">
                <p><strong>{money(room.price, lang)}</strong><span> / {copy.perNight}</span></p>
                <div className="room-card-actions">
                  <button className="room-details-button" onClick={() => showDetails(room)}>{copy.details}<ArrowUpRight size={16} /></button>
                  <button className="room-book-button" onClick={() => startBooking(room)}>{copy.reserve}<ArrowRight size={15} /></button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="room-grid-note"><span>{copy.ratesNote}</span><span>{copy.requestNote}</span></div>

      {!dialogMode && <button className="whatsapp-float" onClick={floatingWhatsApp} aria-label={copy.whatsappFloatLabel} title={copy.whatsappFloatLabel}><MessageCircle size={23} /><span>{copy.whatsappFloatText}</span></button>}

      {detailRoom && (
        <dialog className="dialog-backdrop" aria-labelledby="detail-title" ref={dialogRef} onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
          <section className="room-dialog">
            <header className="dialog-header"><a className="dialog-brand" href={lang === 'es' ? '/' : '/en/'}>Hotel El Eden</a><button className="icon-button" onClick={closeDialog} aria-label={copy.close}><X size={20} /></button></header>
            <div className="dialog-scroll">
              <div className="gallery-main">
                <img src={detailRoom.images[photoIndex].src} data-fallback={detailRoom.images[photoIndex].fallback} alt={detailRoom.images[photoIndex].alt[lang]} />
                <button className="gallery-control gallery-prev" onClick={() => changePhoto(-1)} aria-label={copy.previousPhoto}><ChevronLeft size={22} /></button>
                <button className="gallery-control gallery-next" onClick={() => changePhoto(1)} aria-label={copy.nextPhoto}><ChevronRight size={22} /></button>
                <span className="gallery-count">{String(photoIndex + 1).padStart(2, '0')} / {String(detailRoom.images.length).padStart(2, '0')}</span>
              </div>
              <div className="detail-content">
                <p className="eyebrow">{detailRoom.eyebrow[lang]}</p><h2 id="detail-title">{detailRoom.name[lang]}</h2>
                <p className="detail-description">{detailRoom.description[lang]}</p>
                <div className="detail-facts"><span>{detailRoom.beds[lang]}</span><span>{`${copy.upTo} ${detailRoom.capacity} ${copy.guests}`}</span></div>
                <div className="detail-section"><h3>{copy.amenities}</h3><AmenityList className="amenity-chips" items={detailRoom.amenities.map((item) => item[lang])} /></div>
                <div className="detail-section"><h3>{copy.policies}</h3><ul className="policy-list">{detailRoom.policies.map((item) => <li key={item.es}>{item[lang]}</li>)}</ul></div>
                <a className="detail-page-link" href={`${lang === 'es' ? '/habitaciones/' : '/en/rooms/'}${detailRoom.slug}/`}><span>{copy.fullRoomPage}</span><ArrowUpRight size={17} /></a>
              </div>
            </div>
            <footer className="dialog-footer"><div><strong>{money(detailRoom.price, lang)}</strong><span> / {copy.perNight}</span></div><button className="button button-dark" onClick={() => startBooking(detailRoom)}>{copy.reserve}<ArrowRight size={17} /></button></footer>
          </section>
        </dialog>
      )}

      {bookingRoom && values && (
        <dialog className="dialog-backdrop" aria-labelledby="booking-title" ref={dialogRef} onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
          <section className="booking-dialog">
            <header className="dialog-header"><button className="back-text-button" onClick={() => { setBookingRoom(null); setDetailRoom(bookingRoom); setSentMessage(''); }}><ArrowLeft size={17} />{copy.backToRoom}</button><button className="icon-button" onClick={closeDialog} aria-label={copy.close}><X size={20} /></button></header>
            <div className="booking-scroll">
              <p className="eyebrow">{copy.formSub}</p><h2 id="booking-title">{copy.formTitle}</h2>
              <div className="booking-room-summary"><img src={bookingRoom.images[0].src} data-fallback={bookingRoom.images[0].fallback} alt="" /><div><strong>{bookingRoom.name[lang]}</strong><span>{money(bookingRoom.price, lang)} / {copy.perNight}</span></div><Check size={19} aria-hidden="true" /></div>
              <form id="reservation-request-form" className="reservation-form" onSubmit={submitReservation} noValidate>
                <div className="form-grid">
                  <label className="field field-wide">{copy.fullName}<input autoComplete="name" value={values.name} onChange={(event) => updateValue('name', event.target.value)} required /></label>
                  <label className="field">{copy.phone}<input type="tel" inputMode="tel" autoComplete="tel" placeholder="+52 55 1234 5678" value={values.phone} onChange={(event) => updateValue('phone', event.target.value)} required /></label>
                  <label className="field">{copy.email}<input type="email" inputMode="email" autoComplete="email" value={values.email} onChange={(event) => updateValue('email', event.target.value)} /></label>
                  <DatePickerField label={copy.checkIn} value={values.checkIn} minDate={todayISO()} blockedDates={blockedDates} copy={copy} onChange={(date) => updateValue('checkIn', date)} />
                  <DatePickerField label={copy.checkOut} value={values.checkOut} minDate={values.checkIn || todayISO()} blockedDates={blockedDates} copy={copy} disabled={!values.checkIn} rangeUnavailable={(date) => Boolean(values.checkIn) && datesOverlap(values.checkIn, date, blockedDates)} onChange={(date) => updateValue('checkOut', date)} />
                  <label className="field">{copy.adults}<select value={values.adults} onChange={(event) => updateValue('adults', Number(event.target.value))}>{Array.from({ length: bookingRoom.capacity }, (_, index) => index + 1).map((number) => <option value={number} key={number}>{number}</option>)}</select></label>
                  <label className="field">{copy.children}<select value={values.children} onChange={(event) => updateValue('children', Number(event.target.value))}>{Array.from({ length: bookingRoom.capacity + 1 }, (_, index) => index).map((number) => <option value={number} key={number}>{number}</option>)}</select></label>
                  <label className="field field-wide">{copy.arrival}<input type="time" value={values.arrival} onChange={(event) => updateValue('arrival', event.target.value)} /></label>
                  <label className="field field-wide">{copy.comments}<textarea rows={3} value={values.comments} onChange={(event) => updateValue('comments', event.target.value)} /></label>
                </div>
                <label className="honeypot" aria-hidden="true">No completar<input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue('website', event.target.value)} /></label>
                <label className="privacy-checkbox"><input type="checkbox" checked={values.privacy} onChange={(event) => updateValue('privacy', event.target.checked)} required /><span>{copy.privacyAccept} <a href={lang === 'es' ? '/privacidad' : '/en/privacy'} target="_blank" rel="noreferrer">{copy.readNotice}</a></span></label>
                {values.checkIn && values.checkOut && datesOverlap(values.checkIn, values.checkOut, blockedDates) && <p className="field-error">{copy.periodUnavailable}</p>}
                {values.checkIn && values.checkOut && nights < 1 && <p className="field-error">{copy.datesError}</p>}
                {values.checkIn && values.checkOut && nights > 0 && <div className="estimate-row"><span>{nights} {copy.nights} × {money(bookingRoom.price, lang)}</span><strong>{money(total, lang)}</strong><small>{copy.estimated}</small></div>}
                {error && <p className="form-error" role="alert">{error}</p>}
                <p className="confirmation-note">{copy.availabilityNote}</p>
              </form>
              {sentMessage && <div className="sent-panel" role="status"><Check size={20} /><div><strong>{copy.sentTitle}</strong><p>{copy.sentCopy}</p><button className="copy-button" onClick={copyMessage}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? copy.copied : copy.copyMessage}</button></div></div>}
            </div>
            <footer className="booking-footer"><button className="button button-dark submit-button" type="submit" form="reservation-request-form" disabled={Boolean(sentMessage)}>{copy.submit}<ArrowRight size={18} /></button></footer>
          </section>
        </dialog>
      )}
    </>
  );
}