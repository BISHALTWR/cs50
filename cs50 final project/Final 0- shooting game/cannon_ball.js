var cannon = {

};
var ball = {

};

cannon.initialize = function() {
    cannon.position = {x: Game.canvas.width/2, y:440};
    cannon.colorPosition = {x: cannon.position.x - 16 , y: cannon.position.y-15};
    cannon.origin = {x: 34, y: 34};
    cannon.currentColor = sprites.cannon_red;
    cannon.rotation = 0;
};

ball.initialize = function() {
    ball.position = {x: 0, y: 0};
    ball.velocity = {x: 0, y: 0};
    ball.origin = {x: 0, y: 0};
    ball.currentColor = sprites.ball_red;
    ball.shooting = false;
};

ball.update = function(delta) {
    if (ball.shooting) {
        // ball.velocity.x *= 0.99;
        ball.velocity.y += 0;
        ball.position.x += ball.velocity.x * delta;
        ball.position.y += ball.velocity.y * delta;
    }
    else {
        if (cannon.currentColor === sprites.cannon_red)
            ball.currentColor = sprites.ball_red;
        else if (cannon.currentColor === sprites.cannon_green)
            ball.currentColor = sprites.ball_green;
        else
            ball.currentColor = sprites.ball_blue;
        ball.position = cannon.ballPosition();
        ball.position.x -= ball.currentColor.width / 2;
        ball.position.y -= ball.currentColor.height / 2;
    }
    if (shooterGameWorld.isOutsideWorld(ball.position))
        ball.reset();
}

ball.draw = function() {
    if (!ball.shooting)
        return;
    Game.drawImage(ball.currentColor, ball.position, 0, ball.origin);
}

ball.reset = function() {
    ball.position = {x: 0, y: 0};
    ball.shooting = false;
};

ball.handleInput = function() {
    if (Mouse.leftPressed && !ball.shooting) {
        ball.shooting = true;
        ball.velocity.x = (Mouse.position.x - ball.position.x) * 2.5;
        ball.velocity.y = (Mouse.position.y - ball.position.y) * 2.5;
    }
};

cannon.update = function() {
    // Nothing required here.
}

cannon.draw = function() {
    Game.drawImage(sprites.cannon_barrel, cannon.position, cannon.rotation, cannon.origin);
    if(!ball.shooting)
        Game.drawImage(cannon.currentColor, cannon.colorPosition, 0, {x: 0, y: 0});
}

cannon.handleInput = function(delta) {
    if (Keyboard.keyDown === Keys.R)
        cannon.currentColor = sprites.cannon_red;
    else if (Keyboard.keyDown === Keys.G)
        cannon.currentColor = sprites.cannon_green;
    else if (Keyboard.keyDown === Keys.B)
        cannon.currentColor = sprites.cannon_blue;
    
    let opposite = Mouse.position.y - cannon.position.y;
    let adjacent = Mouse.position.x - cannon.position.x;
    cannon.rotation = Math.atan2(opposite, adjacent);
}

cannon.ballPosition = function() {
    var opposite = Math.sin(cannon.rotation) * sprites.cannon_barrel.width * 0.6;
    var adjacent = Math.cos(cannon.rotation) * sprites.cannon_barrel.width * 0.6;
    return {x: cannon.position.x + adjacent, y: cannon.position.y + opposite};
}
