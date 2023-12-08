"use strict";

let Mouse = {
    leftClicked : false,
    leftHeld : false,
    position : new Vector2d(0,0),
    positionNoScale : new Vector2d(0,0)
}

Mouse.initialize = function() {
    document.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
}

function handleMouseMove(evt) {
    var canvasScale = Canvas2D.getScale();
    var canvasOffset = Canvas2D.offset;
    var mx = (evt.pageX - canvasOffset.x) / canvasScale.x;
    var my = (evt.pageY - canvasOffset.y) / canvasScale.y;
    Mouse.position = new Vector2d(mx,my);
    Mouse.positionNoScale = new Vector2d(evt.pageX - canvasOffset.x, evt.pageY - canvasOffset.y);
}

function handleMouseDown(evt) {
    if(evt.which === 1) {
        if(!Mouse.leftHeld)
            Mouse.leftClicked = true;
        Mouse.leftHeld = true;
    }
}

function handleMouseUp(evt) {
    if(evt.which == 1) {
        Mouse.leftHeld = false;
    }
}

Mouse.reset = function() {
    Mouse.leftClicked = false;
}

Mouse.clickAllowed = function(center,radius) {
    let x=Mouse.position.x;let y=Mouse.position.y;
    let bool = ((x-center.x)*(x-center.x) +(y-center.y)*(y-center.y) >= radius*radius)
    return bool ;
}