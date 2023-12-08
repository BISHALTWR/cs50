let sprites = {};

Game = {
    spritesStillLoading: 0,
    size : undefined,
    extraSpeed : 0,
    bool : true,
    paused : false
}

Game.start = function(x,y) {
    // Canvas2D.initialize();
    this.size = new Vector2d(x,y);
    console.log("Game.start");
    Game.loadAssets();
    Game.assetLoadingLoop();
    Game.gameWorld = null;
};


Game.loadAssets = function() {
    console.log("Game.loadAssets");
    let sprites_location = "assets/sprites/";
    
    //background
    sprites.background = Game.loadSprite(sprites_location + "spr_plain.jpg")
    //ball that gets shot
    sprites.ball_red = Game.loadSprite(sprites_location+"spr_ball_red.png");
    sprites.ball_blue = Game.loadSprite(sprites_location+"spr_ball_blue.png");
    sprites.ball_green = Game.loadSprite(sprites_location+"spr_ball_green.png");
    //cannon_barrel and ball in cannon
    sprites.cannon_barrel = Game.loadSprite(sprites_location+"spr_cannon_barrel2.png");
    sprites.cannon_red = Game.loadSprite(sprites_location+"spr_cannon_red.png");
    sprites.cannon_green = Game.loadSprite(sprites_location+"spr_cannon_green.png");
    sprites.cannon_blue = Game.loadSprite(sprites_location+"spr_cannon_blue.png");
    //balloon
    sprites.enemy2_red = Game.loadSprite(sprites_location+"spr_enemy2_red.png");
    sprites.enemy2_blue = Game.loadSprite(sprites_location+"spr_enemy2_blue.png");
    sprites.enemy2_green = Game.loadSprite(sprites_location+"spr_enemy2_green.png");
    //sprites scorebar, life, gameover, about, help, pause, play
    sprites.bar = Game.loadSprite(sprites_location+"spr_scorebar.jpg");
    sprites.lives = Game.loadSprite(sprites_location+"spr_life.png");
    sprites.gameover = Game.loadSprite(sprites_location+"spr_gameover.png");
    sprites.about = Game.loadSprite(sprites_location+"spr_about.png");
    sprites.help = Game.loadSprite(sprites_location+"spr_help.png");
    sprites.play = Game.loadSprite(sprites_location+"spr_play.png");
    sprites.pause = Game.loadSprite(sprites_location+"spr_pause.png");
    // console.log("Done with loadAsset"); //error here
}

Game.loadSprite = function(imageSrc) {
    var image = new Image();
    image.src = imageSrc;
    Game.spritesStillLoading ++;
    image.onload = function() {
        Game.spritesStillLoading --;
    }
    return image;
};

Game.assetLoadingLoop = function() {
    console.log("Game.assetLoadingLoop");
    if(Game.spritesStillLoading > 0)
    requestAnimationFrame(Game.assetLoadingLoop);
else {
    // console.log("All sprites loaded.");
        Canvas2D.initialize();
        Mouse.initialize();
        Keyboard.initialize();
        Game.gameWorld = new GameWorld(); //Game world initialization
        Game.drawMainMenu();
        // Game.mainloop(); //Called from drawMainMenu
    }
};

Game.drawMainMenu = function(){
    // console.log("here");
    Game.gameWorld.drawMainMenu();
};

Game.mainloop = function() {
    // console.log("Main loop called.");
    if(Game.bool == true) {
        let delta = 1/60;
        Game.gameWorld.handleInput(delta);
        if(Keyboard.keyDown === Keys.escape) {
            Game.paused = false;
            Game.bool = false;
            Game.gameWorld.reset();
            Mouse.leftClicked = false;
            Game.gameWorld.drawMainMenu();
        }
        else if(Keyboard.keyDown === Keys.P) {
            Keyboard.keyDown = -1;
            console.log("Paused");
            Game.paused = !Game.paused;
            if(!Game.paused)
                Canvas2D.drawImage(sprites.play,new Vector2d(Game.size.x,Game.size.y));
            else
                Canvas2D.drawImage(sprites.pause,new Vector2d(Game.size.x,Game.size.y));
            window.requestAnimationFrame(Game.mainloop);
        }
        else {
            Canvas2D.clear();
            Game.gameWorld.update(delta);
            if(Game.bool == true) {
                Game.gameWorld.draw();
                Mouse.reset();
                window.requestAnimationFrame(Game.mainloop);
            }
        }
    }
}

Game.objectsInteracting = function(object1,radius1,object2,radius2) {
    let x1 = object1.position.x; let x2 = object2.position.x;
    let y1 = object1.position.y; let y2 = object2.position.y;
    
    let distance = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
    if(distance <= radius1+radius2)
        return true;
    else
        return false;
}