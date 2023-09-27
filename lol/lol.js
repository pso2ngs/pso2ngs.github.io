var canvas, hx, hy, hw, hh, hlarge, hlayer, hilong, hstart, hpb, x, y, large, hfps, hlong, layer, ilong, start, hinsert, hpb;
onload = () => {
  x = y = large = layer = ilong = start = [];
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
    canvas.width = hw.value + 'px';
  }
  hh.onchange = () => {
    canvas.height = hh.value + 'px';
  }
  hw.value = '900';
  hh.value = '1600';
  hfps.value = '40';
  hlong.value = '10';
  hpb.min = '0';
  hpb.max = String(Number(hlong.value) * Number(hfps.value));
  hpb.value = '0';
  hinsert.onchange = fil => {
    x.push(0);
    y.push(0);
    large.push(Number(hw.value));
    layer.push(layer.length);
    ilong.push(Number(hfps.value) * 5);
  }
}
