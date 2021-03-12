class SlingShot{
constructor(bodyA, bodyB){
var options = {
bodyA: bodyA,
bodyB: bodyB,
stiffness: 0.002,
length: 10
}
this.sling = Matter.Constraint.create(options);
World.add(world, this.sling); 
}    
display(){
var pointA = this.sling.bodyA.position;
var pointB = this.sling.bodyB.position;
push ();
strokeWeight(8);
line (pointA.x, pointA.y, pointB.x, pointB.y); 
  pop ();
}
}