const World=Matter.World;
const Engine=Matter.Engine;
const Bodies =Matter.Bodies;

var engine,world,ground

function setup() {
  createCanvas(1300,700);
  engine=Engine.create();
  world=engine.world;

  ground= new Ground(600,660,1200,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
ground.display();

  
}