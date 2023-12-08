"use strict";

let Game = { //1
    canvas : undefined,
    context : undefined,
    backgroundSprite: undefined,
    balloonSprite: undefined,
    xposition: 0,
    yposition: 0
}

Game.start = function() { //3
    document.onmousemove = mousePos;

    Game.canvas = document.getElementById("playGround");
    Game.context = Game.canvas.getContext("2d");
    
    Game.balloonSprite = new Image();
    Game.balloonSprite.src = "../sprites/spr_balloon.png";

    Game.backgroundSprite = new Image();
    Game.backgroundSprite.src = "../sprites/spr_sky.jpg";

    window.setTimeout(Game.main, 0); //no_timeout_for_now
};

document.addEventListener("DOMContentLoaded", Game.start); //2

const clearScreen = function() { //5
    Game.context.clearRect(0,0,Game.canvas.width, Game.canvas.height);
};

Game.update = function() { //6
    //This updates stuff
};

Game.drawSprite = function(sprite, position) {//8
    Game.context.save();
    Game.context.translate(position.x,position.y);
    Game.context.drawImage(sprite,0,0,sprite.width,sprite.height,0,0,sprite.width,sprite.height);
    Game.context.restore();
};

Game.draw = function() {//7
    Game.context.drawImage(Game.backgroundSprite,0,0,Game.backgroundSprite.width,Game.backgroundSprite.height,0,0,Game.canvas.width,Game.canvas.height);
    Game.drawSprite(Game.balloonSprite,{x:Game.xposition,y:Game.yposition})
}
Game.main = function() { //4
    clearScreen();
    Game.update();
    Game.draw();

    window.setTimeout(Game.main,60); //no_timeout_for_now
};

//Need to get position of mouse

function mousePos(evt){
    Game.xposition = evt.pageX-Game.balloonSprite.width/2; //this can be done by changing origin too
    Game.yposition = evt.pageY-Game.balloonSprite.height/2; //you can use clientX and clientY but that doesn't take scrolling into account
};