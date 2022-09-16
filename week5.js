/*
    Paste the code for your week 5 exercise below.
*/
/* 
 MY ANNIMATED DESIGN - RAINBOW SQUARES 
 ASSIGNMENT 1 
 "PROCEDURALTHINKING"
 */
let y = 0;
let x = 50;
let z = 100;
let a = 150;
let b = 200;
let c = 250;

function setup() {
  createCanvas(300, 300);
  frameRate(50);

  hw = width / 2;
  hh = height / 2;

  background(0);
  if (windowHeight > windowWidth) createCanvas(windowheight, windowwidth);
}

function draw() {
  background(0);

  //1st line of squares

  //1
  rect(2, y, 25);
  fill(255, 102, 0);

  //2
  rect(32, y, 25);
  fill(255, 163, 26);
  //3
  rect(62, y, 25);
  fill(255, 219, 77);
  //4
  rect(92, y, 25);
  fill(112, 219, 112);
  //5
  rect(122, y, 25);
  fill(0, 230, 184);
  //6
  rect(152, y, 25);
  fill(0, 191, 255);
  //7
  rect(182, y, 25);
  fill(102, 153, 255);
  //8
  rect(212, y, 25);
  fill(136, 77, 255);
  //9
  rect(242, y, 25);
  fill(255, 0, 128);
  //10
  rect(272, y, 25);
  fill(225, 0, 0);

  //2nd line of squares

  //1

  rect(2, x, 25);
  fill(255, 102, 0);
  //2
  rect(32, x, 25);
  fill(255, 163, 26);
  //3
  rect(62, x, 25);
  fill(255, 219, 77);
  //4
  rect(92, x, 25);
  fill(112, 219, 112);
  //5
  rect(122, x, 25);
  fill(0, 230, 184);
  //6
  rect(152, x, 25);
  fill(0, 191, 255);
  //7
  rect(182, x, 25);
  fill(102, 153, 255);
  //8
  rect(212, x, 25);
  fill(136, 77, 255);
  //9
  rect(242, x, 25);
  fill(255, 0, 128);
  //10
  rect(272, x, 25);
  fill(225, 0, 0);

  // 3rd line of squares

  //1
  rect(2, z, 25);
  fill(255, 102, 0);
  //2
  rect(32, z, 25);
  fill(255, 163, 26);
  //3
  rect(62, z, 25);
  fill(255, 219, 77);
  //4
  rect(92, z, 25);
  fill(112, 219, 112);
  //5
  rect(122, z, 25);
  fill(0, 230, 184);
  //6
  rect(152, z, 25);
  fill(0, 191, 255);
  //7
  rect(182, z, 25);
  fill(102, 153, 255);
  //8
  rect(212, z, 25);
  fill(136, 77, 255);
  //9
  rect(242, z, 25);
  fill(255, 0, 128);
  //10
  rect(272, z, 25);
  fill(225, 0, 0);

  //fourth line of squares

  //1

  rect(2, a, 25);
  fill(255, 102, 0);
  //2
  rect(32, a, 25);
  fill(255, 163, 26);
  //3
  rect(62, a, 25);
  fill(255, 219, 77);
  //4
  rect(92, a, 25);
  fill(112, 219, 112);
  //5
  rect(122, a, 25);
  fill(0, 230, 184);
  //6
  rect(152, a, 25);
  fill(0, 191, 255);
  //7
  rect(182, a, 25);
  fill(102, 153, 255);
  //8
  rect(212, a, 25);
  fill(136, 77, 255);
  //9
  rect(242, a, 25);
  fill(255, 0, 128);
  //10
  rect(272, a, 25);
  fill(225, 0, 0);

  // 5th line of squares
  //1
  rect(2, b, 25);
  fill(255, 102, 0);

  //2
  rect(32, b, 25);
  fill(255, 163, 26);
  //3
  rect(62, b, 25);
  fill(255, 219, 77);
  //4
  rect(92, b, 25);
  fill(112, 219, 112);
  //5
  rect(122, b, 25);
  fill(0, 230, 184);
  //6
  rect(152, b, 25);
  fill(0, 191, 255);
  //7
  rect(182, b, 25);
  fill(102, 153, 255);
  //8
  rect(212, b, 25);
  fill(136, 77, 255);
  //9
  rect(242, b, 25);
  fill(255, 0, 128);
  //10
  rect(272, b, 25);
  fill(225, 0, 0);

  // 6th line of squares

  //1
  rect(2, c, 25);
  fill(255, 102, 0);

  //2
  rect(32, c, 25);
  fill(255, 163, 26);
  //3
  rect(62, c, 25);
  fill(255, 219, 77);
  //4
  rect(92, c, 25);
  fill(112, 219, 112);
  //5
  rect(122, c, 25);
  fill(0, 230, 184);
  //6
  rect(152, c, 25);
  fill(0, 191, 255);
  //7
  rect(182, c, 25);
  fill(102, 153, 255);
  //8
  rect(212, c, 25);
  fill(136, 77, 255);
  //9
  rect(242, c, 25);
  fill(255, 0, 128);
  //10
  rect(272, c, 25);
  fill(225, 0, 0);

  
  x++;

  if (x > height) {
    x = 0;
  }

  y++;

  if (y > height) {
    y = 0;
  }

  z++;

  if (z > height) {
    z = 0;
  }
  a++;

  if (a > height) {
    a = 0;
  }
  b++;

  if (b > height) {
    b = 0;
  }
  c++;

  if (c > height) {
    c = 0;
  }
}
