const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16   

var polygon, stand, stant2, slingShot

var smallBox1, smallBox2, smallBox3, smallBox4, smallBox5, smallBox6, smallBox7, smallBox8, smallBox9

function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;

  stand = new Stand(390, 500, 300, 10);
  stand2 = new Stand(650, 300, 270, 10);

  box1 = new lowBox1(300, 470, 30, 40);
  box2 = new lowBox1(330, 470, 30, 40);
  box3 = new lowBox1(360, 470, 30, 40);
  box4 = new lowBox1(390, 470, 30, 40);
  box5 = new lowBox1(420, 470, 30, 40);
  box6 = new lowBox1(450, 470, 30, 40);
  box7 = new lowBox1(480, 470, 30, 40);

  box8 = new lowMiddleBox1(330, 440, 30, 40);
  box9 = new lowMiddleBox1(360, 440, 30, 40);
  box10 = new lowMiddleBox1(390, 440, 30, 40);
  box11 = new lowMiddleBox1(420, 440, 30, 40);
  box12 = new lowMiddleBox1(450, 440, 30, 40);
  
  box13 = new highMiddleBox1(360, 410, 30, 40);
  box14 = new highMiddleBox1(390, 410, 30, 40);
  box15 = new highMiddleBox1(420, 410, 30, 40);
  
  box16 = new highBox1(390, 380, 30, 40);

  smallBox1 = new lowBox1(590, 270, 30, 40);
  smallBox2 = new lowBox1(620, 270, 30, 40);
  smallBox3 = new lowBox1(650, 270, 30, 40);
  smallBox4 = new lowBox1(680, 270, 30, 40);
  smallBox5 = new lowBox1(710, 270, 30, 40);

  smallBox6 = new highMiddleBox1(620, 240, 30, 40);
  smallBox7 = new highMiddleBox1(650, 240, 30, 40);
  smallBox8 = new highMiddleBox1(680, 240, 30, 40);

  smallBox9 = new lowMiddleBox1(650, 210, 30, 40);

  polygon = new Polygon(50, 200, 50);
  // polygon = Bodies.circle(50, 200, 20);
  // World.add(world, polygon);
  slingShot = new SlingShot(polygon.body, {x:100, y:500});
  polygon.scale=10;
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(rgb(56, 44, 44));
  // mouseDragged();
  keyPressed();  
  // mouseReleased();
  Engine.update(engine);


  a=a-1;
  
 
  
  // for (i=0;i<circles.length;i++) {
	//   circle(circles[i], height/2,20)
  // }
  // if(camera.position.x%width===0) {
	//   circles.push(camera.position.x+width/2)
  // }
 
  drawSprites();

  stand.display();
  stand2.display();
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
  smallBox1.display();
  smallBox2.display();
  smallBox3.display();
  smallBox4.display();
  smallBox5.display();
  smallBox6.display();
  smallBox7.display();
  smallBox8.display();
  smallBox9.display();
  polygon.display();
  slingShot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(polygon.body);
  }
}