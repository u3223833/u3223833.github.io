/*
    Paste the code for your week 3 exercise below.
*/
var pic;
var bubbles = [],
  totalBubbles = 80;

function preload() {
  pic = loadImage("bubblebath.jpeg");
}

var backgroundColor = " #E91E63";

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(backgroundColor);

  for (var i = 0; i < totalBubbles; i++) {
    bubbles.push({
      x: random(0, width),
      y: height + 200,
      diameter: random(50, 180),
      speed: random(1, 5),
      offset: 0,
      textOpacity: 1,
    });
  }
}

function draw() {
  background(backgroundColor);
  image(pic, 0, 0);
  drawBubble();

  drawBubble();
}

function drawBubble() {
  bubbles.forEach(function (bubble) {
    if (bubble.offset > height + 400) {
      bubble.offset = 0;
    }

    bubble.offset = bubble.offset + bubble.speed;

    if (bubble.popped) {
      fill("#e6ffff");
    } else {
      // Draw bubble.
      fill("rgb(204, 238, 255)");
      stroke("white");
      strokeWeight(1);
      ellipse(
        bubble.x,
        bubble.y - bubble.offset,
        bubble.diameter,
        bubble.diameter
      );

      // Draw shine.
      fill("white");
      ellipse(
        bubble.x + bubble.diameter * 0.2,
        bubble.y - bubble.diameter * 0.25 - bubble.offset,
        bubble.diameter / 8,
        bubble.diameter / 8
      );

      fill("rgb(204, 238, 255)");
      noStroke();
      ellipse(
        bubble.x + bubble.diameter * 0.15,
        bubble.y - bubble.diameter * 0.2 - bubble.offset,
        bubble.diameter / 8,
        bubble.diameter / 8
      );
    }
  });
}

function wasClickInsideBubble(bubble) {
  var bubbleRadius = bubble.diameter / 2;

  if (
    mouseX > bubble.x - bubbleRadius &&
    mouseX < bubble.x + bubbleRadius &&
    mouseY > bubble.y - bubble.offset - bubbleRadius &&
    mouseY < bubble.y - bubble.offset + bubbleRadius
  ) {
    return true;
  } else {
    return false;
  }
}

function mouseClicked() {
  bubbles.forEach(function (bubble) {
    if (wasClickInsideBubble(bubble)) {
      bubble.popped = true;
    }
  });
}
