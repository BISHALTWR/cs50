/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 800;

const numberOfEnemies = 20;
const enemiesArray = [];

// enemy1 = {
//     x: 10,
//     y: 50,
//     width: 20,
//     height: 20,
// }

// const enemyImage = new Image();
// enemyImage.src = "../png/enemies/enemy1.png";
let gameFrame = 0;
class Enemy {
    constructor(){
        // this.x = 10;
        // this.y = 50;
        this.image = new Image();
        this.image.src = "../png/enemies/enemy4.png"
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.frame = 0;
        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random() * (canvas.height - this.height);
        this.interval = Math.floor(Math.random() * 100 + 150);

    }
    update(){
        if (gameFrame % this.interval === 0){
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/20;
        this.y -= dy/30;
        if (this.x + this.width < 0) this.x = canvas.width;
        // animate sprites
        if (gameFrame % this.flapSpeed == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

// const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++)
{
    enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // enemy1.update();
    // enemy1.draw();
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    requestAnimationFrame(animate);
    gameFrame++;
}

animate();