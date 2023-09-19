addEventListener('message', () => {
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then(ww => {
    ww.showNotification('あべけんはA組の誰かが好きらしいi');
  });
  if(Notification.permission) Notification.requestPermission()
});
