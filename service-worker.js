const CACHE = "uc-suite-pwa-v1";
const FILES = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", evt => {
  evt.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(r => r || fetch(evt.request))
  );
});
