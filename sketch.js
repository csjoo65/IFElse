function setup() {
  createCanvas(640, 480);
  background(121,181, 255);
  noFill();
}
function draw() {
  background(121,181, 255);
  fill(255,30,76)
  
  {fill (0,0,0);
  ellipse(200,200,100,100); 
  ellipse(400,200,100,100);}
  
   {fill(255,30,76);
    stroke(255,30,76);
  ellipse(300,300,50,50);}

if (mouseX < 100) {
fill(255,255,255);
  ellipse(50, 200, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 200, 100, 100);
} else if (mouseX < 300){
  ellipse(250, 200, 100, 100);
} else if (mouseX < 400){
  ellipse(350, 200, 100, 100);
} else if (mouseX < 500){
  ellipse(450, 200, 100, 100);
} else {
  ellipse(550, 200, 100, 100);
}
}
