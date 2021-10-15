screen.setup();

var ball;
var imgball = new Image();
imgball.src = "images/ball.png";
imgball.onload = function () {
  ball = new Ball(imgball,0,350);
  ball.draw();
};

var angle = new Angle(112,510);

// mouse position
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
  };
}
//to check whether a point is inside a rectangle
function isInside(pos, rect){
  return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

var canvas = document.getElementById('frontcanvas');
var context = canvas.getContext('2d');
// clickable area
var rectplus = {
  x:5,
  y:530,
  width:50,
  height:50
};
var rectminus={
  x:55,
  y:530,
  width:50,
  height:50
}
// click event 
canvas.addEventListener('click', function(evt) {
  var mousePos = getMousePos(canvas, evt);

  if (isInside(mousePos,rectplus)) {
    angle.increase();
  }else if(isInside(mousePos,rectminus)){
    angle.decrease();
  }   
}, false);


var xHoop = 1190;
var yHoop = 180;
var xTop=1190;
var yTop=98;

var hoop = new Hoop(xHoop, yHoop, 170, xTop, yTop, 80);

var powerMeter;
var power;
var powerbar = document.getElementById("progress");

function pressKey(event) {
  if (event.keyCode == 38 && keyPressed == false && ball.x == ball.xpos) {
    keyPressed = true;
    power = 35;
    powerMeter = setInterval(function () {
      powerbar.innerHTML = power - 34;
      let percentage = (power - 35) * 10;
      powerbar.style.width = 100 - percentage + "%";
      if (power < 45) power += 1;
    }, 200);
  }
}

var shotid;

function releaseKey(event) {
  if (event.keyCode == 38 && keyPressed == true) {
    keyPressed = false;
    clearInterval(powerMeter);
    
    var tan = (560-angle.y)/(angle.x - 39);
    ball.xVel = power * Math.cos(Math.atan(tan));
    ball.yVel = power * Math.sin(Math.atan(tan));

    shotid = setInterval(function () {
      screen.clear();
      
      if (ball.x > width || ball.y > height) {
        ball.reset();
        clearInterval(shotid);
        ball.scored = false;
      } else {
        ball.move();
        var collision = hoop.collide(ball.x, ball.y);
        //score
        if (collision == 2) {
          ball.scored = true;
          score += 1;
      showcomments();
          ball.x = hoop.x - hoop.hooplength / 2 - 45;
          ball.goal();
        }
        if (collision == 1) {
          ball.xVel *= -1;
          ball.xVel -= 4;
        }
        if (collision == 3) {
          ball.xVel *= -1;
          ball.yVel *= -1;
        }
      }
    }, 19);
  }
  angle.reset();
}
var scoretext = document.getElementById("score");
var message = document.getElementById("text");
var score = 0;

function showcomments() {
  scoretext.innerHTML = "score=" + score;
  if (score == 3) {
    message.innerHTML = "Amazing!";
  } else if (score == 5) {
    message.innerHTML = "On fire!";
    document.getElementById("second").style.backgroundColor="#000099";
  } else if (score == 8) {
    message.innerHTML = "Awesome!";
  } else if (score == 10) {
    message.innerHTML = "You Won!!......<br>Returning to HomePage...";
    clearInterval(angleid);
    setTimeout(function(){
  second.style.display="none";
  first.style.display="block";
    },3000);
  }
}