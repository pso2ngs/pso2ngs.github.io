addEventListener('message', mess => {
  postMessage('ww行けてる');
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then(sw => {
    sw.showNotification('あべけんはA組の誰かが好きらしいi');
  });
  if(Notification.permission) Notification.requestPermission()
});
