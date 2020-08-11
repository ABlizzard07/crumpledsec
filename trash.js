class Trash{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("dustbingreen.png");

        World.add(world,this.body);
        World.add(world,this.image);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, 1000, 610, this.width, this.height);
    }
}