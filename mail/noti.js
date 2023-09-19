addEventListener('message', mess => {
  postMessage('ww行けてる');
  navigator.serviceWorker.register('mail.js');
  navigator.serviceWorker.ready.then(sw => {
    postMessage('ready行けてる');
    try {
      sw.showNotification('あべけんはA組の誰かが好きらしい').then(t => {
        postMessage(t);
      }).catch(r => {
        postMessage(r);
      }).finally(() => {
        postMessage('ガンバ');
      });
    } catch(ert) {
      postMessage(ert);
    }
  });
  if(Notification.permission != 'granted') Notification.requestPermission()
});
