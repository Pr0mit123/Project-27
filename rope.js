class Rope {
    constructor (Roof, Bob) {
        
        this.offsetX=this.offsetX
        this.offsetY=this.offsetY
        var options ={
            bodyA:body1,
            pointB:body2,
            length:15,
            stiffness:0.04
        }
        this.rope = Constraint.create (options);
        World.add (world, this.rope);

    }

    display() {
        if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.location;
        line (pointA.x, pointA.y, pointB.x, pointB.y);
        }
     }
    fly() {
        this.rope.bodyA = null

        }


} 