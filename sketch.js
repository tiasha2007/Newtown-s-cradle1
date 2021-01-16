
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constructor = Matter.Constructor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	constructor (body1, body2, offsetX, offsetY)
	{
		this.offsetX=this.offsetX
		this.offsetY=this.offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world, this.rope)

		rope1=new rope(bobObject1.body, roofObject.body,-bobDiameter*2, 0)
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function display()
{
	var pointA = this.rope.bodyA.position;
	var pointB = this.rope.bodyB.position;

	strokeWeight(2);

	var Anchor1X = positionA.x
	var Anchor1Y = positionA.y

	var Anchor2X = positionB.x+this.offsetX
	var Anchor2X = positionB.Y+this.offsetY

	line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

	var bodyA = positionA.x
	var bodyB = positionA.y

	var body1 = positionB.x+this.offsetX
	var body2 = positionB.Y+this.offsetY	
}


