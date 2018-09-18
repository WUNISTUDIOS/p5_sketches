var y;
var num = 14;
var a = 0.0;


function setup(){
	createCanvas(900, 900);
	background(0);
	noStroke();
}



function draw(){


from = color(255, 0, 0, 0.3 * 255);

	a = a + 0.01;



	fill(from);
	scale(a);
	y = 0;
	for(var i = 0; i < num/3; i++){
		rect(50, y, 100, 1);
		y+=40;
	}
}