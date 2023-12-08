"use strict";
let mute_button = document.getElementById('music');
let count = -1;

var Game = {
    canvas: undefined,
    canvasContext: undefined,
    balloonSprite: undefined,
    backgroundSprite: undefined,
    backgroundMusic: undefined,
    // xposition : Math.floor(Math.random()*Game.canvas.width),
    xposition: Math.floor(Math.random()*640),
    yposition : 0
};

Game.start = function() {
    Game.backgroundMusic = new Audio();
    Game.backgroundMusic.src = "../sprites/adele_skyfall.mp3";
    mute_button.addEventListener('click', Game.playMusic);

    Game.canvas = document.getElementById("playground");
    Game.canvasContext = Game.canvas.getContext("2d");

    Game.balloonSprite =  new Image();
    Game.balloonSprite.src = "../sprites/spr_balloon.png";

    Game.backgroundSprite = new Image();
    Game.backgroundSprite.src = "../sprites/spr_sky.jpg";

    window.setTimeout(Game.mainLoop, 0); //start looping after 500ms
};

Game.clearCanvas = function() {
    Game.canvasContext.clearRect(0,0,Game.canvas.width, Game.canvas.height);
};

Game.drawImage = function (sprite, position) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height, 0,0, sprite.width, sprite.height);
    Game.canvasContext.restore();
};

Game.update = function() {
    // Game.xposition = Game.xposition;
    if(Game.yposition==Game.canvas.height) {
        Game.xposition = Math.floor(Math.random()*Game.canvas.width);
    }
    Game.yposition = (Game.yposition+1)%(Game.canvas.height+1);
    // console.log(this.xposition,this.yposition);
};

// var balloonPos = {
//     x: Game.xposition,
//     y: Game.yposition
// };

Game.draw = function() {
    // Game.drawImage(Game.backgroundSprite, {x:0,y:0});
    var sprite = Game.backgroundSprite;
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height, 0,0, Game.canvas.width, Game.canvas.height);
    Game.drawImage(Game.balloonSprite, {x:Game.xposition,y:Game.yposition});
    console.log();
};
// Game.drawImage(Game.balloonSprite, {x:100,y:100});

Game.mainLoop = function() {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000/200); //This makes it loop
};
document.addEventListener('DOMContentLoaded', Game.start);

//Things below for music
Game.playMusic = function() {
    console.log(count);
    if(count==0||count==-1) {
        if(count==-1) {
            Game.backgroundMusic.play();
        }
        mute_button.textContent = 'Mute';
        Game.backgroundMusic.volume = 0.1;
        count = 1;
    } else {
        mute_button.textContent = 'Unmute';
        Game.backgroundMusic.volume = 0;
        count = 0;
    }
};


