var car , wall;


function setup() {
  createCanvas(800,400);
  car= createSprite(700, 300, 80, 80);
  car.shapeColor="green";
  wall= createSprite(120,250,50,190);
  wall.shapeColor="grey";
}

function draw() {
  background(255,255,255); 
  car.x= World.mouseX;
  car.y= World.mouseY;


  if(car.x-wall.x < wall.width/2 +car.width/2
   && wall.x-car.x < car.width/2 + wall.width/2 
   && car.y-wall.y < wall.height/2 + car.height/2
   && wall.y-car.y < car.height/2 + wall.height/2 ) {
   
    car.shapeColor= "red";
   }
  else
  {
    car.shapeColor="green";
  }

  drawSprites();
}