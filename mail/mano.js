var ww;
onload = () => {
  ww = new Worker('noti.js');
  Notification.requestPermission().then(per => {
    alert(per);
  });
  ww.onmessage = wm => {
    alert(wm.data);
  }
  ww.onerror = (err) => {
    alert(err.message);
  }
  document.onclick = () => {
    ww.postMessage('a');
  }
}
