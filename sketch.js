
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 bananaImage=loadImage("banana.png")
}



function setup() {

 monkey=createSprite(40,360,55,45);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  

  
  
  ground =createSprite(150,390,500,10); 


  
}

function draw() {   
background("white")
  
      stroke("balck");
  textSize(20);
fill("black");
  survivalTime=Math.ceil(frameCount/60)
   text("survivalTime: "+ survivalTime, 150,50);
 
  console.log(monkey.y)
  if(keyDown("space")&& monkey.y> 154){
    monkey.velocityY=-13;
  }
 monkey.velocityY=monkey.velocityY+0.8 
monkey.collide(ground)
  
  if(frameCount%100===1){
var banana = createSprite(450,Math.round(random(120,200)), 10, 20);
banana.addImage("banana",bananaImage)
  banana.scale=0.1
     banana.velocityX=-6 
    banana.lifeTime=70

  }
    if(frameCount%350===1){
var obstacle = createSprite(450,Math.round(random(370,370)), 10, 20);
 obstacle.addImage( "obstacle",obstaceImage);
   obstacle.scale=0.1
        obstacle.velocityX=-2
 obstacle.lifeTime=200
      obstacle.collide(ground);
    }
  drawSprites();
  
 
  
}
  






 