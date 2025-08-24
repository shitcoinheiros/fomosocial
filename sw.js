self.addEventListener('install', event => {
  self.skipWaiting(); // ativa imediatamente
});

self.addEventListener('activate', event => {
  clients.claim(); // assume controle da página
});

self.addEventListener('fetch', event => {
  // Força sempre buscar do network, sem usar cache
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Erro ao buscar o recurso', { status: 408 });
    })
  );
});
