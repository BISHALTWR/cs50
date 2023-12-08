Canvas2D = {
    canvas : undefined,
    canvasContext: undefined,
    offset: new Vector2d(0,0)
}

Canvas2D.initialize = function() {
    Canvas2D.canvas = document.getElementById("myCanvas");
    Canvas2D.canvas.style.cursor = "none";
    Canvas2D.div = document.getElementById("gameArea");
    Canvas2D.canvasContext= Canvas2D.canvas.getContext('2d');
    window.onresize = Canvas2D.resize; //each time window is resized, change size of canvas.
    Canvas2D.resize(); //for when the game is started for first time
};

Canvas2D.resize = function() {
    let gameCanvas = Canvas2D.canvas;
    let gameArea = Canvas2D.div;

    var aspectRatio = Game.size.x/Game.size.y;

    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newAspectRatio = newWidth/newHeight;
    
    if(newAspectRatio > aspectRatio) {
        newWidth = newHeight * aspectRatio;
    } else {
        newHeight = newWidth/aspectRatio;
    }

    gameArea.style.width = newWidth + 'px';
    gameArea.style.height = newHeight + 'px';

    //change all the extra spacing equally to margin to center the gameArea
    gameArea.style.marginTop = (window.innerHeight - newHeight) / 2 + 'px';
    gameArea.style.marginLeft = (window.innerWidth - newWidth) / 2 + 'px';
    gameArea.style.marginBottom = (window.innerHeight - newHeight) / 2 + 'px';
    gameArea.style.marginRight = (window.innerWidth - newWidth) / 2 + 'px';

    //Now change the size of canvas
    gameCanvas.width = newWidth;
    gameCanvas.height = newHeight;

    var offset = new Vector2d(0,0);
    if(gameCanvas.offsetParent) {
        do {
            offset.x += gameCanvas.offsetLeft;
            offset.y += gameCanvas.offsetTop;
        } while ((gameCanvas = gameCanvas.offsetParent));
    }
    Canvas2D.offset = offset;
}

Canvas2D.getScale = function() {
    return new Vector2d(Canvas2D.canvas.width / Game.size.x, Canvas2D.canvas.height / Game.size.y);
}
Canvas2D.clear = function() {
    Canvas2D.canvasContext.clearRect(0,0,Canvas2D.canvas.width,Canvas2D.canvas.height);
};

Canvas2D.drawImage = function(sprite, position, rotation, scale, origin) {
    //everything except sprite is optional
    position = typeof position !== 'undefined'? position: new Vector2d(0,0);
    rotation = typeof rotation !== 'undefined'? rotation: 0;
    scale = typeof scale !== 'undefined'? scale: 1;
    origin = typeof origin !== 'undefined'? origin: new Vector2d(0,0);

    var canvasScale = Canvas2D.getScale();
    
    Canvas2D.canvasContext.save();
    Canvas2D.canvasContext.scale(canvasScale.x, canvasScale.y);
    Canvas2D.canvasContext.translate(position.x,position.y);
    Canvas2D.canvasContext.rotate(rotation);
    Canvas2D.canvasContext.drawImage(sprite,0,0,sprite.width,sprite.height,-origin.x,-origin.y,sprite.width*scale,sprite.height*scale);
    Canvas2D.canvasContext.restore();
};

Canvas2D.drawText = function (text, position, color, textAlign, fontname, fontsize) {
    position = typeof position !== 'undefined' ? position : Vector2d(0,0);
    color = typeof color !== 'undefined' ? color : Color.black;
    textAlign = typeof textAlign !== 'undefined' ? textAlign : "top";
    fontname = typeof fontname !== 'undefined' ? fontname : "Courier New";
    fontsize = typeof fontsize !== 'undefined' ? fontsize : "30px";

    var canvasScale = Canvas2D.getScale();
    
    Canvas2D.canvasContext.save();
    Canvas2D.canvasContext.scale(canvasScale.x, canvasScale.y);
    Canvas2D.canvasContext.translate(position.x, position.y);
    Canvas2D.canvasContext.textBaseline = 'top';
    Canvas2D.canvasContext.font = fontsize + " " + fontname;
    Canvas2D.canvasContext.fillStyle = color.toString();
    Canvas2D.canvasContext.textAlign = textAlign;
    Canvas2D.canvasContext.fillText(text, 0, 0);
    Canvas2D.canvasContext.restore();
};

