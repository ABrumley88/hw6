var sizes = [40, 70, 90, 30, 60, 25, 99, 20, 14, 26];

function setup() {

  createCanvas(1000, 1000);
	noStroke();
	background(255);

  for (var i = 0; i < sizes.length; i += 1) {
    fill((random(255)), 11, 150, 200, sizes[i]);
      ellipse(50 + i * 100, height / 2, sizes[i], sizes[i]);
  }
}
