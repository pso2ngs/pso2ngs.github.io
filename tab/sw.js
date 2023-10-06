self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => cache.addAll([
      '/', 'img.pdf', 'img 2.pdf', 'img 3.pdf', 'img 4.pdf', 'img 5.pdf', 'img 6.pdf', 'img 7.pdf', 'img 8.pdf', 'img 9.pdf', 'img 10.pdf', 'img 11.pdf', 'img 12.pdf', 'img 13.pdf', 'img 14.pdf', 'img 15.pdf', 'img 16.pdf', 'img 17.pdf', 'img 18.pdf', 'img 19.pdf', 'img 20.pdf', 'img 21.pdf', 'img 22.pdf', 'img 23.pdf', 'img 24.pdf', 'img 25.pdf', 'img 26.pdf', 'img 27.pdf', 'img 28.pdf', 'img 29.pdf', 'img 30.pdf', 'img 31.pdf', 'img 32.pdf', 'img 33.pdf', 'img 34.pdf', 'img 35.pdf', 'img 36.pdf', 'img 37.pdf', 'img 38.pdf', 'img 39.pdf', 'img 40.pdf', 'img 41.pdf', 'img 42.pdf', 'img 43.pdf', 'img 44.pdf', 'img 45.pdf', 'img 46.pdf', 'img 47.pdf', 'img 48.pdf', 'img 49.pdf', 'img 50.pdf
    ]))
  );
});
