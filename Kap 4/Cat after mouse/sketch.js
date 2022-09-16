let w = window.innerWidth;
let h = window.innerHeight;  
let xPos;
let yPos;
let rxPos;
let ryPos;

function setup() {
  createCanvas(w, h);
  xPos = random(width);
  yPos = random(height);  
  rxPos = random(width);
  ryPos = random(height);
}


function draw() {
  background(220);

  ellipse(xPos,yPos, 50, 50);

    if (keyIsDown(LEFT_ARROW)) {
      xPos -= 5;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      xPos += 5;
    }
  
    if (keyIsDown(UP_ARROW)) {
      yPos -= 5;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      yPos += 5;
    }

  rect(rxPos,ryPos, 50, 50);
    if (keyIsDown(65)) {
      rxPos -= 5;
    }
  
    if (keyIsDown(68)) {
      rxPos += 5;
    }
  
    if (keyIsDown(87)) {
      ryPos -= 5;
    }
  
    if (keyIsDown(83)) {
      ryPos += 5;
    }
    
    
  
}
