var sketch1 = function(p) {
  var snow = [];
  var number_of_flakes = 15;

  p.setup = function() {
    var canvas1 = p.createCanvas(p.windowWidth, p.windowHeight/2);
    canvas1.parent("canvas1");
    for (var i = 0; i < number_of_flakes; i++){
      snow[i] = new p.Jitter();
    }
  }
  p.draw = function() {
    p.background(255);
    for (var i = 0; i < number_of_flakes; i++){
      snow[i].move();
      snow[i].display();
      snow[i].bringUp();
    }
  }
  // Jitter class
  p.Jitter = function() {
    this.x = p.random(p.width);
    this.y = p.random(p.height);
    this.speed = 1;
    //rgb values
    this.r = p.random(0,100);
    this.g = p.random(0,100);
    this.b = p.random(0,255);

    this.move = function() {
      this.x += p.random(-this.speed, this.speed);
      this.y += p.random(-this.speed, this.speed* p.random(1, 10));
    };

    this.display = function() {
      p.stroke(255);
      p.strokeWeight(0);
      //making Shape
      p.rect(this.x,this.y,3,30);
    }

    this.bringUp = function() {
      p.fill(this.r,this.g,this.b);
      //X Axis
      if (this.x > p.width){
      this.x=0;
      }
      else if (this.x < 0){
      this.x = p.width;
      }
      //Y Axis
      if (this.y > p.height){
      this.y = 0;
      }
    }
  };
}

var myp5_1 = new p5(sketch1);