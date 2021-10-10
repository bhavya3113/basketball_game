screen.setup();

var ball;
var imgball = new Image();
imgball.src = "images/ball.png";
imgball.onload = function () {
  ball = new Ball(imgball,0,150);
  ball.draw();
};

var angle = new Angle(85,280);
angle.draw();
var angleid = setInterval(function () {
  angle.update();
}, 30);