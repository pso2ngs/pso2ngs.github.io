var room;
onload = () => {
  document.querySelector('button').onclick = () => {
    if(document.querySelector('#cre').value != '') {
    } else if(document.querySelector('#ent').value != '') {
    } else {
      alert('ルーム名を入力してください');
    }
}
