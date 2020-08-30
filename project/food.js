class Food{
    constructor () {
       this.newFood();
    }
    newFood(){
       this.x = Math.floor(random(width));
       this.y = Math.floor(random(height));
 
       this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
       this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
    }
    show(){
       fill(255, 40, 0);
       rect(this.x, this.y, GRID_SIZE, GRID_SIZE);
    }
 }
 food.show();
 
 function update(){
    this.body.push(createVector(this.head.x, this.head.y));

    this.head.x += this.vel.x * GRID_SIZE;
    this.head.y += this.vel.y * GRID_SIZE;

    this.head.x = (this.head.x + WITDH) % WITDH;
    this.head.y = (this.head.y + HEIGHT) % HEIGHT;

    if(this.length < this.body.length)
    {
       this.body.shift();
    }
 }
function show() {
    noStroke();
    // Draw snake head
    fill(255);
    rect(this.head.x, this.head.y, GRID_SIZE, GRID_SIZE);

    // Draw snake body
    fill(155);
    for(let vector of this.body)
    {
       rect(vector.x, vector.y, GRID_SIZE, GRID_SIZE);
    }
 }

 for(let vector of this.body)
      {
         if(vector.x == this.head.x && vector.y == this.head.y)
         {
            this.isDead = true;
         }
      }

      function draw() {
        background(0);
        if(!snake.isDead){
           drawSnake();
        } else {
           newGame()
        }
     }