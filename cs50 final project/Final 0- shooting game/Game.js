"use strict";

var Game = {
    canvas: undefined,
    canvasContext: undefined,
    gameWorld: undefined,
    spritesStillLoading: 0
};

var shooterGameWorld = {

};

Game.update = function() {
    console.log("update called");
};

Game.draw = function() {
    console.log("draw called");
};

Game.mainLoop = function() {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    let delta = 1/60;
    Game.gameWorld.handleInput(delta);
    Game.gameWorld.update(delta);
    Game.gameWorld.draw();
    Mouse.reset();
    requestAnimationFrame(Game.mainLoop);
};

var sprites = {
    location: "sprites/"
};

Game.loadAssets = function() {
    var loadSprite = function(sprite_name) {
        return Game.loadSprite(sprites.location + sprite_name);
    };

    sprites.background = loadSprite("spr_sky.jpg");
    sprites.cannon_barrel = loadSprite("spr_cannon_barrel.png");
    sprites.cannon_red = loadSprite("spr_cannon_red.png");
    sprites.cannon_green = loadSprite("spr_cannon_green.png");
    sprites.cannon_blue = loadSprite("spr_cannon_blue.png");
    sprites.ball_red = loadSprite("spr_ball_red.png");
    sprites.ball_green = loadSprite("spr_ball_green.png");
    sprites.ball_blue = loadSprite("spr_ball_blue.png");
};

Game.loadSprite = function(imageName) {
    var image = new Image();
    image.src = imageName;
    this.spritesStillLoading += 1;
    image.onload = function() {
        Game.spritesStillLoading -= 1;
    };
    return image;
};

Game.assetLoadingLoop = function() {
    if (Game.spritesStillLoading > 0)
        requestAnimationFrame(Game.assetLoadingLoop);
    else {
        Game.initialize();
        requestAnimationFrame(Game.mainLoop);
    }
};

Game.initialize = function() {
    cannon.initialize();
    ball.initialize();
    Game.gameWorld = shooterGameWorld;
};

Game.start = function(x, y) {
    Game.size = { x: x, y: y };
    Game.canvas = document.getElementById("playGround");
    Game.canvasContext = Game.canvas.getContext("2d");
    Keyboard.initialize();
    Mouse.initialize();
    Game.loadAssets();
    Game.assetLoadingLoop();
};

shooterGameWorld.update = function(delta) {
    ball.update(delta);
    cannon.update(delta);
};

shooterGameWorld.draw = function() {
    Game.drawImage(sprites.background, { x: 0, y: 0 }, 0, { x: 0, y: 0 });
    ball.draw();
    cannon.draw();
};

shooterGameWorld.isOutsideWorld = function(position) {
    return position.x < 0 || position.x > Game.size.x || position.y > Game.size.y
        ||position.y<0;
};

Game.drawImage = function(sprite, position, rotation, origin) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.rotate(rotation);
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height, -origin.x, -origin.y, sprite.width, sprite.height);
    Game.canvasContext.restore();
};

shooterGameWorld.handleInput = function(delta) {
    ball.handleInput(delta);
    cannon.handleInput(delta);
}
