class Chain{
    constructor(bodyA, pointB) {
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 1
         
        };
        
        this.chain = Matter.Constraint.create(options);
        Matter.World.add(abWorld, this.chain);
      }
    
      display() {

          push();
          stroke("black");
          strokeWeight(3);
          line(this.chain.pointB.x, this.chain.pointB.y, this.chain.bodyA.position.x, this.chain.bodyA.position.y);
          pop();
        
      }

}