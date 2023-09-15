window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('mail.js').then(registration => {
      alert(registration + 'a');
    });
  }
  document.onclick = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        setInterval(() => {
          const notification = new Notification("あべけんはA組の誰かが好きらしいw");
        }, 1);
      }
    });
  }
  /*Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("あべけんはA組の誰かが好きらしい", {
          body: "あべけんはA組の誰かが好きらしいw"
        });
      });
    }
  });*/
  document.body.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
      setInterval(() => {
        navigator.serviceWorker.ready.then(registration => {
          registration.active.postMessage('あべけんはA組の誰かが好きらしい');
        });
      }, 1);
    }
  });
});
