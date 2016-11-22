var square = [];

var col = {
  r: 255,
  g: 0,
  b: 111,
};


function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 10; i++) {

    square[i] = new Square(random(width), random(height), i, i + 20);
  }
}

function draw() {
  background(156, 23, 98);
  col.r = random(0, 255);
  col.g = 0;
  col.b = random(0, 255);
  fill(col.r, col.g, col.b);
  for (var i = 0; i < 10; i++) {
    square[i].drawsquare();
    square[i].move();
    square[i].detectEdge();

    if (square.length > 50) {
      square.splice(0, 1);
    }
  }
}

//my first constructor function

function Square(x, y, speed, size, colors) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.size = size;
  this.colors = colors;

  this.drawsquare = function() {
    noStroke();
    // col.r = random(0, 255);
    // col.g = 0;
    // col.b = random(0, 255);
    // fill =(col.r,col.g,col.b);
    // fill(this.colors = random(100,200,225));
    rect(this.x, this.y, this.size, this.size);

    this.move = function() {
      this.x = this.x + this.speed;
    }
  }
  this.fillsquare = function() {
    
  }

  this.detectEdge = function() {
    if (this.x >= width || this.x <= 0) {
      this.speed = this.speed * -1;
    }
  }
}