function setup() {
  createCanvas(400, 400);

  let i = 0;
  while (i < 100) {
    if (i % 2 !== 0) {
      let x = random(400);
      let y = random(400);
      let r = random(100);
      fill(255);
      circle(x, y, r);
      fill(0, 0, 255);
      text(i, x, y);
    }

    i = i + 1;
  }
}
