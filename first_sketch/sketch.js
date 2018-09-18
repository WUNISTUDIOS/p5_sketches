var a = 0.0;
var s = 0.0;

 function setup(){
 	createCanvas(900, 900);
 	noStroke();

 }


 function draw() {
 	background(0);

 	a = a + 0.01;
 	s = s + 0.01;



 	// blue circle
 	translate(width/2, height/2);
 	scale(a);
 	fill(0,0,255);
 	ellipse(0,0,100,100);

 	//yellow circle
 	translate(90,0,50,0);
 	fill(255,255,0);
 	scale(a);
 	ellipse(-50,0,60,20);

 		//red circle
 	fill(255,0,0);
 	ellipse(-20,0,20,20);

 	//blue rect
 	fill(255,255,0);
 	rect(-20,0,200,10);

 	 	//blue down rect
 	fill(0,0,255);
 	rect(-20,0,10,200);


 	// black rectangle
 	translate(-300,0,0,0);
 	fill(0);
 	scale(a);
 	rect(0,0,1000,1);










 }  		


//setTimeout(gosomewherelellse)
//the a function gosomewhereelse(){
//	window.location = "gohere.com"
//}
//instal the p5 dom