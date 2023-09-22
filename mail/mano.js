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
    ww.postMessage('a');
  }
}
