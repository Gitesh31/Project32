class Polygon {
    constructor(x,y,width,height){
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(50,200,20);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world,polygon);

        slingshot = new Slingshot(this.polygon , {x:200 , y:100});
        
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, polygon.position.x, polygon.position.x, this.width, this.height);
        pop();
    }
}
