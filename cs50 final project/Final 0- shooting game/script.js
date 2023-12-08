//lets start simple.
"use strict";
var cannon = {

};
var ball = {

};
var shooterGameWorld = {

};
var Keyboard = { keyDown: -1};

var Mouse = {
    position: {x: 0, y: 0},
    leftDown : false,
    leftPressed : false
}
//1. Game object with canvas, canvasContext variables
var Game = {
    canvas: undefined,
    canvasContext: undefined,
    //Added at step 9
    gameWorld: undefined, //assigned during Game.initialize
    spritesStillLoading: 0 //added at step 5.
    //Step 2 to create mainLoop(), draw(), update()
};

//2. create mainloop
Game.update = function() {
    console.log("update called");
}
Game.draw = function() {
    console.log("draw called");
}
Game.mainLoop = function() {
    //2. call update() and draw() and mainLoop again
    // console.log("Hello from main loop");
    //8. clear canvas added
    // Game.update();
    // Game.draw();
    //9. update and draw are part of GameWorld now, also check Game varibale above
    let delta = 1/60;
    Game.gameWorld.handleInput(delta); //19
    Game.canvasContext.clearRect(0,0,Game.canvas.width,Game.canvas.height);
    Game.gameWorld.update(delta);
    Game.gameWorld.draw();
    Mouse.reset();
    requestAnimationFrame(Game.mainLoop); //loops as frequently as possible
    // Step 3 - create sprites object
}
//3. Sprite object
var sprites = {
    location : "sprites/"//this is location where sprites are stored, just change this if required
}

//4. For Game, loadAssets function to load assets(sprites, background, music)
Game.loadAssets = function() {
    var loadSprite = function(sprite_name) {
        return Game.loadSprite(sprites.location+sprite_name);
    };

    //These are all the sprites required
    sprites.background = loadSprite("spr_sky.jpg");
    sprites.cannon_barrel = loadSprite("spr_cannon_barrel.png");
    sprites.cannon_red = loadSprite("spr_cannon_red.png"); //for ball in cannon
    sprites.cannon_green = loadSprite("spr_cannon_green.png"); 
    sprites.cannon_blue = loadSprite("spr_cannon_blue.png"); 
    sprites.ball_red = loadSprite("spr_ball_red.png");
    sprites.ball_green = loadSprite("spr_ball_green.png");
    sprites.ball_blue = loadSprite("spr_ball_blue.png");
};

//5. loadSprite function to load sprite and assetLoadingLoop to wait until mainLoop is entered.
Game.loadSprite = function(imageName) {
    //imageName is obtained, use that to load sprite
    console.log("Loading sprite: " + imageName);
    var image = new Image();
    image.src = imageName;
    this.spritesStillLoading += 1; //Keep count of how many sprites are still loading
    image.onload = function() { //Event handler that reduces no. of sprites left loading once a sprite is loaded
        Game.spritesStillLoading -= 1;
    };
    return image; // This is received by the sprite variables.
}

Game.assetLoadingLoop = function() {
    if(Game.spritesStillLoading > 0)
        requestAnimationFrame(Game.assetLoadingLoop);//i.e. if still left, let it load
    else {
        Game.initialize(); // This initializes stuff like cannon, ball etc.
        requestAnimationFrame(Game.mainLoop); //already defined above, maybe add things later
    }
}

//6. create initialize function (for Game).
Game.initialize = function() {
    console.log("Creating the game world now.");
    cannon.initialize();
    ball.initialize();
    //Added at step 9
    Game.gameWorld = shooterGameWorld;
}

//Step 7. Tried to check (via console log) if everything was working, but saw no starting loop so...

//7. when everything loaded, call Game.start and define Game.start //event listener at end
Game.start = function(x,y) {
    //start loading assets and start assetloadingloop
    //also initialize canvas and canvasContext
    Game.size = {x: x, y: y};
    Game.canvas = document.getElementById("playGround");
    Game.canvasContext = Game.canvas.getContext("2d");
    //Added at step 18
    Keyboard.initialize();
    Mouse.initialize();
    //
    Game.loadAssets();
    Game.assetLoadingLoop(); //This will call mainLoop when done loading
}

//Step 7 was successful.
//What i need to study is : some function call require () and some don't. WHY?

//8. Added Stuff to mainLoop, check above

//9. Keep update, draw methods as part of Gameworld variable. Assign shooterGameWorld to Gameworld.
//Also add isOutsideWord boolean function to evaluate if position is outside the game world or not

shooterGameWorld.update = function(delta) {
    ball.update(delta);
    cannon.update(delta);
}

shooterGameWorld.draw = function() {
    Game.drawImage(sprites.background, {x:0,y:0}, 0, {x:0,y:0});
    //drawImage will have sprite, position, rotation, origin
    //save drawing state, translate by position, rotate then draw and restore
    ball.draw(); //will be part of ball object
    cannon.draw(); //will be part of cannon object
}

shooterGameWorld.isOutsideWorld = function (position) {
    return position.x < 0 || position.x > Game.size.x || position.y > Game.size.y;
};

//10. Add drawImage function to Game
Game.drawImage = function(sprite,position,rotation,origin) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x,position.y);
    Game.canvasContext.rotate(rotation);
    Game.canvasContext.drawImage(sprite, 0,0,
        sprite.width, sprite.height,
        -origin.x, -origin.y,
        sprite.width, sprite.height);
    Game.canvasContext.restore();
}

//11. ball.update(), ball.draw(), cannon.update(), cannon.draw()
ball.update = function(delta) {
    // console.log("ball update called.");
    if(ball.shooting) {
        ball.velocity.x *= 0.99;
        ball.velocity.y += 6;
        ball.position.x += ball.velocity.x * delta;
        ball.position.y += ball.velocity.y * delta;
    }
    else {
        //change color and position of ball here
        if(cannon.currentColor === sprites.cannon_red)
            ball.currentColor = sprites.ball_red;
        else if (cannon.currentColor === sprites.cannon_green)
            ball.currentColor = sprites.ball_green;
        else
            ball.currentColor = sprites.ball_blue;
        ball.position = cannon.ballPosition();
        ball.position.x -= ball.currentColor.width/2;
        ball.position.y -= ball.currentColor.height/2;
    }
    if(shooterGameWorld.isOutsideWorld(ball.position))
        ball.reset();
}

ball.draw = function() {
    // console.log("ball draw called.");
    if(!ball.shooting) //i.e. if ball not in air
        return;
    Game.drawImage(ball.currentColor, ball.position, 0, ball.origin);
}
cannon.update = function() {
    // console.log("cannon update called."); 
    // nothing required here
}
cannon.draw = function() {
    Game.drawImage(sprites.cannon_barrel, cannon.position, cannon.rotation, cannon.origin);
    Game.drawImage(cannon.currentColor, cannon.colorPosition, 0, {x: 0, y:0});
}

//12. event handlers for keyboard
//Added keyboard varible at top
Keyboard.initialize = function() {
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
}

function handleKeyDown(evt) {
    Keyboard.keyDown = evt.keyCode;
}

function handleKeyUp(evt) {
    Keyboard.keyDown = -1;
}

//13. event handlers for mouse
//added mouse variable at top
Mouse.initialize = function() {
    document.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
};

function handleMouseMove(evt) {
    Mouse.position = {x: evt.pageX, y: evt.pageY};
}

function handleMouseDown(evt) {
    if(evt.which == 1) {
        if (!Mouse.leftDown)
        Mouse.leftPressed = true;
    Mouse.leftDown = true;
}
}

function handleMouseUp(evt) {
    if(evt.which === 1) {
        Mouse.leftDown = false;
    }
}

Mouse.reset = function() {
    Mouse.leftPressed = false;
}

//14. Key Mapping
var Keys = {
    none: 0,
    back: 8,
    tab: 9,
    enter: 13,
    pause: 19,
    escape: 27,
    
    space: 32,
    
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    
    insert: 45,
    del: 46,
    
    d0: 48,
    d1: 49,
    d2: 50,
    d3: 51,
    d4: 52,
    d5: 53,
    d6: 54,
    d7: 55,
    d8: 56,
    d9: 57,
    
    A: 65,     B: 66,      C: 67,      D: 68,       E: 69,      F: 70,
    G: 71,     H: 72,      I: 73,      J: 74,       K: 75,      L: 76,
    M: 77,     N: 78,      O: 79,      P: 80,       Q: 81,      R: 82,
    S: 83,     T: 84,      U: 85,      V: 86,       W: 87,      X: 88,
    Y: 89,     Z: 90,
    
    multiply: 42,
    add: 43,
    subtract: 45,
    decimal: 46,
    divide: 47
};

//15. Add ball.initialize, ball.reset, ball.handleInput
ball.initialize = function() {
    ball.position = {x: 0, y: 0};
    ball.velocity = {x: 0, y: 0};
    ball.origin = {x: 0, y: 0};
    ball.currentColor = sprites.ball_red;
    ball.shooting = false;
};

ball.reset = function() {
    ball.position = {x: 0, y:0};
    ball.shooting = false; //shooting = true when ball in air, don't draw new ball 
    //ball.draw was written after this
};

ball.handleInput = function() {
    if (Mouse.leftPressed && !ball.shooting) {
        ball.shooting = true;
        ball.velocity.x = (Mouse.position.x - ball.position.x) * 1.2;
        ball.velocity.y = (Mouse.position.y - ball.position.y) * 1.2;
    }
};

//16. Add cannon.initialize, cannon.handleInput, cannon.draw updated above, cannon.ballPosition
cannon.initialize = function() {
    cannon.position = {x: 72, y: 405};
    cannon.colorPosition = {x: 55, y: 388};
    cannon.origin = {x: 34, y: 34};
    cannon.currentColor = sprites.cannon_red;
    cannon.rotation = 0;
}

cannon.handleInput = function(delta) {
    if(Keyboard.keyDown === Keys.R)
    cannon.currentColor = sprites.cannon_red;
else if(Keyboard.keyDown === Keys.G)
        cannon.currentColor = sprites.cannon_green;
    else if(Keyboard.keyDown === Keys.B)
    cannon.currentColor = sprites.cannon_blue;
let opposite = Mouse.position.y - cannon.position.y;
let adjacent = Mouse.position.x - cannon.position.x;
cannon.rotation = Math.atan2(opposite, adjacent);
}

cannon.ballPosition = function() {
    var opposite = Math.sin(cannon.rotation) * sprites.cannon_barrel.width*0.6;
    var adjacent = Math.cos(cannon.rotation) * sprites.cannon_barrel.width*0.6;
    return {x: cannon.position.x + adjacent, y: cannon.position.y + opposite};
}
//17. Add this to LAB.js instead of here
// document.addEventListener("DOMContentLoaded", Game.start)

//18. Initialize keyboard and mouse at Game.start

//19. Add handleInput(delta) to shooterGameWorld and call that in Game.mainLoop
shooterGameWorld.handleInput = function() {
    ball.handleInput(delta);
    cannon.handleInput(delta);
}
//20. Copied code to appropriate files

//what division seems logical to me
//Game object and canvas related functions in one file
//ball, cannon, gameWorld in one cannon_ball.js
//sprites and assets in one //currently part of Game.js
//keyboard, mouse handlers in one input.js




//Steps
// Step 1: Initialize basic game objects and variables

// Step 2: Create the Game object with canvas-related variables and define the main game loop

// Step 3: Create a sprites object for managing sprite locations

// Step 4: Define a function to load game assets (sprites, background, music)

// Step 5: Create a function to load a sprite and an asset loading loop to wait until the main game loop is entered

// Step 6: Create an initialize function for the Game object

// Step 7: Start the game when everything is loaded and define the Game.start function

// Step 8: Add functionality to the main game loop and clear the canvas

// Step 9: Move the update and draw methods to the GameWorld and create an `isOutsideWorld` function

// Step 10: Add a `drawImage` function to Game for drawing sprites

// Step 11: Implement update and draw methods for the ball and cannon objects

// Step 12: Create event handlers for keyboard input

// Step 13: Create event handlers for mouse input

// Step 14: Define key mappings for various keys

// Step 15: Add initialization, reset, and input handling for the ball object

// Step 16: Implement initialization, input handling, and the `ballPosition` function for the cannon object

// Step 17: Note that event listeners should be added to your HTML file, not in the code directly

// Step 18: Initialize keyboard and mouse at the Game.start function

// Step 19: Add an `handleInput(delta)` method to the shooterGameWorld and call it in the main game loop

// Step 20: Copy code to appropriate files and structure your game development process
