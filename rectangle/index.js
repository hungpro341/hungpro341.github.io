var canvas = document.querySelector("#canvas")
canvas.width = 1000
canvas.height = 600
canvas.style.border = " 2px solid black "
var ctx = canvas.getContext('2d')

console.log(ctx)
class Rect {
    constructor(dx, dy, width, heigt, color) {
        this.dx = dx
        this.dy = dy
        this.width = width
        this.height = heigt
        this.color = color
    }
    drow() {
        ctx.fillStyle = this.color
        ctx.rect(this.dx, this.dy, this.width, this.height)
        ctx.fill()
        ctx.beginPath()
        ctx.closePath()

    }

}
var rect = new Rect(0, 0, 300, 100, 'red')
rect.drow()

var rect1 = new Rect(700, 0, 300, 150, 'blue')
rect1.drow()

var rect2 = new Rect(0, 450, 400, 150, 'green')
rect2.drow()

var rect3 = new Rect(650, 400, 350, 200, 'yellow')
rect3.drow()


