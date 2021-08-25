const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var ground;

function preload(){
bg=loadImage("images/brick wall.png")
}

function setup(){
createCanvas (1040,480)
engine=Engine.create()
world=engine.world;

ground=new Ground(520,470,1040,30)
brick1=new Brick(520,370,20,30)

}

function draw(){
background(bg);
Engine.update(engine);

ground.display();
brick1.display();
}