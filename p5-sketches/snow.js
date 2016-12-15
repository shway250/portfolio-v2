// var snow = [];
// var number_of_flakes = 150;

// function setup() {
//   var canvas1 = createCanvas(300, 300);
//   canvas1.parent("canvas1");
//   // Create object
//   for (var i = 0; i < number_of_flakes; i++){
//     snow[i] = new Jitter();
//   }
// }

// function draw() {
//   background(255);
//   for (var i = 0; i < number_of_flakes; i++){
//     snow[i].move();
//     snow[i].display();
//     snow[i].bringUp();
//   }
// }

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.speed = 1;
  //rgb values
  this.r = random(0,100);
  this.g = random(0,100);
  this.b = random(0,255);

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed* random(1, 10));
  };

  this.display = function() {
    stroke(255);
    strokeWeight(0);
    //making Shape
    rect(this.x,this.y,3,30);
  }

  this.bringUp = function() {
    fill(this.r,this.g,this.b);
    //X Axis
    if (this.x > width){
    this.x=0;
    }
    else if (this.x < 0){
    this.x=width;
    }
    //Y Axis
    if (this.y > height){
    this.y = 0;
    }
  }
};

////////////////=====================\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//ABOVE IS WORKING GLOBAL MODE CODE! BELOW I'M GOING TO CONVERT IT TO INSTANCE MODE!!!!


var sketch1 = function(p) {
  var snow = [];
  var number_of_flakes = 150;

  p.setup = function() {
    var canvas1 = p.createCanvas(400, 600);
    canvas1.parent("canvas1");
    for (var i = 0; i < number_of_flakes; i++){
      snow[i] = new p.Jitter();
    }
    
  }
  p.draw = function() {
    // p.background(255);
    // p.fill(255, 0, 200, 25);
    // p.noStroke();
    // p.ellipse(p.x, p.y, 48, 48);

    // p.x = p.x + p.random(-10, 10);
    // p.y = p.y + p.random(-10, 10)

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

function resetBackground() {
  myp5_1.x = myp5_1.width/2;
  myp5_1.y = myp5_1.height/2;
  myp5_1.background(51);
}


// var sketch1 = function(p) {
//   p.x = 100;
//   p.y = 100;
//   p.setup = function() {
//     var canvas1 = p.createCanvas(200, 200);
//     canvas1.parent("canvas1");
//     p.background(51);
//   }
//   p.draw = function() {
//     p.fill(255, 0, 200, 25);
//     p.noStroke();
//     p.ellipse(p.x, p.y, 48, 48);

//     p.x = p.x + p.random(-10, 10);
//     p.y = p.y + p.random(-10, 10);
//   }
// }


// var myp5_1 = new p5(sketch1);

// function resetBackground() {
//   myp5_1.x = myp5_1.width/2;
//   myp5_1.y = myp5_1.height/2;
//   myp5_1.background(51);
// }

// setInterval(resetBackground, 3000);



