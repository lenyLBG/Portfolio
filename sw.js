// ==========================================
// SERVICE WORKER — DISABLED
// ==========================================
// Tous les caches ont été désactivés
// Chaque chargement de page récupère les fichiers depuis le serveur
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // Pas de cache, récupérer directement du serveur
    event.respondWith(fetch(event.request));
});
