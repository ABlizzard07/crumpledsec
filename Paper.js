class Paper{
   constructor(x,y,diameter){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 2.4
        }
        
        this.body = Bodies.circle(x,y,diameter,options);
        this.width = 60;
        this.height = 60;
        this.diameter = diameter;
        
        this.image = loadImage("Crumpledsec/paper.png");
        World.add(world,this.body);
    }
    display(){
        
       translate(this.body.position.x, this.body.position.y);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
       
    }
}
