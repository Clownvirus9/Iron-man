
var lightcannon;
var impact;

var Speed;
var Weight;

var Ironsuit1;
var Ironsuit2;
var Ironsuit3;
var Ironsuit4;
var Ironsuit5;
var Ironsuit6;
var Ironsuit7;
var Ironsuit8;
var Ironsuit9;
var Ironsuit10;
var Ironsuit11;
var Ironsuit12;

function setup() {
  createCanvas(800,400);

  Speed = random(55,90);
  Weight = random(400,1500);


  lightcannon = new Ellipse(310, 153, 90, 30);
  lightcannon.shapeColor = "white";
  lightcannon.vx = Speed;
  
  impact = createSprite(650,200, 60, 400);
  impact.shapeColor = "blue";

  Ironsuit1 = createSprite(100,300,30,100);
  Ironsuit1.shapeColor = "red";

  Ironsuit2 = createSprite(150,300,30,100);
  Ironsuit2.shapeColor = "red";

  Ironsuit3 = createSprite(125,200,100,110);
  Ironsuit3.shapeColor = "Orange";

  Ironsuit4 = createSprite(65,190,20,90);
  Ironsuit4.shapeColor = "Red";

  Ironsuit5 = createSprite(220,155,90,20);
  Ironsuit5.shapeColor = "Red";

  Ironsuit6 = createSprite(125,120,50,50);
  Ironsuit6.shapeColor = "Orange";

  Ironsuit7 = createSprite(110,110,20,5);
  Ironsuit7.shapeColor = "white";

  Ironsuit8 = createSprite(140,110,20,5);
  Ironsuit8.shapeColor = "white";

  Ironsuit9 = createSprite(125,130,50,5);
  Ironsuit9.shapeColor = "Black";

  Ironsuit10 = createSprite(125,200,50,20);
  Ironsuit10.shapeColor = "red";

  Ironsuit11 = createSprite(125,220,50,20);
  Ironsuit11.shapeColor = "red";
}

function draw() {
  background("White");
  
  if(impact.x - lightcannon.x < (lightcannon.width + impact.width)/2){

    lightcannon.vx = 0;
    
    var bang = 0.5 * Weight * Speed* Speed/22509;
    if(bang > 180)
    {
        lightcannon.shapeColor = ("Green");
    }
    
    if(bang < 180 && bang > 100 ) {
      lightcannon.shapeColor = ("purple");
    }

    if(bang < 100)
    {
        lightcannon.shapeColor = ("Red");
    }
  }
  
  lightcannon.display();
  Ironsuit1.display();
  Ironsuit2.display();
  Ironsuit3.display();
  Ironsuit4.display();
  Ironsuit5.display();
  Ironsuit6.display();
  Ironsuit7.display();
  Ironsuit8.display();
  Ironsuit9.display();
  Ironsuit10.display();
  Ironsuit11.display();

  drawSprites();
}

class Ellipse{
  constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;

      this.shapeColor = "grey";
      this.vx = 0;
      this.vy = 0;

  }

  display(){

      fill(this.shapeColor);
      this.x = this.x+this.vx;
      this.y = this.y+this.vy;
  

      ellipse(this.x,this.y,this.width,this.height);

  }
}