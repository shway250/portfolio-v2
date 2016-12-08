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

// // Jitter class
// function Jitter() {
//   this.x = random(width);
//   this.y = random(height);
//   this.speed = 1;
//   //rgb values
//   this.r = random(0,100);
//   this.g = random(0,100);
//   this.b = random(0,255);

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
// };


function setup() {
  var canvas1 = createCanvas(300, 300);
  canvas1.parent("canvas1");
  
}

function draw() {
  background(0);
  
}