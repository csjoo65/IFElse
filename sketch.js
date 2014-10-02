function setup() {
  createCanvas(640, 480);
  background(121,181,255);
  noFill();
}
function draw() {
  background(121,181,255);
  ellipse(50,50,50,50);
if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
}
}