function ThreeColorGameObject(redSprite,greenSprite,blueSprite) {
    this.colorRed = redSprite;
    this.colorGreen = greenSprite;
    this.colorBlue = blueSprite;
    this.currentColor = this.colorRed; //default color red
    this.position = new Vector2d(0,0);
    this.velocity = new Vector2d(0,0);
    this.color = {x:0,y:0};
    this.origin = new Vector2d(0,0);
    this.visible = true;
    this.scale = 1.2;
    this.extraSpeed = 0;
};

ThreeColorGameObject.prototype.draw = function() {
    if(!this.visible)
        return;
    Canvas2D.drawImage(this.currentColor, this.position, this.rotation, this.scale, this.origin);
};

ThreeColorGameObject.prototype.update = function(delta) {
    this.position.addTo(this.velocity.multiply(delta));
};

Object.defineProperty(ThreeColorGameObject.prototype, "color",
{
    get: function () {
        if (this.currentColor === this.colorRed)
            return Color.red;
        else if (this.currentColor === this.colorGreen)
            return Color.green;
        else if (this.currentColor === this.colorBlue)
            return Color.blue;
    },
    set: function (value) {
        if (value === Color.red)
            this.currentColor = this.colorRed;
        else if (value === Color.green)
            this.currentColor = this.colorGreen;
        else if (value === Color.blue)
            this.currentColor = this.colorBlue;
    }
});

Object.defineProperty(ThreeColorGameObject.prototype, "size",
{
    get: function () {
        return new Vector2d(this.currentColor.width, this.currentColor.height);
    }
});

Object.defineProperty(ThreeColorGameObject.prototype,"center",
    {
        get:function() {
            return new Vector2d(this.currentColor.width/2, this.currentColor.height/2);
        }
    }
);

Object.defineProperty(ThreeColorGameObject.prototype,"centerPosition",
    {
        get:function() {
            return new Vector2d(this.currentColor.width/2+this.position.x,this.currentColor.height/2+this.position.y);
        }
    }
)

