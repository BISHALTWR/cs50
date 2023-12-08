/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 800;

const numberOfEnemies = 10;
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
        this.image.src = "../png/enemies/enemy2.png"
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.frame = 0;
        this.angle = 0;
        this.angleSpeed = Math.random()*0.2;
        this.curve = Math.random() * 7;
    }
    update(){
        this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        this.angle += 0.5;
        // this.y += this.speed;
        // this.x += Math.random() * 12 - 6;
        // this.y += Math.random() * 12 - 6;
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