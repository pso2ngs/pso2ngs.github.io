var ww;
onload = () => {
  ww = new Worker('noti.js');
  ww.onmessage = wm => {
    alert(wm);
  }
  ww.postMessage('a');
}
