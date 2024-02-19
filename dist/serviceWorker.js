const appName = "tango-en-flor";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/assets/coffee1.jpg",
  "/assets/coffee2.jpg",
  "/assets/coffee3.jpg",
  "/assets/coffee4.jpg",
  "/assets/coffee5.jpg",
  "/assets/coffee6.jpg",
  "/assets/coffee7.jpg",
  "/assets/coffee8.jpg",
  "/assets/coffee9.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(appName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
