var width = window.innerWidth;
var height = window.innerHeight;
var keyPressed = false;

var first=document.getElementById('first');
 var second=document.getElementById('second');

function startgame(){
  first.style.display="none";
  second.style.display="block";
  var x = document.getElementById("name").value;
  document.getElementById("username").innerHTML = x;

};
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

Ball.prototype.goal = function () {
  this.xVel = 0;
};


function Angle(x, y) {
  this.x = x;
  this.y = y;
  this.change = 1;
}

Angle.prototype.draw = function () {
  ctx = screen.context;
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.moveTo(0,560);
  ctx.lineTo(78,560);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 6;
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(40,560);
  ctx.stroke();
};

Angle.prototype.update = function () {
  this.clear();
  this.draw();
  this.x += this.change;
  this.y += this.change;
  if (this.y > 530) {
    this.change = -1;
  } 
   else if (this.x < 55) {
    this.change = 1;
  }
};

Angle.prototype.clear = function () {
  screen.context.clearRect(20,458,200,200);
};

function Hoop(x, y, length, backx, backy, backheight) {
  this.x = x;
  this.y = y;
  this.hooplength = length;
  this.backx = backx;
  this.backy = backy;
  this.backheight = backheight;
}
Hoop.prototype.collide = function (x, y) {
  var ballx = x + 45;
  var bally = y + 45;
  //backboard collision
  if (
    x+80 > this.backx &&
    y+45  > this.backy &&
    y+45  < this.backy + this.backheight
  ) {
    return 1;
  }
  //hoop front collision
  if (
    x+50  > this.x - this.hooplength - 10 &&
    x+50  < this.x - this.hooplength + 10 &&
    y+60  > this.y - 10 &&
    y+60  < this.y + 30
  ) {
    return 1;
  }
  //score
  if (
    ballx > this.x - this.hooplength &&
    ballx < this.x + 20 &&
    bally > this.y - 10 &&
    bally < this.y + 10
  ) {
    return 2;
  }
  if (
    x+60  > this.x - 15 &&
    x+60  < this.x + 30 &&
    y+60  > this.y - 30 &&
    y+60 < this.y + 30
  ) {
    return 3;
  } else return 0;
};
