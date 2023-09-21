var canvas, hx, hy, hw, hh, hlarge, hlayer, hilong, hstart, x, y, large, fps, long, layer, ilong, start, insert;
onload = () => {
  x = y = w = h = large = layer = ilong = start = [];
  canvas = document.querySelector('canvas');
  hx = document.querySelector('#x');
  hy = document.querySelector('#y');
  hw = document.querySelector('#w');
  hh = document.querySelector('#h');
  hlarge = document.querySelector('#large');
  hlayer = document.querySelector('#layer');
  hilong = document.querySelector('#ilong');
  hstart = document.querySelector('#start');
  fps = document.querySelector('#fps');
  long = document.querySelector('#long');
  insert = document.querySelector('#insert');
  hw.onchange = () => {
    canvas.width = hw.value;
  }
  hh.onchange = () => {
    canvas.height = hh.value;
  }
  x.push(0);
  y.push(0);
  large.push(Number(hw.value));
  layer.push(layer.length);
  ilong.push(Number(fps.value) * Number(long.value));
  hw.value = '900px';
  hy.value = '1600px';
  insert.onchange = fil => {
  }
}
