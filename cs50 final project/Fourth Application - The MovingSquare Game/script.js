// let canvas = undefined;
// let canvasContext = undefined;

// function start() {
//     canvas = document.getElementById("playground");
//     canvasContext = canvas.getContext("2d");
//     mainloop();
// }

// document.addEventListener("DOMContentLoaded",start);

// function update() {

// }

// function draw() {
//     canvasContext.fillStyle = "blue";
//     canvasContext.fillRect(0,0,canvas.width, canvas.height);
// }

// function mainloop() {
//     update();
//     draw();
//     window.setTimeout(mainloop, 1000/60);
// }

"use strict";
var Game = {
    canvas: undefined,
    canvasContext : undefined,
    xposition: 0,
    yposition:0
}

Game.start = function () {
    Game.canvas = document.getElementById("playground");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.mainloop();
};

document.addEventListener('DOMContentLoaded', Game.start);

Game.update = function() {
    Game.xposition = (Game.xposition + Game.canvas.width/100)%Game.canvas.width;
    Game.yposition = (Game.yposition + Game.canvas.height/100)%Game.canvas.height;
    console.log(Game.xposition);
};

Game.clearCanvas = function() {
    Game.canvasContext.clearRect(0,0,Game.canvas.width, Game.canvas.height);
}

Game.draw = function() {
    Game.canvasContext.fillStyle = "blue";
    Game.canvasContext.fillRect(Game.xposition,Game.yposition,100, 100);
}

Game.mainloop = function () {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainloop, 1000/10);
}

