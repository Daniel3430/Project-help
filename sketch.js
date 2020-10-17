var bullet,wall;
var speed, weight,thickness; 

function setup() {
  createCanvas(1600, 400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  car=createSprite(-100, 200, 50,50);   
  car.velocityX = speed;
  car.shapeColor=color(255);
  wall=createSprite(1200,200,thickness,200)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor=colour(255,0,0);
    }
    if (damage<10){
      wall.shapeColor=colour(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

