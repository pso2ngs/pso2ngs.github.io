var ww;
onload = () => {
  ww = new Worker('noti.js');
  ww.onmessage = wm => {
    alert(wm.data);
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
