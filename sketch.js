
var START = 1;
var LEVEL1 = 2;
var LEVEL2 = 3;
var END1 = 0;
var END2 = 4;
var gameState = START;

var gun,Gunimg;
var bullet,bulletImg;
var bg,bgImg;
var alien,alienImg;
var human,humanIMAGE1;
var score =  0;
var lifetime = 100;
var gameOver,gameOverImg;
var tryAgain,tryAgainImg;
var gunSound,Lasersound,Oversound;
var alienship1,alienship2,alienship3,alienshipImg;
var laser,laserImg;
var beam1,beam2,beam3,beamImg
var spaceShip,spaceShipImg;
var bg1,bg1Img;
var bg2Img;
var Alienplanet,AlienplanetImg;

function preload(){

  bgImg = loadImage("back Ground.jpg");
  bulletImg = loadImage("bullet.png");
   Gunimg = loadImage("Gun.png");
   alienImg = loadImage("alien.png");
   humanIMAGE1 = loadImage("human4.png");
   gameOverImg = loadImage("gameover.jpg");
   tryAgainImg = loadImage("tryagain.png");
   gunSound = loadSound ("GunShot.mp3");
  alienshipImg = loadImage("allienship.png");
  laserImg = loadImage("laserlight.png");
  beamImg = loadImage("laserbeam.png");
  spaceShipImg = loadImage("spaceship.png");
  AlienplanetImg = loadImage("alienplanet.png");
bg1Img = loadImage("bgl2.jpg");
  bg2Img = loadImage("backgroundalien.jpg");
  Lasersound = loadSound ("Laser.mp3");
  Oversound = loadSound("gameover.mp3");
}





function setup() {
  createCanvas(1200,600);

  bg = createSprite(600,200);
  bg.addImage("backGround",bgImg);
  bg.scale = 1.5;
 bg.velocityX = -2;
 bg.x = bg.width/2;

  gun = createSprite(130,250,40,40);
  gun.addImage("Gun",Gunimg);
  gun.scale = 0.4;

  bg1 = createSprite(600,200);
 bg1.addImage("bgl2",bg1Img);
bg1.scale = 1.5;
bg1.velocityX = -2;
 bg1.x = bg1.width/2;

 spaceShip = createSprite(130,250,40,40);
 spaceShip.addImage("spaceship",spaceShipImg);
 spaceShip.scale = 0.4;

 Alienplanet = createSprite(1050,300,60,60);
 Alienplanet.addImage("alienplanet",AlienplanetImg);
 Alienplanet.scale = 0.6;

 gameOver = createSprite(600,100,20,20);
 tryAgain = createSprite(580,250,20,20);

 gameOver.addImage("gameover",gameOverImg);
  tryAgain.addImage("tryagain",tryAgainImg);
  
  gameOver.scale = 0.6;
  tryAgain.scale = 0.6;

  gameOver.visible = false;
  tryAgain.visible = false;

  BulletsGroup = new Group();
  aliensGroup = new Group();
  humansGroup = new Group();
  AlienShipsGroup = new Group();
  LasersGroup = new Group();
  BeamsGroup = new Group();
 score = 0;

 spaceShip.setCollider("rectangle",0,0,400,340);
//spaceShip.debug = true;

Alienplanet.setCollider("rectangle",40,0,180,340);
//Alienplanet.debug = true;


}

function draw() {
  background("orange");  
  drawSprites ();


  if(gameState ===   START){
    background(bg2Img); 

    textSize(60);
   fill("#F4AC14");
   textFont('Algerian');
   text("ALIEN INVASION",400,50);
   
    textSize(55);
  stroke("#E12027");
    fill("#D80503");
   textFont('Microsoft Himalaya');
   text("Instructions for Level1:-",100,120);
   
   textSize(38);
   fill("#EC8889");
   textStyle(BOLD);
   textFont('Vijaya');
   text("1.'Left Click' the Mouse to shoot the alien. ",240,160);

   textSize(38);
   fill("#EC8889");
   textStyle(BOLD);
   textFont('Vijaya');
   text("2.Do not shoot the Humans. ",240,200);
   
   textSize(38);
   fill("#EC8889");
   textFont('Vijaya');
   textStyle(BOLD);
   text("3.If your score is 1000.You can move to level2. ",240,240);
   
   textSize(38);
   fill("#EC8889");
   textStyle(BOLD);
   textFont('Vijaya');
   text("4.If your lifetime is 0 then the game is over.  ",240,280);
   
   textSize(38);
   fill("#EC8889");
   textFont('Vijaya');
   text("5.Press 'Enter' to start the game. ",240,320);
   
        if(keyDown("ENTER")){
          gameState = LEVEL1;
        }
    }

if(gameState ===  LEVEL1){

 spaceShip.visible = false; 
  bg1.visible = false;
  Alienplanet.visible = false;
  gameOver.visible = false;
  tryAgain.visible = false;

  if(bg.x < 0){
    bg.x = bg.width/2;
       }
   
     gun.y = World.mouseY;

     if (mouseIsPressed) {
      if (mouseButton === LEFT) {
        createBullet();
        gunSound.play();
      }
    }

  if(BulletsGroup.isTouching(aliensGroup)){
    score = score + 50;
    aliensGroup.destroyEach();
    BulletsGroup.destroyEach() ;
    
  }

  if(BulletsGroup.isTouching(humansGroup)){
    lifetime = lifetime - 5;
    humansGroup.destroyEach();
    BulletsGroup.destroyEach() ;
  
  }

 
     aliens();
     Humans();
   
    
     if(score === 100) {
       background(0);
     textSize(80);
      textFont("Monotype Corsiva");
      fill("#DB193E");
      text("You Win",420,150);

      textSize(55);
      stroke("#E12027");
        fill("#D80503");
       textFont('Microsoft Himalaya');
       text("Instructions for Level2:-",250,200);

       textSize(38);
       fill("#EC8889");
       textStyle(BOLD);
       textFont('Vijaya');
       text("1.'Left Click' the Mouse to shoot the AlienShip. ",340,240);  
       
       textSize(38);
       fill("#EC8889");
       textStyle(BOLD);
       textFont('Vijaya');
       text("2.If your lifetime is 0 then the game is over.  ",340,275);
       
       textSize(38);
       fill("#EC8889");
       textFont('Vijaya');
       text("3.Press 'Enter' to start the Level2. ",340,305);
  
   if(keyDown("Enter")){
     score = 0;
     lifetime = 100;
    gameState = LEVEL2;
    }
   }

     textSize(40);
     textFont("Microsoft Himalaya");
     fill("#F3E51E");
   text("Score:"+score,1000,30)

   textSize(40);
   textFont("Microsoft Himalaya");
   fill("#ED8B38");
   text("LifeTime:"+lifetime,1000,60)

   if(lifetime === 0){
    gameState = END1;
    Oversound.play();
     }
}

 if(gameState === LEVEL2){

 gun.visible = false;
 bg.visible = false;
  bg1.visible = true;
  spaceShip.visible = true;
Alienplanet.visible = true;
  gameOver.visible = false;
 tryAgain.visible = false;


  if(bg1.x < 0){
    bg1.x = bg1.width/2;
  }

  spaceShip.y = World.mouseY;

  
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      Laserlight();
    Lasersound.play();
    }
  }


 

  if(LasersGroup.isTouching(AlienShipsGroup)){
    score = score + 50
    AlienShipsGroup.destroyEach();
    LasersGroup.destroyEach() ;
  }

  if(BeamsGroup.isTouching(spaceShip)){
    lifetime = lifetime - 5;
    BeamsGroup.destroyEach();
  }

  AlienShip()
 
  if(score === 2000) {
    background(0);
  textSize(80);
   textFont("Monotype Corsiva");
   fill("#DB193E");
   text("You Win",500,250);
  
  textSize(80);
  textStyle(BOLD);
   textFont("Monotype Corsiva");
  fill("#DB193E");
  textStyle(BOLD);
   text("Congratulations",400,350);

}


  textSize(40);
  textFont("Microsoft Himalaya");
  fill("#F5CF44");
text("Score:"+score,1000,30)

textSize(40);
textFont("Microsoft Himalaya");
fill("#A1C551");
text("LifeTime:"+lifetime,1000,60);


  if(LasersGroup.isTouching(Alienplanet)){
    score = score + 100;
    LasersGroup.destroyEach();
   }

if(lifetime === 0){
  Oversound.play();
  gameState = END2;
   }
}

if(gameState === END1){
  
  bg.velocityX = 0;
  gun.visible = false;

gameOver.visible = true;
tryAgain.visible = true; 

 if(mousePressedOver(tryAgain)){
    TryAgain();
  }
  }

  if(gameState === END2){
  
    bg1.velocityX = 0;
    spaceShip.visible = false;
    Alienplanet.visible = false;
  
  gameOver.visible = true;
  tryAgain.visible = true; 
  
   if(mousePressedOver(tryAgain)){
      TryAgain();
    }
    }
}


function createBullet(){
  bullet = createSprite(280,150,3,13); 
  bullet.scale = 0.06;
   bullet.addImage("bullet",bulletImg);
  bullet.velocityX = 10;
  bullet.y = gun.y;
  bullet.lifetime = 65;
  BulletsGroup.add(bullet);
      }

function aliens(){
  if(frameCount % 50 === 0){
    alien = createSprite(1000,random(50,400),40,40);
    alien.addImage("alien",alienImg);
    alien.scale = 0.3;
    alien.y = Math.round(random(20,400));
    alien.lifetime = 60;  
      alien.velocityX = -10;
      aliensGroup.add(alien);
       }
}

function Humans(){
  if(frameCount % 80 === 0){
    human = createSprite(1000,random(50,400),60,60);
    human.addImage("human4",humanIMAGE1);
    human.scale = 0.16;
    human.y = Math.round(random(20,400));
    human.lifetime = 65;  
    human.velocityX = -10;
    humansGroup.add(human);
       }
}

function AlienShip(){
  if(frameCount % 100 === 0){
    alienship1 = createSprite(900,300,40,40);
    alienship1.addImage("allienship",alienshipImg);
    alienship1.scale = 0.3;
    alienship1.lifetime = 75;
    alienship1.setCollider("rectangle",0,0,50,70);
   // alienship1.debug = true;

    alienship2 = createSprite(900,500,40,40);
    alienship2.addImage("allienship",alienshipImg);
    alienship2.scale = 0.3;
    alienship2.lifetime = 75;
   alienship2.setCollider("rectangle",0,0,50,70);
   alienship2.debug = true;

    alienship3 = createSprite(900,100,40,40);
    alienship3.addImage("allienship",alienshipImg);
    alienship3.scale = 0.3;
    alienship3.lifetime = 75;
    alienship3.setCollider("rectangle",0,0,50,70);
    // alienship3.debug = true;

      AlienShipsGroup.add(alienship1,alienship2,alienship3);

      beam1 = createSprite(850,300,3,13); 
  beam1.scale = 0.2;
  beam1.addImage("laserbeam",beamImg);
  beam1.velocityX = -10;
 beam1.lifetime = 65;
 beam1.setCollider("rectangle",0,0,700,50);

beam2 = createSprite(850,500,3,13); 
  beam2.scale = 0.2;
  beam2.addImage("laserbeam",beamImg);
  beam2.velocityX = -10;
 beam2.lifetime = 65;
 beam2.setCollider("rectangle",0,0,700,50);

 beam3 = createSprite(850,100,3,13); 
  beam3.scale = 0.2;
  beam3.addImage("laserbeam",beamImg);
  beam3.velocityX = -10;
 beam3.lifetime = 65;
 beam3.setCollider("rectangle",0,0,700,50);

  BeamsGroup.add(beam1,beam2,beam3);
       }
}

function Laserlight(){
  laser = createSprite(280,150,3,13); 
  laser.scale = 0.2;
  laser.addImage("laserlight",laserImg);
  laser.velocityX = 10;
 laser.y = spaceShip.y;
  laser.lifetime = 70;
  LasersGroup.add(laser);
}




function TryAgain(){
  gameState = START;
 
    score = 0;
lifetime = 100;

bg.visible = true;
bg.velocityX = -2;
gun.visible = true;

  gameOver.visible = false;
tryAgain.visible = false;

}

