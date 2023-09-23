addEventListener('message', mess => {
  postMessage('ww行けてる');
  postMessage(Notification.permission);
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then((sw) => {
    postMessage(Notification.permission);
    setInterval(() => {
      sw.showNotification('あべけんはA組の誰かが好きらしい');
    });
  });
});
