var width = window.innerWidth;
var height = window.innerHeight;
var keyPressed = false;


var screen = {
  canvas: document.getElementById("frontcanvas"),
  setup: function () {
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function Ball(ball_img , x, y)
{
  this.ballimg = ball_img;
  this.x = x;
  this.y = y;
  this.xVel = 0;
  this.yVel = 0;
  this.yAcc = 1;
  this.xpos = x;
  this.ypos = y;
  this.scored = false;
}

Ball.prototype.draw = function () {
  screen.context.drawImage(this.ballimg, this.x, this.y, 90, 90);
};

Ball.prototype.move = function () {
  this.draw();
  this.x += this.xVel;
  this.y -= this.yVel;
  this.yVel -= this.yAcc;
};

Ball.prototype.reset = function () {
  this.x = this.xpos;
  this.y = this.ypos;
  this.draw();
};
function Angle(x, y) {
  this.x = x;
  this.y = y;
  this.direction = 1;
}

Angle.prototype.draw = function () {
  ctx = screen.context;
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 6;
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(40,320);
  ctx.stroke();
};

Angle.prototype.update = function () {
  this.clear();
  this.draw();
  console.log(this.x,this.y,this.direction);
  this.x -= this.direction;
  this.y -= this.direction;
  if (this.y > 240) {
    this.direction = 1;
  } else if (this.x < 40) {
    this.direction = -1;
  }
};

Angle.prototype.clear = function () {
  screen.context.clearRect(30,240,200,200);
};
