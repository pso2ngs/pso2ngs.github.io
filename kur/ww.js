
function showNotificatio() {
  navigator.serviceWorker.register("sw.js");
  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("あべけんはA組の誰かが好きらしい", {
          body: "ぽよぽよ",
          icon: "https://abekenman.github.io/Abekenman.webp",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}
onmessage = mes => {
  showNotificatio();
}
