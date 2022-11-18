function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      let x = random(200);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      text(i, x, y);
    } else {
      let x = random(200, 400);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      text(i, x, y);
    }
  }
}
