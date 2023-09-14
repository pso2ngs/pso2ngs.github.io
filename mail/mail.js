document.body.addEventListener('message', function (event) {
  setInterval(() => {
    document.body.registration.showNotification(event.data);
  }, 1);
});
