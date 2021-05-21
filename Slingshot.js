class Slingshot{
    constructor(a,b){
        var options = {
            bodyA: a,
            pointB: b,
            length:0,
            stiffness:0.2
        }
        this.pointB=b;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){
        strokeWeight(5);
        stroke("yellow");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}