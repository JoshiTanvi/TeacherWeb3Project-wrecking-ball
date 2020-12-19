class Ball{

    constructor(x, y){

        var b_options = {
            restitution: 0.8,
            friction: 0.4,
            density :1
        }

        this.body = Matter.Bodies.circle(x, y, 20, b_options);
        this.radius = 20;
        Matter.Body.setAngle(this.body, a);
        Matter.World.add(abWorld, this.body);
    }

    display(){

        push();
        strokeWeight(4);
        stroke("green");
        circleMode(RADIUS);
        rect(this.body.position.x, this.body.position.x, this.radius);
        pop();
    }

}