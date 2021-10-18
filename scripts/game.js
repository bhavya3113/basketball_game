screen.setup();

var ball;
var imgball = new Image();
imgball.src = "images/ball.png";
imgball.onload = function () {
  ball = new Ball(imgball,0,350);
  ball.draw();
};

var angle = new Angle(112,510);
angle.draw();

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
var power=35;
var powerbar = document.getElementById("progress");

var display =0;
function pressKey(event) {
    if (event.keyCode == 38 && keyPressed == false ) {
      keyPressed = true;
      powerMeter = setInterval(function () {
        powerbar.innerHTML = display;
        let percentage = display * 10;
        powerbar.style.width = 100 - percentage + "%";
        if (display < 10) {
          display += 1;
        }
      }, 200);
    }
  }

var shotid;

var scoretext = document.getElementById("score");
var score = 0;

function releaseKey(event) {
  if (event.keyCode == 38 && keyPressed == true) {
    keyPressed = false;
    clearInterval(powerMeter);
    
    
    var ang = Math.atan2(510-angle.y,angle.x-55);
    ball.xVel = (power+display)*Math.cos(ang);
    ball.yVel= (power+display)*Math.sin(ang);

    display = 0;

    shotid = setInterval(function () {
      screen.clear();
      
      if (ball.x > width || ball.y > height) {
        ball.reset();
        angle.reset();
        clearInterval(shotid);
      } else {
        ball.move();
        var collision = hoop.collide(ball.x, ball.y);
        //score
        if (collision == 2) {
          ball.scored = true;
          ball.x = hoop.x - hoop.hooplength / 2 - 45;
          ball.goal();
        }
        if (collision == 1) {
          ball.xVel *= -1;
          ball.xVel -= 4;
        }
        if(ball.scored)
        {  score += 1;
         scoretext.innerHTML = "score=" + score;
           ball.scored=false;
           if(score>hs)
           localStorage.setItem("highscore",score);  
        }
      }
    }, 19);
  }
}

var hs =localStorage.getItem('highscore');
document.getElementById("hs").innerHTML=hs;