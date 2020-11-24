
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImage = loadImage ("bin.png");	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1 = new Paper(10,500,25);
	
	log1 = new bin(900,900,200,100);
	//log2 = new log(990,860,20,100);
	//log3 = new log(810,860,20,100);

	ground1 = new Ground(500,925,1000,25);

	Engine.run(engine);
  
}


function draw() {
  background("grey");

  imageMode(CENTER);
  image(this.binImage,900,900,200,20)

  paper1.display();
  log1.display();
 // log2.display();
 // log3.display();
  ground1.display();


  keyPressed();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-20});

	}
}



