self.addEventListener('message', m => {
  self.regist.showNotification(m.data);
});
