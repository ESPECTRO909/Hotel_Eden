import { siteConfig } from '../data/siteConfig';

export function sendRequestBackup(payload: Record<string, string | number>) {
  if (!siteConfig.backupEndpoint) return;
  void fetch(siteConfig.backupEndpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => undefined);
}