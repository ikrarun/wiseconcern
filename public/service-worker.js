importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

const { precacheAndRoute, cleanupOutdatedCaches } = workbox;

precacheAndRoute([]);

cleanupOutdatedCaches();

workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts-cache',
        plugins: [
            {
                cacheWillUpdate: async ({ request, response }) => {
                    const cache = await caches.open('google-fonts-cache');
                    const cachedResponse = await cache.match(request.url);
                    if (cachedResponse) {
                        const currentTime = new Date().getTime();
                        const lastCachedTime = new Date(cachedResponse.headers.get('date')).getTime();
                        if (currentTime - lastCachedTime > 4 * 60 * 60 * 1000) {
                            return fetch(request);
                        }
                    }
                    return response;
                }
            }
        ]
    })
);

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        cacheName: 'images-cache',
        plugins: [
            {
                cacheWillUpdate: async ({ request, response }) => {
                    const cache = await caches.open('images-cache');
                    const cachedResponse = await cache.match(request.url);
                    if (cachedResponse) {
                        const currentTime = new Date().getTime();
                        const lastCachedTime = new Date(cachedResponse.headers.get('date')).getTime();
                        if (currentTime - lastCachedTime > 4 * 60 * 60 * 1000) {
                            return fetch(request);
                        }
                    }
                    return response;
                }
            }
        ]
    })
);
