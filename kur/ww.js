onmessage = me => {
  navigator.serviceWorker.register("sw.js");
  navigator.serviceWorker.ready.then((regist) => {
    regist.postMessage('shine');
  });
}
