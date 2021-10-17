var width = window.innerWidth;
var height = window.innerHeight;
var keyPressed = false;

var first=document.getElementById('first');
 var second=document.getElementById('second');


 //to switch between frontpage and main-game page

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

class Ball{
  constructor(ball_img,x,y)
  {
      this.ballimg = ball_img;
      this.x = x;
      this.y = y;
      this.xVel = 0;
      this.yVel = 0;
      this.yAcc = 1;
      this.scored = false;

  }
  draw()
  {
    
  screen.context.drawImage(this.ballimg, this.x, this.y, 90, 90);
  }
  move()
  {
      this.draw();
      this.x += this.xVel;
      this.y -= this.yVel;
      this.yVel -= this.yAcc;
  }
  reset()
  {
    this.x = 0;
    this.y = 350;
     this.draw();
  }
  goal()
  {
    this.xVel = 0;
  }
}



class Angle{
  constructor(x,y){
    this.x = x;
    this.y =y;
  }
  draw(){
  screen.context.beginPath();
  screen.context.strokeStyle = "green";
  screen.context.lineWidth = 5;
  screen.context.moveTo(2,510);
  screen.context.lineTo(112,510);
  screen.context.stroke();
  screen.context.beginPath();
  screen.context.strokeStyle = "red";
  screen.context.lineWidth = 6;
  screen.context.moveTo(this.x, this.y);
  screen.context.lineTo(55,510);
  screen.context.stroke();
  
  }

   increase()
   {
     this.clear();
     this.draw();
     this.x-=2;
     this.y-=2;
   }
  decrease()
  {
    this.clear();
    this.draw();
    this.x+=2;
    this.y+=2;
  }
  clear(){
      screen.context.clearRect(35,440,200,200);
  }
  reset()
  {
    this.x=112;
    this.y=510;
    this.draw();
  }
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
  //back collision
  if (x+90 > this.backx &&
    y+50  > this.backy &&
    y+50  < this.backy + this.backheight
  ) {
    return 1;
  }
  //hoop front collision
  if (
    x+90  > this.x - this.hooplength - 10 &&
    x+90  < this.x - this.hooplength &&
    y+90  > this.y - 10 &&
    y+90  < this.y + 30
  ) {
    return 1;
  }
  //score
  if (
    ballx > this.x - this.hooplength &&
    ballx < this.x  &&
    bally > this.y - 10 &&
    bally < this.y + 5
  ) {
    return 2;
  }
};
