addEventListener('message', mess => {
  navigator.serviceWorker.register('mail.js').then(regist => {
  });
  navigator.serviceWorker.ready.then((sw) => {
    sw.showNotification('あべけんはA組の誰かが好きらしい', { body: 'にっこにっこにー\nこれは蝶々でこれは蛾\nここにて当てればカブトムシ\nもう一つつければクワガタ\nにっこにっこにー\nこれは蝶々これは蛾\nここにて当てればカブトムシ\nダメダメ〜これは蛹\nでも蛹はみーんなのもの', image: 'https://pso2ngs.github.io/IMG_1378.jpeg' });
  });
});
