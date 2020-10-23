
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob (300, 400);
	bob2 = new Bob (325, 400);
	bob3 = new Bob (350, 400);
	bob4 = new Bob (375, 400);
	bob5 = new Bob (400, 400);

	roof1 = new Roof (350, 200, 400, 20);
	
	rope1= new Rope(bob1.body, roof1.body, bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  	bob1.display();
  	bob2.display();
 	bob3.display();
  	bob4.display();
 	bob5.display();

	roof1.display();
	
	rope1.display();
  drawSprites();
 
}

function keyPressed() {
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:45,y:-45});
}



