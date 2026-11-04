export function nightsBetween(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(`${checkIn}T12:00:00`);
  const end = new Date(`${checkOut}T12:00:00`);
  return Math.max(0, Math.round((end.getTime() - start.getTime()) / 86_400_000));
}

export function todayISO(): string {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

export function datesOverlap(start: string, end: string, blocked: string[]): boolean {
  const arrival = new Date(`${start}T12:00:00`).getTime();
  const departure = new Date(`${end}T12:00:00`).getTime();
  return blocked.some((date) => {
    const occupied = new Date(`${date}T12:00:00`).getTime();
    return occupied >= arrival && occupied < departure;
  });
}