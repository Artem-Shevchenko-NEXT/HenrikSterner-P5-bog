

function setup() {
  createCanvas(720, 720);
  noFill();
  background(255);
  strokeWeight(2);
  stroke(0, 25);
}

function draw() {
  // en if statment såm cheker om musens venstre knap er trykket 
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(width / 2, height / 2);
    // lave det  figur som blevet tegnet
    var circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
    // lave en variebel som tage muses x position og halvere den
    var radius = mouseX - width / 2;
    var angle = TAU / circleResolution;

    beginShape();
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();

    pop();
  }
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}