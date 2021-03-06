let snake;

function setup() {
   createCanvas(WITDH, HEIGHT);
   newGame();
}

function draw() {
   background(0);
   drawSnake();
}

function drawSnake() {
   snake.show();
}

function newGame() {
   snake = new Snake();
}
function keyPressed() {
    if (keyCode == UP_ARROW && snake.vel.y != 1) {
       snake.vel.y = -1;
       snake.vel.x = 0;
    } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
       snake.vel.y = 1;
       snake.vel.x = 0;
    }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
       snake.vel.y = 0;
       snake.vel.x = -1;
    } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
       snake.vel.y = 0;
       snake.vel.x = 1;
    }
 }
 function update(){
    this.head.x += this.vel.x * GRID_SIZE;
    this.head.y += this.vel.y * GRID_SIZE;

    this.head.x = (this.head.x + WITDH) % WITDH;
    this.head.y = (this.head.y + HEIGHT) % HEIGHT;
 }
 function drawSnake() {
    // update every SNAKE_SPEED frame
    if(frameCount % SNAKE_SPEED == 0)
    {
       snake.update();
    }
    snake.show();
 }

 function drawSnake() {
    // update every SNAKE_SPEED frame
    if(frameCount % SNAKE_SPEED == 0)
    {
       snake.update();
    }
 
    snake.show();
    food.show();
 
    // Handle when snake eat food
    if(snake.head.x == food.x && snake.head.y == food.y){
       eatFood();
    }
 }
 
 function drawSnake() {
    // update every SNAKE_SPEED frame
    if(frameCount % SNAKE_SPEED == 0)
    {
       snake.update();
    }
 
    snake.show();
    food.show();
 
    // Handle when snake eat food
    if(snake.head.x == food.x && snake.head.y == food.y){
       eatFood();
    }
 }
 
 function eatFood() {
    snake.length++;
    food.newFood();
 }
 