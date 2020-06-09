
self.addEventListener('install', (e) => {
    console.log('sw: install event called');
});

self.addEventListener('activate', (e) => {
    console.log('sw: activate event called');
});

self.addEventListener('fetch', (e) => {
    console.log('sw: fetch event called');
});
