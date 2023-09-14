onload = () => {
  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("あべけんはA組の誰かが好きらしい", {
          body: "あべけんはA組の誰かが好きらしいw"
        });
      });
    }
  });
}
