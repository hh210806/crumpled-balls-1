var crushedBall,ground
var side1;
var side2;
var bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	crushedBall=createSprite(10, 650, 100,100);
	crushedBall.scale=0.2

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottom = createSprite(400,650,200,20);
	bottom.shapeColor = color(80,0,0);
	side1 = createSprite(300,560,20,200);
	side1.shapeColor = color(80,0,0);
	side2 = createSprite(500,560,20,200);
	side2.shapeColor = color(80,0,0);


	engine = Engine.create();
	world = engine.world;

	crushedBallBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, crushedBallBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  crushedBall.x= crushedBallBody.position.x 
  crushedBallBody.y= crushedBallBody.position.y 
  
  
  


if(crushedBall.collide(bottom)){
	text("you desposed the crushed paper writely!!",400,350);
}
if(crushedBall.isTouching(side1)||crushedBall.isTouching(side2)||crushedBall.isTouching(groundSprite)){
	text("you littered the ground",400,350);
}

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.applyForce(crushedBall.body,crushedBall.body.positions,{x:85,y:-85});
	
	
	


 }
}



