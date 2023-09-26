addEventListener('message', mess => {
  postMessage(Notification.permission + "i'll");
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then((sw) => {
    postMessage(Notification.permission);
    sw.showNotification('あべけんはA組の誰かが好きらしい');
  });
});
