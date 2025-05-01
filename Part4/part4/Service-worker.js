const CACHE_NAME = "sweetleaf-tea-shop-cache-v1";
const urlsToCache = [
  "index.html",
  "checkout.html",
  "login.html",
  "dashboard.html",
  "manage.html",
  "orders.html",
  "css/style.css",
  "assets/chamomile.jpg",
  "assets/mint.jpg",
  "assets/earlgrey.jpg",
  "assets/hero.jpg",
  "assets/background.jpg",
  "assets/favicon.jpg",
  "assets/leaf-divider.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
