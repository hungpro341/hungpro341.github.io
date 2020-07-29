var canvas = document.querySelector("#canvas")
 canvas.width = 800
 canvas.height = 400
 
 var ctx = canvas.getContext('2d')



 
    class Rect{
         
     

    constructor(ax,ay,radius,x,color){
        this.ax=ax
        this.ay=ay
        this.radius=radius
         this.x=x
         this.color=color
}
    
     draw (){
        ctx.beginPath ()
        ctx.fillStyle = this.color
        ctx.strokeStyle = "black"
        ctx.arc ( this.ax, this.ay, this.radius,0,this.x * Math.PI ,false)
        ctx.fill()
     ctx.stroke()
      }
}        
var rect = new Rect(400,200, 150 ,2, 'white')
rect.draw()

var rect1 = new Rect(350,150, 10, 2 , 'white')
rect1.draw()

var rect2 = new Rect(450,150, 10, 2,'white')
rect2.draw()

var rect3 = new Rect(400,200,100,1,'white')
rect3.draw()