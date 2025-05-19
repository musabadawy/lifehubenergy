self.addEventListener('install', event => {
  event.waitUntil(caches.open('lhe-v1').then(cache => {
    return cache.addAll(['/', '/index.html', '/css/style.css']);
  }));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => {
    return resp || fetch(event.request);
  }));
});