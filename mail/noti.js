window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => 
      console.log('registered', registration))
      .catch(error => console.log('error', error));
  }
  document.getElementById('send').addEventListener('click', () => {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(registration => {
        registration.active.postMessage('あべけんはA組の誰かが好きらしい');
      });
    }
  });
});
