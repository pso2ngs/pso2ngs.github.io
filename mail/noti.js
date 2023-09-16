window.addEventListener('load', () => {
  document.onclick = () => {
    const ww = new Worker('mail.js');
    ww.postMessage('死ね');
  }
});
