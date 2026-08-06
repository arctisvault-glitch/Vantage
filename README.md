// Vantage service worker — bump CACHE on every deploy so clients pick up new assets.
const CACHE = "vantage-v2.0.0";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./app.css",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./fonts/ibm-plex-sans-latin-400-normal.woff2",
  "./fonts/ibm-plex-sans-latin-500-normal.woff2",
  "./fonts/ibm-plex-sans-latin-600-normal.woff2",
  "./fonts/ibm-plex-mono-latin-400-normal.woff2",
  "./fonts/ibm-plex-mono-latin-500-normal.woff2",
  "./fonts/ibm-plex-mono-latin-600-normal.woff2",
  "./fonts/sora-latin-600-normal.woff2",
  "./fonts/sora-latin-700-normal.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(e.request)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
            return res;
          })
          .catch(() => caches.match("./index.html"))
    )
  );
});
