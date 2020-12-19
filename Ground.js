class Ground{

    constructor(x, y, w, h){

        var g_options = {

            isStatic: true
        }

        this.ground = Matter.Bodies.rectangle(x, y, w, h, g_options);
        this.width = w;
        this.height = h;
        Matter.World.add(abWorld, this.ground);
    }

    display(){
        push();
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
        pop();
    }

}