function Cannon() {
    ThreeColorGameObject.call(this,sprites.cannon_red, sprites.cannon_green, sprites.cannon_blue);
    this.origin = new Vector2d(34*this.scale,34*this.scale);
    this.position = new Vector2d(Game.size.x/2,Game.size.y/2);
    this.colorPosition = this.position.subtract(this.size.divideBy(2/this.scale));
}
Cannon.prototype = Object.create(ThreeColorGameObject.prototype);

Cannon.prototype.handleInput = function() {
    if(!Game.paused) {
        if(Keyboard.keyDown === Keys.R)
            this.currentColor = this.colorRed;
        else if(Keyboard.keyDown === Keys.G)
            this.currentColor = this.colorGreen;
        else if(Keyboard.keyDown === Keys.B)
            this.currentColor = this.colorBlue;

        var opposite = Mouse.position.y - this.position.y;
        var adjacent = Mouse.position.x - this.position.x;
        this.rotation = Math.atan2(opposite, adjacent);
    }
}

Cannon.prototype.draw = function() {
    if(!this.visible)
        return;
    Canvas2D.drawImage(sprites.cannon_barrel, this.position, this.rotation, this.scale, this.origin);
    if(!Game.gameWorld.ball.shooting)
        Canvas2D.drawImage(this.currentColor, this.colorPosition,0,this.scale);
};

Cannon.prototype.update = function() {
    //Nothing here
}

Object.defineProperty(Cannon.prototype, "ballPosition",
{
    get: function () {
        var opposite = Math.sin(this.rotation) * sprites.cannon_barrel.width * 0.6;
        var adjacent = Math.cos(this.rotation) * sprites.cannon_barrel.width * 0.6;
        return new Vector2d(this.position.x + adjacent, this.position.y + opposite);
    }
});