class Box{

    constructor(x, y, w, h){

        var b_options = {
            restitution: 0.6,
            friction: 1,
            density :1
        }

        this.body = Matter.Bodies.rectangle(x, y, w, h, b_options);
        this.width = w;
        this.height = h;
        Matter.World.add(abWorld, this.body);
    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(4);
        stroke("green");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }

}