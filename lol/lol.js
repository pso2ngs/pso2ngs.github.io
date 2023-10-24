var canvas, hx, hy, hw, hh, hlarge, hlayer, hilong, hstart, hpb, hfn, hsta, x, y, large, hfps, hlong, layer, ilong, start, hinsert, hpb;
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
  hfn = document.querySelector('#fn');
  hsta = document.querySelector('#sta');
  canvas.width = hw.value;
  canvas.height = hh.value;
  hw.onchange = () => {
    canvas.width = hw.value;
  }
  hh.onchange = () => {
    canvas.height = hh.value;
  }
  hpb.onchange = () => {
    hfn.value = hpb.value;
  }
  hfn.onchange = () => {
    hpb.value = hfn.value;
  }
  hsta.onclick = () => {
    setInterval(() => {
      hpb.value = hpb.value + 1;
    }, 1 / hfps.value);
  }
  hw.value = 900;
  hh.value = 1600;
  hfps.value = 40;
  hlong.value = 10;
  hpb.min = 0;
  hpb.max = hlong.value * hfps.value;
  hpb.value = 0;
  hfn.value = hpb.value;
  hinsert.onchange = fil => {
    x.push(0);
    y.push(0);
    large.push(hw.value);
    layer.push(layer.length);
    ilong.push(hfps.value * 5);
  }
}
