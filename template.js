function doTemplate() {
  var canvasDiv = document.getElementById('template');
  template = document.createElement('canvas');
  width = window.innerWidth-10;
  height = window.innerHeight-20-$('uk-navbar').height();
  template.setAttribute('width', width);
  template.setAttribute('height', height);
  template.setAttribute('id', 'template');
  canvasDiv.appendChild(template);
  if(typeof G_vmlCanvasManager != 'undefined') {
    template = G_vmlCanvasManager.initElement(template);
  }
  ctx = template.getContext('2d');

  scale = 50;
  longLine = 8 * scale;
  shortLine = 3 * scale;

}
var page = -1;

function next() {
  ctx.clearRect(0, 0, template.width, template.height); // Clears the canvas
  page++;
  if (page < 10) {
    horizontalLongLine();
    if (page % 2 == 0) return circle(50, height/2);
    else return circle(50 + longLine, height/2);
  } else if (page < 20) {
    verticalLongLine();
    if (page % 2 == 0) return circle(width/2, 50);
    else return circle(width/2, 50 + longLine);
  } else if (page < 30) {
    horizontalShortLine();
    if (page % 2 == 0) return circle(50, height/4);
    else return circle(50 + shortLine, height/4);
  } else if (page < 40) {
    verticalShortLine();
    if (page % 2 == 0) return circle(width/4, 50);
    else return circle(width/4, 50 + shortLine);
  }
}

function circle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2);
  ctx.closePath()
  ctx.stroke();
  return { x: x, y: y };
}

function horizontalLongLine() {
  ctx.beginPath();
  ctx.moveTo(50, height/2);
  ctx.lineTo(50 + longLine, height/2);
  ctx.strokeStyle = '#2980b9';
  ctx.lineWidth = 5;
  ctx.closePath()
  ctx.stroke();
}

function verticalLongLine() {
  ctx.beginPath();
  ctx.moveTo(width/2, 50);
  ctx.lineTo(width/2, 50 + longLine);
  ctx.strokeStyle = '#2980b9';
  ctx.lineWidth = 5;
  ctx.closePath()
  ctx.stroke();
}

function horizontalShortLine() {
  ctx.beginPath();
  ctx.moveTo(50, height/4);
  ctx.lineTo(50 + shortLine, height/4);
  ctx.strokeStyle = '#2980b9';
  ctx.lineWidth = 5;
  ctx.closePath()
  ctx.stroke();
}

function verticalShortLine() {
  ctx.beginPath();
  ctx.moveTo(width/4, 50);
  ctx.lineTo(width/4, 50 + shortLine);
  ctx.strokeStyle = '#2980b9';
  ctx.lineWidth = 5;
  ctx.closePath()
  ctx.stroke();
}