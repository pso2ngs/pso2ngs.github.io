var ww;
onload = () => {
  ww = new Worker('noti.js');
  ww.onmessage = wm => {
    document.querySelector('h1').innerHTML = 'あべけんはA組の誰かが好きらしい' + wm.data;
  }
  ww.onerror = (err) => {
    alert(err.message);
  }
  document.onclick = () => {
    Notification.requestPermission().then(per => {
      alert(per);
    });
    ww.postMessage('a');
  }
}
