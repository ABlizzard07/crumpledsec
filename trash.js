class Trash{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("./dustbingreen.png");
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true}) 
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
        this.rightWallBody=Bodies.rectangle(x+width/2, y-height/2, wallThickness,height,options);


        World.add(world,this.body);
        World.add(world,this.image);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, 1000, 610, this.width, this.height);
    }
}