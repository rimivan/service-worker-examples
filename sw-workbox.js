importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded 🎉`);
} else {
  console.log(`Workbox didn't load 😬`);
}

// Cache index file.
workbox.routing.registerRoute(
  // It's possible to use regex to match a file or some files
  'index.html',
  // Use the cache if it's available.
  new workbox.strategies.StaleWhileRevalidate()
  );
  
// Cache js/css files.
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate(),
); 

// Cache logo file.
workbox.routing.registerRoute(
    // It's possible to use regex to match a file or some files
    'assets/logo.png',
    // Use the cache if it's available.
    new workbox.strategies.StaleWhileRevalidate()
);

 // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
 workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

console.log("End workbox v1 Fonts, Index e Logo")