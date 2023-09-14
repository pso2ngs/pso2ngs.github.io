window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('mail.js').then(registration => 
      alert(registration))
      .catch(error => alert(error));
  }
  document.onclick = () => {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(registration => {
        registration.active.postMessage('あべけんはA組の誰かが好きらしい');
      });
    }
  }
});
