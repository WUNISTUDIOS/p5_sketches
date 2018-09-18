var diameter;
var angle = 0;

function setup(){
  createCanvas(1920,1080);
  diameter = height - 10;
  stroke(255,204,0);
  noFill();
  strokeWeight(2);

}


function draw(){
  background(0);

  var d1 = 10 + (sin(angle) * diameter/2) + diameter/2;
  var d2 = 10 + (sin(angle + PI/4) * diameter/2) + diameter/2;
  var d3 = 1 + (sin(angle) * diameter/8) + diameter/8;
  var d4 = 10 + (cos(angle) * diameter/2) + diameter/2;

  translate(width/2, height/2); 
  ellipse(0, 0, d1, d1);
  stroke(255);
  ellipse(0, 0, d2,d2);
  ellipse(0,0, d3,d3);
  ellipse(0,0, d4,d4);

  angle += 0.01;
}