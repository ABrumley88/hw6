var sizes = [40, 70, 90, 30, 60, 150, 23, 54, 52, 90];

function setup() {

  createCanvas(1200, 400);
  noStroke();
  background(0);

  for (var i = 0; i < sizes.length; i += 1) {
    fill((random(150)), 50, 100, 200, sizes[i]);
    ellipse(50 + i * 100, height / 2, sizes[i], sizes[i]);
  }
  function draw() {
	ellipse(50 + i * 100, height / 2, sizes[i], sizes[i]);

  }
}
