
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
let engine;
let world;
var groundObj;
var leftSide;
var rightSide
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(900,600,20,120);
	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  	ellipse(ball.position.x,ball.position.y,20);
	groundObj.display();
	leftSide.display();
	rightSide.display();
  	drawSprites();
	keyPressed();
	if(ball.x > 700 && ball .x <1100 && ball.y < 600){
		textSize(20);
		fill(white);
		text("YOU WIN!", 625, 350);
	}
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ball,{
			x:0,y:0
		},{
			x:4,y:3
		})
	}

}

