var ww;
onload = () => {
  ww = new Worker('noti.js');
  ww.postMessage('a');
}
