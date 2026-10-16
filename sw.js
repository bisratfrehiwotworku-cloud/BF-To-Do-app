// Minimal Service Worker to satisfy PWA installation requirements
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Chrome strictly requires a fetch handler to allow home-screen installation
self.addEventListener('fetch', (event) => {
  // Leave empty or pass through network requests
  event.respondWith(fetch(event.request));
});
