function Enemy() {
    ThreeColorGameObject.call(this, sprites.enemy2_red, sprites.enemy2_green, sprites.enemy2_blue);
    this.color = this.calculateRandomColor();
    this.speed = 0;
    this.reset();
    // this.interactable = true;
    this.radius = new Vector2d();
    this.speedUpRate = 20;
}

Enemy.prototype = Object.create(ThreeColorGameObject.prototype);

Enemy.prototype.reset = function() {
    this.speed = Math.random()*80+50 + this.extraSpeed;
    this.moveOut();
    this.color = this.calculateRandomColor();
    // console.log(this.targetColor);
}

Enemy.prototype.moveOut = function() {
    position1 = new Vector2d((Math.round(Math.random()))*Canvas2D.canvas.width,Math.random()*Canvas2D.canvas.height);
    position2 = new Vector2d(Math.random()*Canvas2D.canvas.width,(Math.round(Math.random()))*Canvas2D.canvas.height);
    if(Math.round(Math.random()) == 0)
        this.position = new Vector2d(position1.x, position1.y);
    else
        this.position = new Vector2d(position2.x, position2.y);
    this.velocity = new Vector2d(0,0);
}

Enemy.prototype.calculateRandomColor = function () {
    var randomval = Math.floor(Math.random() * 3);
    if (randomval == 0)
        return Color.red;
    else if (randomval == 1)
        return Color.green;
    else
        return Color.blue;
};

Enemy.prototype.update = function(delta) {
    if(!Game.paused) {
        this.extraSpeed = (Game.gameWorld.score/this.speedUpRate);
        // console.log(this.speed);
        ThreeColorGameObject.prototype.update.call(this, delta);
        let angle = Math.atan2((Game.gameWorld.cannon.colorPosition.y-this.position.y),(Game.gameWorld.cannon.colorPosition.x-this.position.x));
        this.velocity = new Vector2d(Math.cos(angle)*this.speed,Math.sin(angle)*this.speed);
        //Added a conditional statement that resets the balloon and then changes the position if the balloon touches the cannon
        if(Game.objectsInteracting(this,18*1.5*Canvas2D.getScale().x,Game.gameWorld.cannon,33*1.5*Canvas2D.getScale().x)) {
            // this.paused = true;
            console.log("touched cannon");
            Game.gameWorld.lives --;
            this.extraSpeed -= 20;
            if(Game.gameWorld.lives>0)
                this.reset();
        }
    }
};

//draw method is fine