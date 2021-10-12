var bCanvas=document.getElementById("backCanvas");
var bctx=bCanvas.getContext("2d");
bCanvas.height=window.innerHeight;
bCanvas.width=window.innerWidth;



function bground(backC, ringC) {
   
      bctx.beginPath();
      bctx.fillStyle='#a4b494';
      bctx.fill();
      bctx.fillStyle = backC;

     

      bctx.fillRect(0, 10, 2000, 380);
     
    
     
    
      bctx.beginPath();
      bctx.translate(bCanvas.width / 1.9, (2 * bCanvas.height) /7); //values 
      bctx.beginPath();
      bctx.fillStyle = ringC;
      bctx.arc(-80,20, 100, 0, 2*Math.PI);
      bctx.lineWidth = 4;
      bctx.fill();
      bctx.stroke();

     

      bctx.moveTo(-80,200);
      bctx.lineTo(-80,-160);
      bctx.lineWidth=4;
      bctx.stroke();

      bctx.beginPath();
      bctx.fillStyle = ringC;
      bctx.arc(-600,20,170,1.5*Math.PI,0.5*Math.PI);
      bctx.lineWidth = 4;
      bctx.fill();
      bctx.stroke();

      bctx.beginPath();
      bctx.fillStyle = ringC;
      bctx.arc(400,20,170,0.5*Math.PI,1.5*Math.PI);
      bctx.lineWidth = 4;
      bctx.fill();
      bctx.stroke();

      bctx.beginPath();
    bctx.fillStyle = ringC;
    bctx.arc(300,10, 50, 0, 2*Math.PI);
    bctx.lineWidth = 4;
    bctx.fill();
    bctx.stroke();

    bctx.beginPath();
    bctx.fillStyle = ringC;
    bctx.arc(-500,10, 50, 0, 2*Math.PI);
    bctx.lineWidth = 4;
    bctx.fill();
    bctx.stroke();


     //draw line through circle
     bctx.moveTo(300, 60);
     bctx.lineTo(300, -40);
     bctx.stroke();


      //draw line through circle
    bctx.moveTo(-500, 60);
    bctx.lineTo(-500, -40);
    bctx.stroke();

    bctx.moveTo(300,60);
    bctx.lineTo(400,60);

    bctx.moveTo(300,-40);
    bctx.lineTo(400,-40);

    bctx.moveTo(-500,60);
    bctx.lineTo(-600,60);

    bctx.moveTo(-500,-40);
    bctx.lineTo(-600,-40);

    bctx.stroke();


//rectangular frame
      bctx.moveTo(400,200);
      bctx.lineTo(400,-160);
      bctx.moveTo(-600,200);
      bctx.lineTo(-600,-160);
      bctx.moveTo(400,200);
      bctx.lineTo(-600,200);
      bctx.moveTo(400,-160);
      bctx.lineTo(-600,-160);
      bctx.lineWidth=4;
      bctx.stroke();


    
     
     

}
  

  bground("#c87941", "#87431d");

  
  function poleground() {
   
    screen.context.beginPath();
    screen.context.fillStyle='#a4b494';
    screen.context.fill();
    screen.context.fillStyle ="red";    
    screen.context.fillRect(1020,170, 170,10);

    screen.context.moveTo(1200,100);
    screen.context.lineTo(1200,550);
    screen.context.lineWidth=25;
    screen.context.stroke();

    screen.context.beginPath();
    screen.context.fillStyle="red";
    screen.context.fillRect(1130,550,170,80);
    screen.context.fill()

    var img = new Image();
  img.onload = function() {
    screen.context.drawImage(img,1020,172,150,150);
  };
  img.src = 'images/net.png';
     }

     var pole = setInterval(poleground,10);
  

      

      