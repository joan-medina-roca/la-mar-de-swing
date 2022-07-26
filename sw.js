self.addEventListener(install, function (event) {
  event.waitUntil(
    caches.open("sw-cache").then(function (cache) {
      return cache.add("index.html", "style.css");
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondwith(
    cache.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
