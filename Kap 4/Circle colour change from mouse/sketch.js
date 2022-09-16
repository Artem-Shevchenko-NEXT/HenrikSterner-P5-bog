let w = window.innerWidth;
let h = window.innerHeight;  

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(220);
  ellipse(w/2,h/2,100,100);

  if(/*mouseY  > ( 720,330) && mouseY < ( 720,430) || */mouseX < 820 && mouseX > 720){
    fill(random(0,255,),random(0,255,),random(0,255,));
  }
  let leftWall = 720;
  let rightWall = 820;
  stroke(150);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

}
    
    
