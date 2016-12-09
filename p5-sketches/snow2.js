 
// save this file as sketch.js
// Sketch One
// var s = function( p ) { // p could be any variable name
//   var x = 100; 
//   var y = 100;
//   p.setup = function() {
//     p.createCanvas(400, 200);
//   };

//   p.draw = function() {
//     p.background(0);
//     p.fill(255);
//     p.rect(x,y,50,50);
//   };
// };
// var myp5 = new p5(s, 'c1');

var snow2 = function(p){
  

  // var x = 100.0; 
  // var y = 100; 
  // var speed = 2.5; 
  // p.setup = function() {
  //   p.createCanvas(400, 200);
  // };

  // p.draw = function() {
  //   p.background(100);
  //   p.fill(1);
  //   x += speed; 
  //   if(x > p.width){
  //     x = 0; 
  //   }
  //   p.ellipse(x,y,50,50);
  // };





  var snow = [];
  var number_of_flakes = 150;

  p.setup = function() {
    p.createCanvas(400, 200);

    for (var i = 0; i < number_of_flakes; i++){
      snow[i] = new Jitter();
    }
  };


  // function setup() {
  //   var canvas2 = createCanvas(300, 300);
  //   //canvas2.parent("canvas2");
  //   // Create object
    // for (var i = 0; i < number_of_flakes; i++){
    //   snow[i] = new Jitter();
    // }
  // }

  p.draw = function() {
    p.background(255);
    for (var i = 0; i < number_of_flakes; i++){
      snow[i].move();
      snow[i].display();
      snow[i].bringUp();
    }
  };

  // function draw() {
  //   background(255);
    // for (var i = 0; i < number_of_flakes; i++){
    //   snow[i].move();
    //   snow[i].display();
    //   snow[i].bringUp();
    // }
  // }


  this.Jitter = function(){
    this.x = random(width);
    this.y = random(height);
    this.speed = 1;
    //rgb values
    this.r = random(100,255);
    this.g = random(40,80);
    this.b = random(75,255);

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
  }
  // // Jitter class
  // function Jitter() {
  //   this.x = random(width);
  //   this.y = random(height);
  //   this.speed = 1;
  //   //rgb values
  //   this.r = random(100,255);
  //   this.g = random(40,80);
  //   this.b = random(75,255);

  //   this.move = function() {
  //     this.x += random(-this.speed, this.speed);
  //     this.y += random(-this.speed, this.speed* random(1, 10));
  //   };

  //   this.display = function() {
  //     stroke(255);
  //     strokeWeight(0);
  //     //making Shape
  //     rect(this.x,this.y,3,30);
  //   }

  //   this.bringUp = function() {
  //     fill(this.r,this.g,this.b);
  //     //X Axis
  //     if (this.x > width){
  //     this.x=0;
  //     }
  //     else if (this.x < 0){
  //     this.x=width;
  //     }
  //     //Y Axis
  //     if (this.y > height){
  //     this.y = 0;
  //     }
  //   }
  // }
};
var myp5 = new p5(snow2, 'canvas2');


