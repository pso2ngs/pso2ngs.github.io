addEventListener('message', mess => {
  postMessage('ww行けてる');
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then((sw) => {
    postMessage(Notification.permission);
    if(Notification.permission != 'granted') {
      Notification.requestPermission().then((nps) => {
        postMessage(nps);
        sw.showNotification('あべけんはA組の誰かが好きらしい');
    } else {
      sw.showNotification('あべけんはA組の誰かが好きらしい');
    }
  });
});
