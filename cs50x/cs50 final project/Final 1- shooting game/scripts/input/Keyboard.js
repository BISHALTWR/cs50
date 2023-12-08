"use strict";

let Keyboard = {
    keyDown: -1
}

Keyboard.initialize = function() {
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
}

function handleKeyDown(evt) {
    Keyboard.keyDown = evt.keyCode; 
}

function handleKeyUp() {
    Keyboard.keyDown = -1;
}