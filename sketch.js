
var abEngine, abWorld;
var ground, box1 ; 

function setup(){
  createCanvas(1200, 600);
  
  abEngine = Matter.Engine.create();
  abWorld = abEngine.world; 

 
  ground = new Ground(600, 590, 1200, 20);

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(740, 200, 70, 70);

}

function draw(){
  background("black");
  
  Matter.Engine.update(abEngine);

  ground.display();

  box1.display();
  box2.display();
}