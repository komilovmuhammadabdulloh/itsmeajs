class Ajs {
    constructor(x,y){
this.body=Bodies.rectangle(x,y,30,30)
World.add(world,this.body)



}
display(color){
    var a=this.body.position
    var angle=this.body.angle
    push()
    translate(a.x,a.y)
    rotate(angle)
    fill (color)
    rectMode(CENTER)
    rect(0,0,30,30)
    pop()
}
}