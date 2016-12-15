

var sketch2 = function(p) {
  p.x = 100;
  p.y = 100;
  p.setup = function() {
    var canvas2 = p.createCanvas(200, 200);
    canvas2.parent("canvas2");
    p.background(51);
  }
  p.draw = function() {
    p.fill(255, 200, 0, 25);
    p.noStroke();
    p.ellipse(p.x, p.y, 48, 48);

    p.x = p.x + p.random(-10, 10);
    p.y = p.y + p.random(-10, 10);
  }
}

var myp5_2 = new p5(sketch2);

