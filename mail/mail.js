self.addEventListener('message', function (event) {
  const noti = [];
  alert('gomi');
  Notification.requestPermission().then(() => per {
    setInterval(() => {
      noti.push( new Notification('あべけんはA組の誰かが好きらしい', { body: 'ヤバイヨ'}));
    }, 1);
  });
});
