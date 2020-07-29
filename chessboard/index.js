var canvas = document.querySelector("#canvas")
canvas.width = 800
canvas.height = 800
canvas.style.border = " 2px solid black "
var ctx = canvas.getContext('2d')

console.log(ctx)



//vòng lặp
for(j=0; j<8; j++){
    for(i=0; i<8; i++){
        if(j%2 == 0){
            if(i%2==0){
                ctx.fillStyle = "#e15f41"
                ctx.fillRect(i*100, j*100, 100, 100)
            }
            else{
                ctx.fillStyle = "#f8c291"
                ctx.fillRect(i*100, j*100, 100, 100)
            }
        }
        else{
            if(i%2!=0){
                ctx.fillStyle = "#e15f41"
                ctx.fillRect(i*100, j*100, 100, 100)
            }
            else{
                ctx.fillStyle = "#f8c291"
                ctx.fillRect(i*100, j*100, 100, 100)
            }
        }
    }
}
