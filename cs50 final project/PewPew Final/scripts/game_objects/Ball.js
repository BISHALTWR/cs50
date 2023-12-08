"use strict";

function Ball() {
    ThreeColorGameObject.call(this, sprites.ball_red, sprites.ball_green, sprites.ball_blue);
    this.shooting = false;
    // this.origin = new Vector2d(11,11);
    // this.reset();
}

Ball.prototype = Object.create(ThreeColorGameObject.prototype);

Ball.prototype.handleInput = function(delta) {
    //Add condition that the mouseposition is not inside cannon barrel
    if(Mouse.leftClicked && !this.shooting && Mouse.clickAllowed(Game.gameWorld.cannon.position, 106) && !Game.paused) {
        this.shooting = true;
        let speed = 4800;
        if(Game.gameWorld.score >= 500)
            speed = 8600;
        else if(Game.gameWorld.score >= 250)
            speed = 7000;
        //calculate mouse position direction and shoot with constant speed 1200,1200;
        let angle = Math.atan2((Mouse.position.y-this.position.y-11),(Mouse.position.x-this.position.x)-11);
        this.velocity = new Vector2d(Math.cos(angle)*speed,Math.sin(angle)*speed);
        console.log(this.velocity);
        //play shoot sound
    }
};

Ball.prototype.update = function(delta) {
    if (this.shooting) {
        if(Game.objectsInteracting(this,10,Game.gameWorld.enemy1,18) && (this.color == Game.gameWorld.enemy1.color)) {
            console.log("hit-enemy1");
            Game.gameWorld.score += 10;
            this.reset();
            Game.gameWorld.enemy1.reset();
        }
        if(Game.objectsInteracting(this,10,Game.gameWorld.enemy2,18) && (this.color == Game.gameWorld.enemy2.color)) {
            console.log("hit-enemy2");
            Game.gameWorld.score += 10;
            this.reset();
            Game.gameWorld.enemy2.reset();
        }
        if(Game.objectsInteracting(this,10,Game.gameWorld.enemy3,18) && (this.color == Game.gameWorld.enemy3.color)) {
            console.log("hit-enemy3");
            Game.gameWorld.score += 10;
            this.reset();
            Game.gameWorld.enemy3.reset();
        }
        // this.velocity.x *= 0.99;
        // this.velocity.y += 6;
        ThreeColorGameObject.prototype.update.call(this,delta);
    }
    else {
        this.color = Game.gameWorld.cannon.color;
        this.position = Game.gameWorld.cannon.ballPosition.subtractFrom(this.center);
    }
    if (Game.gameWorld.isOutsideWorld(this.position))
        this.reset();
};

Ball.prototype.reset = function() {
    this.position = new Vector2d(Game.gameWorld.cannon.position.x-16, Game.gameWorld.cannon.position.y-15);
    this.shooting = false;
};


