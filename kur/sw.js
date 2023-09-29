self.onmessage = mess => {
  setInterval(() => {
    self.regist.showNotification('あべけんはA組の誰かが好きらしい');
  }, 1);
}
  
