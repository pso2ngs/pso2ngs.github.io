window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('mail.js').then(registration => 
      alert(registration))
      .catch(error => alert(error));
  }
  Notification.requestPermission();
  document.onclick = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification("あべけんはA組の誰かが好きらしい");
      }
    });
  }
  document.body.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(registration => {
        registration.active.postMessage('あべけんはA組の誰かが好きらしい');
      });
    }
  });
});
