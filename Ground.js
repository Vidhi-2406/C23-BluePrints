class Ground {


    constructor(x,y,width,height){
  var staticy =  {

    isStatic :  true
    
  }
 this.body = Bodies.rectangle(x,y,width,height,staticy)
 this.width = width
 this.height = height
 World.add(world,this.body)

  }


    display(){
var pos = this.body.position
rectMode(CENTER)
fill(255)
rect(pos.x,pos.y,this.width,this.height);

}
}