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

function ball(ball_img , x, y)
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

ball.prototype.draw = function () {
  screen.context.drawImage(this.ballimg, this.x, this.y, 100, 100);
};

ball.prototype.move = function () {
  this.draw();
  this.x += this.xVel;
  this.y -= this.yVel;
  this.yVel -= this.yAcc;
};

ball.prototype.reset = function () {
  this.x = this.xpos;
  this.y = this.ypos;
  this.draw();
};

