addEventListener('message', mess => {
  postMessage('ww行けてる');
  postMessage(Notification.permission);
  if(Notification.permission != 'granted') {
    Notification.requestPermission().then((notr)=> {
      navigator.serviceWorker.register('mail.js');
      navigator.serviceWorker.ready.then((sw) => {
        postMessage(Notification.permission);
        postMessage(nptr);
        sw.showNotification('あべけんはA組の誰かが好きらしい');
      });
    }).catch(() => {
      postMessage('');
    });
    postMessage(Notification.permission + 'fuck you!');
  } else {
    navigator.serviceWorker.register('mail.js');
    navigator.serviceWorker.ready.then((sw) => {
      postMessage(Notification.permission);
      sw.showNotification('あべけんはA組の誰かが好きらしい');
    });
  }
});
