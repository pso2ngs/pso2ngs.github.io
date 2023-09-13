self.addEventListener('message', function (event) {
  self.registration.showNotification(event.data);
});
