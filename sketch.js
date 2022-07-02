var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var jump

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  
 
  if((keyDown("space"))) {
    ghost.velocityY = -1
    
   } 
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  
  ghost = createSprite(300, 300)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.4
  
}

function draw() {
  background(200);
  drawSprites();
  if(tower.y > 400){
      tower.y = 300
    }
    
    

}

function gerar_porta() {
  if(frameCount%60===0) {
  door = createSprite(random(50, 350), -10)
  door.addImage("door",doorImg)
  door.scale = 0.5
  door.velocityY = -1.5
}
}