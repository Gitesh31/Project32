const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon;
var slingshot;
var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  ;
    // creating bodies

    stand = new Ground();

    // level 1
    block9 =  new Box(390,155,30.40);
  
    // level 2
    block1 = new Box(330,235,30,40);
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(4500,235,30,40);
  
    // level 3
    block6 = new Box(360,195,30,40);
    block7 = new Box(390,195,30,40);
    block8 = new Box(420,195,30,40);
  
    polygon = new Polygon(20,20,50,50);

    slingshot = new Slingshot(this.polygon , {x:200 , y:100});

  
  }



function draw() {
  background(255,255,255);  
  Engine.update(engine);
  text("SCORE:" + score,750,40)

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  
  polygon.display();
  slingshot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
      slingshot.attach(polygon.body);
  }
}

