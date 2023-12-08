"use strict";
const PI = 3.1415;
let Game = { //1
    canvas : undefined,
    context : undefined,
    backgroundSprite: undefined,
    balloonSprite: undefined,
    handSprite: undefined,
    xposition: 0,
    yposition: 0,
    balloon_origin: {x:0,y:0},
    hand_location: undefined,
    hand_origin: {x:20,y:46}, //This is the point in image about which it rotates. (Keep axis in mind)
    hand_Rotation: undefined
}

Game.start = function() { //3
    document.onmousemove = mousePos;

    Game.canvas = document.getElementById("playGround");
    Game.context = Game.canvas.getContext("2d");
    
    Game.balloonSprite = new Image();
    Game.balloonSprite.src = "../sprites/spr_balloon.png";
    // Game.balloon_origin = {x:Game.balloonSprite.width/2, y:Game.balloonSprite.height/2}; //This isn't working
    
    Game.handSprite = new Image();
    Game.handSprite.src = "../sprites/hand.png";
    // Game.hand_origin = {x:Game.handSprite.width/2, y:Game.handSprite.height/2};
    Game.hand_location = {x:80, y:(480-84)};

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
    let opposite = Game.yposition -Game.hand_location.y;
    let adjacent = Game.xposition -Game.hand_location.x;
    Game.hand_Rotation = Math.atan2(opposite, adjacent);
    // console.log(opposite,Game.yposition, Game.hand_location.y);
    // console.log(adjacent,Game.xposition, Game.hand_location.x);
    // console.log(Game.hand_Rotation);
};

Game.drawSprite = function(sprite, position,rotation,origin) {//8
    Game.context.save();
    Game.context.translate(position.x,position.y);
    Game.context.rotate(rotation); //rotation is about origin **
    Game.context.drawImage(sprite,0,0,sprite.width,sprite.height,-origin.x,-origin.y,sprite.width,sprite.height);
    Game.context.restore();
};

Game.draw = function() {//7
    Game.context.drawImage(Game.backgroundSprite,0,0,Game.backgroundSprite.width,Game.backgroundSprite.height,0,0,Game.canvas.width,Game.canvas.height);
    Game.drawSprite(Game.handSprite,Game.hand_location,Game.hand_Rotation+PI/2,Game.hand_origin);
    Game.balloon_origin = {x: Game.balloonSprite.width/2, y:Game.balloonSprite.height/2};
    Game.drawSprite(Game.balloonSprite,{x:Game.xposition,y:Game.yposition},0,Game.balloon_origin);
}
Game.main = function() { //4
    clearScreen();
    Game.update();
    Game.draw();

    window.setTimeout(Game.main,60); //timeout_for_now
};

//Need to get position of mouse

function mousePos(evt){
    Game.xposition = evt.pageX; //this can be done by changing origin too
    Game.yposition = evt.pageY; //you can use clientX and clientY but that doesn't take scrolling into account
};