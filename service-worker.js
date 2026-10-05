// Diffup — service worker : installabilité PWA + réception du partage Android (Web Share Target)
var SHARE_CACHE = 'diffup-shared-v1';

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  var url = new URL(event.request.url);
  if(event.request.method === 'POST' && url.pathname.indexOf('share-target.html') !== -1){
    event.respondWith(handleShare(event.request));
  }
});

async function handleShare(request){
  try{
    var formData = await request.formData();
    var files = formData.getAll('shared_files').filter(function(f){ return f && f.size > 0; });
    var cache = await caches.open(SHARE_CACHE);

    await cache.put('shared-meta', new Response(JSON.stringify({
      title: formData.get('title') || '',
      text: formData.get('text') || '',
      url: formData.get('url') || '',
      fileCount: files.length
    })));

    for(var i = 0; i < files.length; i++){
      await cache.put('shared-file-' + i, new Response(files[i], {
        headers: { 'Content-Type': files[i].type || 'application/octet-stream' }
      }));
    }
  }catch(e){
    console.error('Diffup SW: échec de la réception du partage', e);
  }
  return Response.redirect('./index.html?shared=1', 303);
}
