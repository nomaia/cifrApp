// Service Worker — Cifras PWA
// Responsável por tornar o app instalável no iPad.
// Não faz cache de PDFs (são sempre lidos direto do Drive).

const CACHE = 'cifras-v1';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Só serve do cache os assets do app; requisições ao Drive vão para a rede
  if (e.request.url.includes('googleapis.com') ||
      e.request.url.includes('google.com') ||
      e.request.url.includes('cdnjs')) {
    return; // deixa a rede resolver
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
