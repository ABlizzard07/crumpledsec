class Trash{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = 1000;
        this.y = 680;
        this.width = 150;
        this.height = 150;
     //   this.image = loadImage("sprites/dustbingreen.png");
        this.image = loadImage("./dustbingreen.png");
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.leftWallBody=Bodies.rectangle(this.x-this.width/2.15, this.y-this.height/2, this.width/15, this.height,options); 
        this.rightWallBody=Bodies.rectangle(this.x+this.width/2.15, this.y-this.height/2, this.width,this.height,options); 
      

        World.add(world,this.body);
        World.add(world,this.image);
       
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        var bottombodypos = this.bottomBody.position;
        var leftpos = this.leftWallBody.position;
        var rightpos = this.rightWallBody.position;

        fill("black");
        strokeWeight(4);
        stroke("black");
        rect(bottombodypos.x,bottombodypos.y,this.width,this.height/15);
        rect(leftpos.x,leftpos.y,this.width/15,this.height);
        rect(rightpos.x,rightpos.y,this.width/15,this.height);
       

        imageMode(CENTER);
        image(this.image, 1000, 600, this.width, this.height);
    }
}