var cat,mouse;
var bg1,bgImg;
var catImg,mouseImg;
var catWalk,catLast;
var mouseSecond,mouseLast;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg=loadImage("images/cat1.png");
    mouseImg=loadImage("images/mouse1.png");
    catWalkImg=loadAnimation("images/cat2.png","images/cat3.png");
    catLast=loadImage("images/cat4.png");
    mouseSecond=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseLast=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg1=createSprite(500,400,1000,800);
    bg1.addImage(bgImg);
    
    cat=createSprite(750,600);
    cat.addImage(catImg);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addImage(mouseImg);
    mouse.scale=0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){

        cat.velocityX=0;
        cat.addImage("kat",catLast);
        cat.changeImage("kat");
        cat.x=cat.x+130;
        mouse.addImage("mous",mouseLast);
        mouse.changeImage("mous");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("kat",catWalkImg);
      cat.changeAnimation("kat");
      mouse.addAnimation("mous",mouseSecond);
      mouse.changeAnimation("mous");

  }


}