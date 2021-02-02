



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 


var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var box20,box21,box22,box23,box24,box25;
var polygon,polygon_img,slingshot;


function preload(){
polygon_img = loadImage("polygon.png")
}

function setup(){
    createCanvas(1600, 700);

    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(400,660,2600,25);
    ground2 = new Ground(400,400,390,25);
    ground3 = new Ground(1000,300,270,25);

    // level 4
    box1 = new Box(325,385,40,30);
    box2 = new Box(355,385,40,30);
    box3 = new Box(400,385,40,30);
    box4 = new Box(440,385,40,30);
    box5 = new Box(480,385,40,30);
    box6 = new Box(520,385,40,30);
    box7 = new Box(285,385,40,30);
    
    // level 3
    box8 = new Box(320,325,40,30);
    box9 = new Box(360,325,40,30);
    box10 = new Box(400,325,40,30);
    box11 = new Box(440,325,40,30);
    box12 = new Box(480,325,40,30);

    // level 2
    box13 = new Box(360,265,40,30);
    box14 = new Box(400,265,40,30);
    box15 = new Box(440,265,40,30);

    // level 1
    box16 = new Box(400,205,40,30);

    // level 3;2
    box17 = new Box(925,285,40,30);
    box18 = new Box(965,285,40,30);
    box19 = new Box(1005,285,40,30);
    box20 = new Box(1045,285,40,30);
    box21 = new Box(1085,285,40,30);

    // level 2;2
    box22 = new Box(965,225,40,30);
    box23 = new Box(1005,225,40,30);
    box24 = new Box(1045,225,40,30);

    // level 1;2
    box25 = new Box(1005,165,40,40);

    var options={
        isStatic: false
      }
     
     polygon = Bodies.circle(300,100,40,options);
     World.add(world,polygon);
     fill("red");

     slingshot = new SlingShot(this.polygon,{x:160,y:100});

    Engine.run(engine);
}
 function draw(){
     background(10,10,64);
     Engine.update(engine);

     console.log(polygon.position.x);

     ground1.display();
     ground2.display();
     ground3.display();

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
     box19.display();
     box20.display();
     box21.display();

     box22.display();
     box23.display();
     box24.display();

     box25.display();

     imageMode(CENTER);
     image(polygon_img,polygon.position.x,polygon.position.y,60,60)

     slingshot.display();

     textSize(25)
     text("Drag The Hexogonal Stone and release, to launch it towards the blocks",300,100)
 }
 function mouseDragged(){
     Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
 }
function mouseReleased(){
    slingshot.fly();
}




