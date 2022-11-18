//Forklar hvad følgende kode gør:
function setup() {
  let i = 0;
  createCanvas(400, 400);
  //her har man en løkker som lave 100 tilfældig cirkler med tilfældig størrelse og tilfældig stede samet med cirklens nummer
  while (i < 100) {
    let x = random(400);
    let y = random(400);
    let r = random(100);
    circle(x, y, r);
    text(i, x, y);
    i = i + 1;
  }
}
