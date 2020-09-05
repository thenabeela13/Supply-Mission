var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1 ; 
var rect2 ;
var rect3 ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.8

	groundSprite=createSprite(width/2, height-50, width,20);
	groundSprite.shapeColor=color(255)

	rect1=createSprite(300, 630,200,20);
	rect1.shapeColor= "red"
	rect2=createSprite(390,580,20,100);
	rect2.shapeColor= "red"
	rect3=createSprite(210,580,20,100);
	rect3.shapeColor= "red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	packageBody.visible = false ;
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 //Creating a box
	 rect1 = Bodies.rectangle(300, 600, 200, 20, {isStatic:true});
	 World.add(world, rect1);
	 rect2 = Bodies.rectangle(600, 350, 20, 100, {isStatic:true});
	 World.add(world, rect2);
	 rect3 = Bodies.rectangle(600, 200, 20, 100, {isStatic:true});
	 World.add(world, rect3);

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();
	
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false)
	
	 }
   }