function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      let x = random(200);
      let y = random(400);
      let r = random(100);
      fill(255);
      circle(x, y, r);
      fill(165, 0, 0);
      text(i, x, y);
    }
  }
}
