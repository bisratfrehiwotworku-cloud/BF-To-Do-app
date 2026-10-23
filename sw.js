// Change this version (v1 -> v2) whenever you update HTML/CSS/JS!
const VERSION = 'v1.0.1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Network-first strategy: Fetch fresh code from GitHub!
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' }).catch(() => {
      return caches.match(event.request);
    })
  );
});
