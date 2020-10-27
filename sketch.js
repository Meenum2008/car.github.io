var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,100,50);
  car.shapeColor=color("white")
  car.velocityX=speed;
  car.weight=weight;
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color("lightblue")
 
 
}

function draw() {
  car.depth=wall.depth+1;
  
  background("black");  
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed/22500;
  }
  if(deformation>180){
    car.shapeColor=color("red");
  }
  if(deformation<180&&deformation>100){
    car.shapeColor=color("yellow");
    }
  if(deformation<100){
    car.shapeColor=color("lightgreen");
  }
  
  drawSprites();
}