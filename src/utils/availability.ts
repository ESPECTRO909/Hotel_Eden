import { siteConfig } from '../data/siteConfig';

export async function readBlockedDates(roomSlug: string, roomDates: string[] = []): Promise<string[]> {
  const fallback = [...new Set([...siteConfig.blockedDates, ...roomDates])];
  if (!siteConfig.availabilityCsvUrl) return fallback;

  try {
    const response = await fetch(siteConfig.availabilityCsvUrl, { signal: AbortSignal.timeout(3500) });
    if (!response.ok) return fallback;
    const rows = (await response.text()).split(/\r?\n/).slice(1);
    const dates = rows.flatMap((row) => {
      const [slug, start, end] = row.split(',').map((value) => value.trim());
      if (!start || !end || (slug && slug !== '*' && slug !== roomSlug)) return [];
      const blocked: string[] = [];
      const cursor = new Date(`${start}T12:00:00`);
      const until = new Date(`${end}T12:00:00`);
      while (cursor <= until && blocked.length < 366) {
        blocked.push(cursor.toISOString().slice(0, 10));
        cursor.setDate(cursor.getDate() + 1);
      }
      return blocked;
    });
    return [...new Set([...fallback, ...dates])];
  } catch {
    return fallback;
  }
}