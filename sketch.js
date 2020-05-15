var squashBall,squashBallImage
var paddle, paddleImage
function preload() {
  squashBallImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
squashBall = createSprite(50, 200, 30, 30);
squashBall.addImage("Ball", squashBallImage);
squashBall.velocityX = 9;
squashBall.velocityY = 7;
  
paddle = createSprite(360, 200, 50, 50);
paddle.addImage("myPaddle", paddleImage);
}


function draw() {
  background(180);
  

if (squashBall.x <= 0 ){
 //   squashBall.velocityY = random(-6, 6)
    squashBall.velocityX = - squashBall.velocityX;
}

  if (squashBall.y <= 0 || squashBall.y >= 400){
//    squashBall.velocityX = random(-6, 6)
    squashBall.velocityY = - squashBall.velocityY;
}
  
  
  
  
  if (keyDown(UP_ARROW) === true)
  {
      paddle.y = paddle.y - 10
  }
  
  if(keyIsDown(DOWN_ARROW))
  {
     paddle.y = paddle.y + 10
  }
  
  
  
  if (squashBall.x + squashBallImage.width / 2 >= 
      paddle.x - paddleImage.width / 2 &&
     (squashBall.y - squashBallImage.height / 2 <= 
      paddle.y + paddleImage.height / 2) && 
     (squashBall.y + squashBallImage.height / 2 >= 
      paddle.y - paddleImage.height / 2)){
    
      squashBall.velocityX = -squashBall.velocityX
  }
  
  
  if(squashBall.x >= 420){
   squashBall.velocityX = 0; 
   squashBall.velocityY = 0; 
  }
  
  drawSprites();
  
}

