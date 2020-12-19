
var abEngine, abWorld;
var ground, box1 ; 

function setup(){
  createCanvas(1200, 600);
  
  abEngine = Matter.Engine.create();
  abWorld = abEngine.world; 
 
  ground = new Ground(600, 590, 1200, 20);

  box1 = new Box(720, 200);
  box2 = new Box(720, 200);
  box3 = new Box(720, 200);
  box4 = new Box(720, 200);
  box5 = new Box(720, 200);
  box6 = new Box(720, 200);
  box7 = new Box(630, 200);
  box8 = new Box(630, 200);
  box9 = new Box(630, 200);
  box10 = new Box(630, 200);
  box11 = new Box(630, 200);
  box12 = new Box(630, 200);
  box13 = new Box(540, 200);
  box14 = new Box(540, 200);
  box15 = new Box(540, 200);
  box16 = new Box(540, 200);
  box17 = new Box(540, 200);
  box18 = new Box(540, 200);

  b = new Ball(300, 400);

  chain = new Chain(b.body, {x: 300, y:100})

  
}

function draw(){
  background("blue");
  
  Matter.Engine.update(abEngine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  b.display();
  chain.display();
 
}

function mouseDragged() {
  Matter.Body.setPosition(b.body, { x: mouseX, y: mouseY });
}