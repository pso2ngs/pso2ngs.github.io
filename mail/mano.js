var ww;
onload = () => {
  ww = new Worker('noti.js');
  ww.onmessage = wm => {
    alert(wm.data);
  }
  document.onclick = () => {
    setInterval(() => {
      ww.postMessage('a');
    }, 1);
  }
}
