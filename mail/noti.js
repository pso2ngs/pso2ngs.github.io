addEventListener('message', mess => {
  postMessage('ww行けてる');
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then(sw => {
    postMessage('ready行けてる');
    sw.showNotification('あべけんはA組の誰かが好きらしい');
  });
  if(Notification.permission) Notification.requestPermission()
});
