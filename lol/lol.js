var canvas, hx, hy, hw, hh, hlarge, hlayer, hilong, hstart, hpb, x, y, large, hfps, hlong, layer, ilong, start, hinsert, hpb;
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
  hfps = document.querySelector('#fps');
  hlong = document.querySelector('#long');
  hinsert = document.querySelector('#insert');
  hpb = document.querySelector('#pb');
  hw.onchange = () => {
    canvas.width = hw.value;
  }
  hh.onchange = () => {
    canvas.height = hh.value;
  }
  hw.value = '900px';
  hy.value = '1600px';
  hfps.value = 40;
  hlong.value = 10;
  hpb.value = Number(hlong.value) * Number(hfps.value);
  hinsert.onchange = fil => {
    x.push(0);
    y.push(0);
    large.push(Number(hw.value));
    layer.push(layer.length);
    ilong.push(Number(hfps.value) * Number(hlong.value));
  }
}
