onmessage = me => {
  navigator.serviceWorker.register("sw.js");
  navigator.serviceWorker.ready.then((regist) => {
    regist.showNotification("あべけんはA組の誰かが好きらしい");
  });
}
