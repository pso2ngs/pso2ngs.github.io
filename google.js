onload = () => {
  document.onclick = () => {
    location.href = 'https://plnkr.co/edit';
  }
  setTimeout(() => {
    location.href = 'https://www.google.com/';
  }, 5000);
}
