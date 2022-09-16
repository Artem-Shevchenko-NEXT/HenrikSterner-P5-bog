
// den eklar to variebler og tildeler dem højden og breden af broweser vindue
let w = window.innerWidth;
let h = window.innerHeight;  

function setup() {
  //gøre så canvas vil føl i størseln med brugens broweser vindue
  createCanvas(w, h);
  background(255);
}

function draw() {
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      fill(random(0,255,),random(0,255,),random(0,255,))
      ellipse(mouseX,mouseY,10,10)
    }
    else if (mouseButton === RIGHT) {
      fill(random(0,255,),random(0,255,),random(0,255,))
       rect(mouseX,mouseY,10,10)
    }
    return false;
  }
  if(keyIsPressed) {
    if (keyCode === 75) {
      fill(random(0,255,),random(0,255,),random(0,255,))
       rect(mouseX,mouseY,10,10)
    }
    else if (keyCode === 67||69) {
      fill(random(0,255,),random(0,255,),random(0,255,))
       ellipse(mouseX,mouseY,10,10)
    }
    return false;

  }
}
