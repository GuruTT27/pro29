const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup(){

    createCanvas(1440, 789);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

    ground1 = new ground(730,780,1470,20);

    //platform 1

    stand1 = new ground(590,380,270,20);

    //floor 1

    block1 = new block(500,350,30,40);
    block2 = new block(530.4,350,30,40);
    block3 = new block(560.4,350,30,40);
    block4 = new block(590.4,350,30,40);
    block5 = new block(620.4,350,30,40);
    block6 = new block(650.4,350,30,40);
    block7 = new block(680.4,350,30,40);
   
   //floor 2
   
    block8 = new block(530.4,310,30,40);
    block9 = new block(560.4,310,30,40);
    block10 = new block(590.4,310,30,40);
    block11 = new block(620.4,310,30,40);
    block12 = new block(650.4,310,30,40);
    
    //floor 3
    
    block13 = new block(620.4,270,30,40);
    block14 = new block(590.4,270,30,40);
    block15 = new block(560.4,270,30,40);
    
    //floor 4
    
    block16 = new block(590.4,230,30,40);

    //platform 2
    
    stand2 = new ground(960,280,190,20);

    //floor 1

    block17 = new block(900,250,30,40);
    block18 = new block(930,250,30,40);
    block19 = new block(960,250,30,40);
    block20 = new block(990,250,30,40);
    block21 = new block(1020,250,30,40);

    //floor 2

    block22 = new block(930,210,30,40);
    block23 = new block(960,210,30,40);
    block24 = new block(990,210,30,40);

    //floor 3

    block25 = new block(960,170,30,40);

    Engine.run(engine);

}

function draw(){

background(60, 46, 46)

ground1.display();

stand1.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

stand2.display()

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

}

