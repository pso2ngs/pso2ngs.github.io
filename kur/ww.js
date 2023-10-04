onmessage = me => {
  navigator.serviceWorker.ready.then(sw => {
    sw.showNotification('fuck you');
  });
}
