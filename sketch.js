function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill();
}
function draw() {
  background(128, 0, 64);
  ellipse(50,50,50,50);
if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
}
}