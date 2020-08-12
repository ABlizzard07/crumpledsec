const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var backgroundcolor = prompt("Choose your background color");

function setup() {
	createCanvas(1300, 700);

 	engine = Engine.create();
	world = engine.world;

	ground = createSprite(650,695,1300,20);

	//Create the Bodies Here.
	paper = new Paper(200,690,40);
	trash = new Trash(1230,640,20,120); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundcolor);
 
  textSize(28);
  fill("black");
  text("Keep your city clean!",550,100);

  ground.shapeColor = rgb(random(255), random(255), random(255));
  drawSprites();
  trash.display();
  paper.display();
  
  Engine.update(engine);

  if(paper.body.position.x > 1000){
	Body.setStatic(paper.body,true);
  } 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Body.setStatic(paper.body,false);
	Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-600});
	}	
}