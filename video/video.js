// Add your code here

onload = () => {
  var inp = document.querySelector('input');
  var vid = document.querySelector('video');
  inp.onchange = e => {
    vid.src = URL.createObjectURL(e.target.files[0]);
    inp.hidden = true;
    document.onclick = c => {
      if(!document.fullscreenElement) {
        document.body.hidden = false;
        document.body.requestFullscreen();
      } else {
        if(!c.target.closest('video')) {
          if(!vid.hidden) {
            vid.hidden = true;
            vid.pause();
            document.querySelector('img').hidden = false;
          } else {
            document.querySelector('img').hidden = true;
            vid.hidden = false;
          }
        } else {
        }
      }
    }
  }
}
