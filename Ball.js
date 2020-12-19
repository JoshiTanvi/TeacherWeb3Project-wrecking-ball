class Ball{

    constructor(x, y){

        var b_options = {
            density :1.5
        }

        this.body = Matter.Bodies.circle(x, y, 40, b_options);
        Matter.World.add(abWorld, this.body);
    }

    display(){

        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("red");
        strokeWeight(2);
        stroke("white");
        circle(0, 0, 80);
        pop();
    }

}