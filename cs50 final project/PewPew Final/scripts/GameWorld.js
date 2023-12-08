function GameWorld() {
    this.cannon = new Cannon();//one cannon
    this.ball = new Ball();
    // console.log(Canvas2D.canvas.width,Canvas2D.canvas.height);
    this.enemy1 = new Enemy();
    this.enemy1.origin = new Vector2d(24,20);
    this.enemy2 = new Enemy();
    this.enemy2.origin = new Vector2d(24,20);
    this.enemy3 = new Enemy();
    this.enemy3.origin = new Vector2d(24,20);

    this.score = 0;
    this.lives = 5;
}

GameWorld.prototype.handleInput = function(delta) {
    // console.log("Shooter Game World called");
    if (this.lives > 0) {
        this.ball.handleInput(delta);
        this.cannon.handleInput();
    }
    else {
        if(Mouse.leftPressed)
            this.reset();
    }
};

GameWorld.prototype.update = function(delta) {
    // console.log("here2");
    //do something here
    if(this.lives > 0) {
        this.ball.update(delta/8);
        this.cannon.update(delta);
        this.enemy1.update(delta);
        if(this.score>=250)
            this.enemy2.update(delta);
        if(this.score>=500)
            this.enemy3.update(delta);
    } else {
        if(Mouse.leftClicked) {
            Game.bool = false;
            this.reset();
            Mouse.leftClicked = false;
            this.drawMainMenu();
        }
    }
    if(this.score == 250) {
        this.enemy1.speedUpRate = 250;
        this.enemy2.speedUpRate = 250;
    }
    else if(this.score == 500) {
        this.enemy1.speedUpRate = 500;
        this.enemy2.speedUpRate = 500;
        this.enemy3.speedUpRate = 500;
    }
    // this.balloon2.update(delta);
    // this.balloon3.update(delta);
};

GameWorld.prototype.drawMainMenu = function() {
    console.log("In main menu.");
    pos = { //for main menu
        title : new Vector2d((Game.size.x)/2.3,(Game.size.y)/4),
        playBar : new Vector2d((Game.size.x-sprites.bar.width)/2,(Game.size.y-1*sprites.bar.height)/2),
        playText : new Vector2d((Game.size.x/2),(Game.size.y-sprites.bar.height*0)/2-10),
        helpBar : new Vector2d((Game.size.x-sprites.bar.width)/2,(Game.size.y+3*sprites.bar.height)/2),
        helpText : new Vector2d((Game.size.x/2),(Game.size.y+sprites.bar.height*4)/2-10),
        aboutBar :  new Vector2d((Game.size.x-sprites.bar.width)/2,(Game.size.y+7*sprites.bar.height)/2),
        aboutText : new Vector2d((Game.size.x/2),(Game.size.y+sprites.bar.height*8)/2-10)
    }
    
    Canvas2D.drawImage(sprites.background);
    Canvas2D.drawImage(sprites.bar,pos.playBar,0,1.5);
    Canvas2D.drawText("Play",pos.playText,Color.white)
    Canvas2D.drawImage(sprites.bar, pos.helpBar,0,1.5);
    Canvas2D.drawText("Help",pos.helpText,Color.white)
    Canvas2D.drawImage(sprites.bar,pos.aboutBar,0,1.5);
    Canvas2D.drawText("About",pos.aboutText,Color.white);
    Canvas2D.drawText("PewPew",pos.title,Color.black,undefined,undefined,'80px');
    
    this.drawCursor();
    this.buttonClicked = "none";
    if(Mouse.leftClicked) {
        this.buttonClicked = this.handleInputMM(Mouse.position);
    }
    if(this.buttonClicked == "play") {
        console.log(this.buttonClicked); 
        Game.bool = true;
        window.requestAnimationFrame(Game.mainloop);
    }
    else if(this.buttonClicked == "help"){
        console.log(this.buttonClicked);
        this.help();
    }
    else if(this.buttonClicked == "about"){
        console.log(this.buttonClicked);
        this.about();
    }
    else
        window.requestAnimationFrame(this.drawMainMenu.bind(this));
}

GameWorld.prototype.help = function() {
    Canvas2D.drawImage(sprites.background);
    pos.help = new Vector2d((Game.size.x-sprites.help.width*0.5)/2,(Game.size.y-sprites.help.height*0.5)/2);
    Canvas2D.drawImage(sprites.help,pos.help,0,0.5);
    Canvas2D.drawText("<<Press Esc to go to Main Menu>>",new Vector2d(pos.help.x,pos.help.y+sprites.help.height/2));
    if(Keyboard.keyDown === Keys.escape) {
        Game.paused = false;
        Game.bool = false;
        Game.gameWorld.reset();
        Mouse.leftClicked = false;
        this.buttonClicked = "none";
        this.drawMainMenu();
    }
    else{
        window.requestAnimationFrame(this.help.bind(this));
    }
};

GameWorld.prototype.about = function() {
    Canvas2D.drawImage(sprites.background);
    pos.about = new Vector2d((Game.size.x-sprites.about.width*0.5)/2,(Game.size.y-sprites.about.height*0.5)/2);
    Canvas2D.drawImage(sprites.about,pos.about,0,0.5);
    Canvas2D.drawText("<<Press Esc to go to Main Menu>>",new Vector2d(pos.about.x,pos.about.y+sprites.about.height/2));
    if(Keyboard.keyDown === Keys.escape) {
        Game.paused = false;
        Game.bool = false;
        Game.gameWorld.reset();
        Mouse.leftClicked = false;
        this.buttonClicked = "none";
        this.drawMainMenu();
    }
    else{
        window.requestAnimationFrame(this.about.bind(this));
    }
};

GameWorld.prototype.handleInputMM = function(mousePos) {
    x=mousePos.x;y=mousePos.y;
    Mouse.leftClicked = false;
    if(x > pos.playBar.x && x<pos.playBar.x+sprites.bar.width*1.5 && y>pos.playBar.y && y<pos.playBar.y+sprites.bar.height*1.5){
        return "play";
    } else if(x > pos.helpBar.x && x<pos.helpBar.x+sprites.bar.width*1.5 && y>pos.helpBar.y && y<pos.helpBar.y+sprites.bar.height*1.5) {
        return "help";
    } else if(x > pos.aboutBar.x && x<pos.aboutBar.x+sprites.bar.width*1.5 && y>pos.aboutBar.y && y<pos.aboutBar.y+sprites.bar.height*1.5) {
        return "about";
    } else {
        return "none";
    }
}

GameWorld.prototype.draw = function() {
    console.log(this.lives);
    //do something here
    // console.log(sprites.background);
    Canvas2D.drawImage(sprites.background);
    Canvas2D.drawImage(sprites.bar, new Vector2d(Game.size.x-sprites.bar.width-120,10),0,1.5);
    lifeBarPos = new Vector2d(Game.size.x-sprites.bar.width*1.5-25,25);
    Canvas2D.drawText("Score: " + this.score,new Vector2d(Game.size.x-sprites.bar.width*1.5,25),Color.white)
    for(let i=0; i<Game.gameWorld.lives;i++) {
        Canvas2D.drawImage(sprites.lives, new Vector2d(20+i*sprites.lives.width*0.8,20),0,0.8);
    }
    // if(!this.ball.shooting)
    this.ball.draw();
    this.cannon.draw();
    this.enemy1.draw();
    if(this.score >= 250)
        this.enemy2.draw();
    if(this.score >= 500)
        this.enemy3.draw();
    this.drawCursor();
    if(Game.paused)
        Canvas2D.drawImage(sprites.play,new Vector2d((Game.size.x-sprites.play.width)/2,(Game.size.y-sprites.play.height)/2));
    // ctx = Canvas2D.canvasContext;
    // ctx.beginPath();
    // ctx.arc(this.cannon.position.x*Canvas2D.getScale().x,this.cannon.position.y*Canvas2D.getScale().y,33*1.5*Canvas2D.getScale().x,0,2*Math.PI);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.arc(this.cannon.position.x*Canvas2D.getScale().x,this.cannon.position.y*Canvas2D.getScale().y,86*1.5*Canvas2D.getScale().x,0,2*Math.PI);
    // ctx.stroke();
    
    // //Drawing enemy circle
    // ctx.beginPath();
    // ctx.arc(this.enemy1.position.x*Canvas2D.getScale().x,this.enemy1.position.y*Canvas2D.getScale().y,18,0,2*Math.PI);
    // ctx.stroke();

    if(this.lives<=0) {
        Canvas2D.drawImage(sprites.gameover, new Vector2d((Game.size.x - sprites.gameover.width)/2, (Game.size.y - sprites.gameover.height)/2));
        Canvas2D.drawText("<<Click to go to Main Menu>>",new Vector2d((Game.size.x - sprites.gameover.width)/2, (Game.size.y - sprites.gameover.height)/2+sprites.gameover.height),Color.black,undefined,undefined,'34px');
    }
};

GameWorld.prototype.drawCursor = function() {
    //Drawing mouse cursor
    ctx = Canvas2D.canvasContext;
    ctx.beginPath();
    ctx.strokeStyle = Game.gameWorld.ball.color;
    ctx.arc(Mouse.positionNoScale.x,Mouse.positionNoScale.y,8,0,2*Math.PI);
    // console.log(Mouse.positionNoScale);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(Mouse.positionNoScale.x - 4, Mouse.positionNoScale.y - 4);
    ctx.lineTo(Mouse.positionNoScale.x + 4, Mouse.positionNoScale.y + 4);
    ctx.moveTo(Mouse.positionNoScale.x + 4, Mouse.positionNoScale.y - 4);
    ctx.lineTo(Mouse.positionNoScale.x - 4, Mouse.positionNoScale.y + 4);
    ctx.stroke();
    ctx.strokeStyle = "black";
}
GameWorld.prototype.reset = function() {
    this.score = 0;
    this.lives = 5;
    this.extraSpeed = 0;
    this.enemy1.reset();
    this.enemy2.reset();
    this.enemy3.reset();
    this.ball.reset();
}

GameWorld.prototype.isOutsideWorld = function (position) {
    return position.x<0||position.x>Game.size.x||position.y>Game.size.y||position.y<0;
}