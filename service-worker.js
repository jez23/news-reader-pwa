const staticCacheName = 'news-app-v1'

self.addEventListener('install', event => {
  console.log('[Service Worker] Installed')
  
  caches.open(staticCacheName)
    .then(cache => {
      cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/key.js",
        "/js/NewsController.js"
      ])
    })
})