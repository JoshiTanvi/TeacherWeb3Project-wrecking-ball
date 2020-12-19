class Box{

    constructor(x, y){

        var b_options = {
            restitution: 0.6,
            friction: 1,
            density :0.5
        }

        this.body = Matter.Bodies.rectangle(x, y, 70, 70, b_options);
        Matter.World.add(abWorld, this.body);
    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(4);
        stroke("green");
        rectMode(CENTER);
        rect(0, 0, 70, 70);
        pop();
    }

}