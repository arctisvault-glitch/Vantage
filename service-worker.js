// Vantage service worker — the offline engine. Bump CACHE on every deploy.
const CACHE = "vantage-v2.0.2";
const ASSETS = [
  "./",
  "./index.html",
  "./application.js",
  "./stylesheet.css",
  "./manifest.webmanifest",
  "./app-icon-192.png",
  "./app-icon-512.png",
  "./apple-touch-icon.png",
  "./font-ibm-plex-sans-400.woff2",
  "./font-ibm-plex-sans-500.woff2",
  "./font-ibm-plex-sans-600.woff2",
  "./font-ibm-plex-mono-400.woff2",
  "./font-ibm-plex-mono-500.woff2",
  "./font-ibm-plex-mono-600.woff2",
  "./font-sora-600.woff2",
  "./font-sora-700.woff2",
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
