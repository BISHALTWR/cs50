const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = '../png/spritesheet_ninja/spritesheet_idle.png'

const spriteWidthidle = 234;
const spriteHeightidle = 441;

x = 0;
let gameFrame = 0;
staggerFrames = 7;
function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(100,50,100,100); // Draws Rectangle (x,y,width,height)

    //drawImage() function - three versions
    // ctx.drawImage(playerImage, 0, 0); // Draws Image (image variable, x, y)
    // ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Draws Image (image variable, x, y, width, height)
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

    // if(gameFrame % staggerFrames == 0)
    // {
    //     x = (x+1)%9;
    // }

    x = Math.floor(gameFrame/staggerFrames) % 9

    gameFrame++;
    ctx.drawImage(playerImage, x*spriteWidthidle, 0, spriteWidthidle, spriteHeightidle, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
}
animate();