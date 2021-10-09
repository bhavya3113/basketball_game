screen.setup();

var ball;
var imgball = new Image();
imgball.src = "/basketball_game/images/ball.png";
imgball.onload = function () {
  ball = new ball(imgball,0,100);
  ball.draw();
};

