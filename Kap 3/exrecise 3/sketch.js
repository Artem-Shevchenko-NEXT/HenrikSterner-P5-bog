let x; 
let y; 
let xspeed; 
let yspeed; 
let size;
let w = window.innerWidth;
let h = window.innerHeight;  

function setup() { 
  createCanvas(w, h);
  x = width/2
  y = height/2
  xspeed = -4; 
  yspeed = 0.2*xspeed; 
  size = 20;
} 

function draw() { 
  background(220);
  ellipse(x, y, size, size); 
  x+=xspeed; 
  y+=yspeed; 
  if (x > w-size/2 ){
    console.log("it works")
    
  }

  
}