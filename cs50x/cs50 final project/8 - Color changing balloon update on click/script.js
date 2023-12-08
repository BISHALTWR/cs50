//Comments
    //Create following objects:
        //Canvas2D with canvas and canvasContext
        //Game with something
        //Balloon with balloon position, origin and stuff
        //mouse with position
        //sprite to load sprites
            //create a variable to store location to sprite folder
            //create an image object and set source for each
//Done


//object declaration
var canvas2D = {
    canvas: undefined,
    context: undefined
};

canvas2D.initialize = function() {
    canvas2D.canvas = document.getElementById("playGround");
    canvas2D.context = canvas2D.canvas.getContext("2d");
}

canvas2D.clear = function() {
    canvas2D.context.clearRect(0,0,canvas2D.canvas.width,canvas2D.canvas.height);
}

canvas2D.drawImage = function(sprite, position,rotation,origin) {
    canvas2D.context.save();
    canvas2D.context.translate(position.x,position.y);
    canvas2D.context.rotate(rotation); //rotation is about origin ** //angle in radian
    canvas2D.context.drawImage(sprite,0,0,sprite.width,sprite.height,-origin.x,-origin.y,sprite.width,sprite.height);
    canvas2D.context.restore();
};

var balloon = {
    position: {x:0,y:0},
    origin: undefined,
    currentColor: undefined
};

balloon.draw = function() {

}

var mouse = {
    position: {x:0, y:0},
    leftDown: false
};

function handleMouseDown(evt) {
    if (evt.which === 1)
        mouse.leftDown = true;
}

function handleMouseUp(evt) {
    if (evt.which === 1)
        mouse.leftDown = false;
}

var keyboard = {
    keydown: -1
}

var keys = {
    R: 82, G: 71, B: 66, Y: 89
}

var sprites = {
    balloonYellow : new Image(),
    balloonRed : new Image(),
    balloonGreen : new Image(),
    balloonBlue : new Image(),
    background : new Image()
}

var Game = {
};
//object declaration_end


//spriteDeclaration
sprites.initialize = function() {
    var spritesFolder = "../sprites/";
    sprites.background.src = spritesFolder + "spr_sky.jpg";
    sprites.balloonYellow.src = spritesFolder + "balloon_yellow.png";
    sprites.balloonRed.src = spritesFolder + "balloon_red.png";
    sprites.balloonGreen.src = spritesFolder + "balloon_green.png";
    sprites.balloonBlue.src = spritesFolder + "balloon_blue.png";
    balloonOrigin = {x:0,y:0};
}
//spriteDeclaration_end


//Game loop functions
Game.start = function() {
    canvas2D.initialize();
    sprites.initialize();
    
    //eventListeners here
    balloon.currentColor = sprites.balloonYellow;
    document.onkeydown = keyDownHandler;
    document.onkeyup = keyUpHandler;
    document.onmousemove = mouseMoveHandler;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
    
    // canvas2D.drawImage(sprites.background, {x:0, y:0}, 0, {x:0, y:0});//just checking
    console.log("done");
    //start main loop
    window.setTimeout(Game.mainLoop,0);
}

Game.draw = function() {
    canvas2D.clear();
    canvas2D.drawImage(sprites.background, {x:0, y:0}, 0, {x:0, y:0});
}

Game.mainLoop = function() {
    Game.draw();//clear everything and background
    // console.log("done");
    if(mouse.leftDown) {
        balloon.position = {x : mouse.position.x, y: mouse.position.y};
        canvas2D.drawImage(balloon.currentColor,mouse.position,0,balloonOrigin);
    } else {
        canvas2D.drawImage(balloon.currentColor,balloon.position,0,balloonOrigin);
    }
    window.setTimeout(Game.mainLoop,60);
}

document.addEventListener("DOMContentLoaded", Game.start);

//Handler functions
keyDownHandler = function(evt) {
    keyboard.keydown = evt.keyCode;
    if(keyboard.keydown === keys.R)
    {
        balloon.currentColor = sprites.balloonRed;
    }else if(keyboard.keydown === keys.G)
    {
        balloon.currentColor = sprites.balloonGreen;
    }else if(keyboard.keydown === keys.B)
    {
        balloon.currentColor = sprites.balloonBlue;
    }else if(keyboard.keydown === keys.Y)
    {
        balloon.currentColor = sprites.balloonYellow;
    }
}

keyUpHandler = function(evt) {
    keyboard.keydown = -1;
}

mouseMoveHandler = function(evt) {
    mouse.position = {x:evt.pageX, y:evt.pageY};
}