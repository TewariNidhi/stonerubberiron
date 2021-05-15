const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,object1,object2,object3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    object1 = new Rubber(800,10,50);
    object2 = new stone(500,100,50,50);
    object3 = new iron(20,100,30,40);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    object1.display();
    object2.display();
    object3.display();
}