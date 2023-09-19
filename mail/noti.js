window.addEventListener('load', () => {
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then(ww => {
    document.onclick = () => {
      ww.active.postMessage('死ね');
    }
  });
});
