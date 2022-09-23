//variabler for størlsen af skærmen - window.innerWidth returnerer skærmes brede i pixels den anden føre det samme for højde
let w = window.innerWidth;
let h = window.innerHeight;
// her laver i nogen udifeneret variabler som stor for x og y position af vores mus
let xPos;
let yPos;

let xPosk;
let yPosk;
// her er den udefineret variabel for hastighed af musen
let speed;
// her er den udefineret variabel for hastighed af katten
let speedk;
// a og b variabler stå for retning af musen
let a;
let b;
// a og b variabler stå for retning af katten
let ak;
let bk;
// Den her variabel er muses diameter
let d = 80;
// Den her variabel er kattenes diameter
let dk = 160;
// variabel til timer hvor vi først definere den som 0
let timer = 0;

// funktion for at forudindlæse billidte af musen, katten og musiken så man kan bryge den serner
function preload() {
  sound1 = loadSound("comedian.mp3");
  mus = loadImage("mouse.png");
  kat = loadImage("kat.png");
  cheers = loadSound("cheers.mp3");
  win = loadSound("winning.mp3");
}

// funktion for interval af vores kattenes hastighed speedk. Her definer vi hvor meget øgets speedk og hvor huright
function Interval() {
  if (speed !== 0 && speedk !== 0 && bk !== 0 && ak !== 0) {
    //betyder at speedk stiger med 0.1 hver 15 sekund. når vores funktion gå under draw function betyder der at hver sekund er 60
    speedk += 0.1 / 900;
  }
}

function setup() {
  // ind i vores setup funktion definer vi vores mus variabler og sætter vores skærmen størlsen
  createCanvas(w, h);
  xPos = random(0, width);
  yPos = random(0, height);
  // mus har konstant hastighed på 5
  speed = 5;
  a = speed;
  b = 0;
  // Her defineres vores kat variabler
  xPosk = random(0, width);
  yPosk = random(0, height);
  //Vores kagtens start hasighed er 2
  speedk = 2;
  // Defineres vores kattenes
  ak = random(speedk, -speedk);
  // vi definer bk andeleds fra b fordi vores kat skal også gå skrådt
  bk = random(speedk, -speedk);
  //Her definier vi hvor hurigt vores interval vil sift i milisekunder så 1000 er et sekund

  // setInterval(Interval, 1000);

  frameRate(60);
}

function draw() {
  background(3, 53, 0);
  //Her lave laves vores mus og kat i form af en firkant med vores billide
  image(mus, xPos, yPos, d, d);
  image(kat, xPosk, yPosk, dk, dk);
  //Her laves teksten til vores timer den divideres med 60 fordi 1 sekund i funktion draw er 60
  text(floor(timer / 60), width - 50 * 2, 0 + 50);
  //definer
  fill(255);
  textSize(50);
  // Ved hjalp af den ligning bevæges musen
  xPos += a;
  yPos += b;
  // definer kattenes bevægelse med en ligning
  xPosk += ak * speedk;
  yPosk += bk * speedk;
  //Her kalder vi på alle funktion der forskellige funktioner som vi har
  Interval();
  borderCheck();
  bounce();
  GameOver();
  looper();
  // Her er vores værdi for timer som øges med 60 hvert sekund
  timer++;
}
// Her har vi en funktion som lopper vores musik, det er også den som gøre at vi får en vinde skærm
function looper() {
  //her står der en tre rækker if statments som gå af når timer er lige med det tal
  if (timer == 0 * 60) {
    sound1.play();
  } else if (timer == 127 * 60) {
    sound1.play();
  } else if (timer == 223 * 60) {
    sound1.play();
    //Når timer når precis 4 minuter så stopper den bagrund musiken med sound1.stop() og spiller vores win og cheers sound effekt
  } else if (timer == 240 * 60) {
    sound1.stop();
    cheers.play();
    win.play();
    // Her er vores vinde skærm den kommer op kun når vores timer/ tid erover 4 minutter
  } else if (timer > 240 * 60) {
    //stopper
    //farver skræm ned under lyse grøn
    fill(114, 238, 114);
    // lave et rektangel med størelse af vores skærm
    rect(0, 0, w, h);
    // farve alle det nedenstående text mørk grøn
    fill(3, 53, 0);
    //sætter størlsen for nedenstående tekst
    textSize(100);
    //placere teksten i miden af tekst boksen
    textAlign(CENTER);
    // den første tekst som siger "YOU WIN" placeret i miden af skærm minus 150 fra y aksen så der er plads til flere tekst
    text("YOU WIN", w / 2, h / 2 - 150);
    //sætter størlsen for nedenstående tekst
    textSize(22);
    //placere teksten i miden af tekst boksen
    textAlign(CENTER);
    //Vores andel tekst som siger "Thanks for playing" placeret perfekt i miden af skærm
    text("Thanks for playing", w / 2, h / 2);
  }
}

function borderCheck() {
  /*Her laves rækker if statment som cheker om vores mus gået ud for vores kante
    iden første funktion cheker hvis vores x position  sammn med diametern er større eller lige med vores højeste bredden 
    Og hvis der er sandt så sætter den hastigheden til det negativ værdi som gøre st musen bevage sig i det modsat retning*/
  if (xPos + d >= width) {
    a = -speed;
    b = 0;
  }
  //Her skærre der modsætter, vores if statment cheker om vore x er mindre ller lige med vores mindste bredde værdi.
  //Vis den er det så skifte den hatigheds værdie til det posetiv
  if (xPos <= 0) {
    a = speed;
    b = 0;
  }
  //Her skære det samme som i den første if statment bare med den størster højden
  if (yPos + d >= height) {
    a = 0;
    b = -speed;
  }
  //Her skære det samme som i vores anden if stament bare med den laveste højde
  if (yPos < 0) {
    a = 0;
    b = speed;
  }
}
//Her er vores funktion for kattenes bounce Virker fuldstændig på det sammme måd som boarderchek bare at vi ændre også på vores bk
function bounce() {
  //cheker om vores x position gå ud for vores største bredde værdi og hcis er sandt så sætter bevægelse til det
  //modsat ved at skift til negativ speedk
  if (xPosk + dk / 2 >= width) {
    ak = -speedk;
    bk = random(speedk, -speedk);
  }
  //Er ligsom den sørste if funktion bar med den mindste bredde værdi og gøre speedk posetiv
  if (xPosk + dk / 2 <= 0) {
    ak = speedk;
    bk = random(speedk, -speedk);
  }
  //Her skære det samme som i den første if statment bare med den størster højden
  if (yPosk + dk / 2 >= height) {
    ak = random(speedk, -speedk);
    bk = -speedk;
  }
  //Her skære det samme som i vores anden if stament bare med den laveste højde
  if (yPosk + dk / 2 < 0) {
    ak = random(speedk, -speedk);
    bk = speedk;
  }
}

// Den her funktion gøre at vi kan bevæg vores mus
function keyPressed() {
  // hvis man trykke på ned pil så blive b "speed" posetiv og musen vil går ned
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  // hvis man trykke på op pil så blive b "speed" negativ og musen vil går op
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  // hvis man trykke på venstre pil så blive a "speed" negativ og musen vil gåt til venstre
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  // hvis man trykke på højre pil så blive a "speed" posetiv og musen vil går til højre
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}

// funktion for hvornåt man taber
function GameOver() {
  // if statment ckeker samligner vores kattenes og muset position i forhold til hindand og hvis de positioner er sandt
  //betyder der så at katen og msuen har ramthinanden
  if (
    xPos > xPosk &&
    xPos + d < xPosk + dk &&
    yPos > yPosk &&
    yPos + d < yPosk + dk
  ) {
    //hvis position er det samme så vil den stop katttens og musets på plads
    speed = 0;
    b = 0;
    a = 0;
    speedk = 0;
    bk = 0;
    ak = 0;
  }
  //cheker om katten stå stil og hvis de gjor så får vi vors Game Over skærem
  if (speed == 0 && b == 0 && a == 0 && speedk == 0 && bk == 0 && ak == 0) {
    //farver skræm ned under sort
    fill(0);
    // lave et rektangel med størelse af vores skærm
    rect(0, 0, w, h);
    // farve alle det nedenstående text rød
    fill(227, 101, 91);
    //sætter størlsen for nedenstående tekst
    textSize(100);
    //placere teksten i miden af tekst boksen
    textAlign(CENTER);
    // den første tekst som siger "Game Over" placeret i miden af skærm minus 150 fra y aksen så der er plads til flere tekst
    text("Game Over", w / 2, h / 2 - 150);
    //sætter størlsen for nedenstående tekst
    textSize(22);
    //placere teksten i miden af tekst boksen
    textAlign(CENTER);
    //Vores andel tekst som siger "Refresh to try again" placeret perfekt i miden af skærm
    text("Refresh to try again", w / 2, h / 2);
    4;
    //sætter størlsen for nedenstående tekst
    textSize(20);
    //placere teksten i miden af tekst boksen
    textAlign(CENTER);
    //Vores tredje tekst som siger "Live for 4 minutes to win" placeret i miden af skærm plus 150 fra y aksen så der er plads til flere tekst
    text("Live for 4 minutes to win", w / 2, h / 2 + 50);
  }
}
