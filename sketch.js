var player, ground;
var playerIm, buttonIm, roomIm, platformIm;
var platformG, stillness; 
var platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9, platform10;

function preload(){
   roomIm = loadImage("My Game Images/room.jpg");
   platformIm = loadImage("My Game Images/bigPlatform.png");
   playerIm = loadImage("My Game Images/player.png");
   buttonIM = loadImage("My Game Images/button.png");
}

function setup() {
  createCanvas(800,800);
  
   //Person
   player = createSprite(200,710,40,100);
   player.addImage(playerIm); 

   //Ground
   ground = createSprite(200,710,1500,50);
   ground.visible = false;
  
   var x = 540;
   var y = 100;

   //Group of Platforms
   platformG = new Group();
   
  for(var i=0;i<20;i+=1){
    platform = createSprite(x, y, 120,20);
    platform.addImage(platformIm);
    platform.scale = 0.2;

    if(x<=550 && y<=750) {
      x +=150;
      y+=25;
    }
    else if(x>=550 && y>=750){
      x -=400;
      y -=25;
    }
    else if (x>=550 && y<=750){
      x-=500;
      y+=25;
    }
    else {
      y -=25;
      x+=200;
    }
    platformG.add(platform);
  }

  }


function draw() {
  background(roomIm);

  console.log(player.y)

  //Gravity
  player.collide(ground);
  player.collide(platformG);
  player.velocityY += 2;
  
  //KeyFunction
  if(keyDown("LEFT_ARROW")){
    player.x += -5;
  }
  if(keyDown("RIGHT_ARROW")){
    player.x += 5;
  }

  if(keyDown("space")&&player.y>=629){
    player.velocityY = -21;
  }
   
  drawSprites();
}

