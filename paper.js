class paper
{
 
  constructor() {
   var options = {
   isStatic:false,
   'restitution' : 0.3,
   'density' : 1.2,
   'friction': 0
   }
   this.x = 800;
   this.y = 650;
   this.r = 8;
   this.body = Bodies.circle(800,650, 8, options);
   this.image=loadImage("sprites/paper.png");
   this.image.scale(10);
   World.add(world, this.body);
}

display() {
var paperpos = this.body.position;
push()
translate(paperpos.x, paperpos.y);
rectMpde(CENTER);
stroke("black");
fill("darkblue");
ellipse(0,0,8);
pop()







}
 




};