var movingrect;
var fixedrect;

function setup()
{
  createCanvas(800,400);
  movingrect=createSprite(500,200,50,50);
  movingrect.shapeColor="red";
  movingrect.debug="true";
  movingrect.velocityX=-2;
  fixedrect=createSprite(400,200,50,50);
  fixedrect.shapeColor="green";
  fixedrect.debug="true";

}
function draw()
{
  background("white");
 
  bounceOff();
//collide();
  drawSprites();
}
function collide()
{
  //distance between sprites
  var distance=movingrect.x-fixedrect.x
  //distance between two centers of rectangel sprite
  var centerOfmovingrect=movingrect.width/2
  var centerfixedrect=fixedrect.width/2; 
  var distanceofcenter=centerOfmovingrect+centerfixedrect;
  console.log("centerof movingrect"+centerOfmovingrect);
  console.log("center fixedrect"+centerfixedrect);
  console.log("distance between two centers"+distanceofcenter);
   console.log("distance between two rectangles"+distance);
   if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2)
  
    {
      movingrect.shapeColor="black"
      fixedrect.shapeColor="black";

       }
      else
      {
        movingrect.shapeColor="red";
        fixedrect.shapeColor="green";
      }
}
function bounceOff()
{
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)
  {
      movingrect.velocityX=(-1)* movingrect.velocityX;
      movingrect.velocityY=(-1)* movingrect.velocityY;
  }
}