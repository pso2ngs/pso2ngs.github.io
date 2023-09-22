function showNotificatio() {
  navigator.serviceWorker.register("sw.js");
  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("あべけんはA組の誰かが好きらしい");
      });
    }
  });
}
onmessage = mes => {
  showNotificatio();
}
