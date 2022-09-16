let w = window.innerWidth;
let h = window.innerHeight;  
let xPos;
let yPos;
let speed;
let a;
let b;
let d = 80;
print("Hello Github")

function preload() {
  img = loadImage('mouse.png');
 }

function setup() {
  createCanvas(w, h);
  xPos = random(0,width);
  yPos = random(0,height);
  speed = 5;
  a = speed;
  b = 0;
}

function draw() {
  background(220);
   
  image(img,xPos,yPos,d,d);
  xPos += a;
  yPos += b;
  borderCheck()
}

function borderCheck() {
  if (xPos + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (xPos - d / 2 <= -10) {
    a = speed;
    b = 0;
  }
  if (yPos + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (yPos - d / 2 < 0) {
    a = 0;
    b = speed;
  }
 }

 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }

