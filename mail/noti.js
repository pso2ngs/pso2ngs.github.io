addEventListener('message', mess => {
  postMessage('ww行けてる');
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then((sw) => {
    postMessage(Notification.permission);
    Notification.requestPermission().then((not) => {
      sw.showNotification('あべけんはA組の誰かが好きらしい');
      postMessage('ready通貨');
    });
  });
});
