const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
    gameFrame = 0;
    cancelAnimationFrame(animationId);
    animate(playerState);
})

const CANVAS_WIDTH = canvas.width = 200;
const CANVAS_HEIGHT = canvas.height = 200;
const playerImage = new Image();
playerImage.src = '../png/spritesheet_ninja/spritesheet_combined.png'


const spriteAnimations = [];
const animationStates = [
    //in image: attack, climb, dead, glide, jump-throw, jump-attack, jump-throw, run, slide, throw, idle
    {
        name : "attack",
        frames : 10,
        width: 536,
        height: 495,
    },
    {
        name : "climb",
        frames : 10,
        width: 284,
        height: 465,
    },
    {
        name : "dead",
        frames : 10,
        width: 482,
        height: 498,
    },
    {
        name : "glide",
        frames : 10,
        width: 443,
        height: 454,
    },
    {
        name : "jump",
        frames : 10,
        width: 362,
        height: 489,
    },
    {
        name : "jump-attack",
        frames : 10,
        width: 504,
        height: 522, //changed
    },
    {
        name : "jump-throw",
        frames : 10,
        width: 362, //changed
        height: 437, //changed
    },
    {
        name : "run",
        frames : 10,
        width: 365, //changed
        height: 458,
    },
    {
        name : "slide",
        frames : 10,
        width: 375, //changed
        height: 351,
    },
    {
        name : "throw",
        frames : 10,
        width: 379,
        height: 457,
    },
    {
        name : "idle", 
        frames : 10,
        width: 234, //Changed
        height: 439,
    },
];

let positionY = 0;
animationStates.forEach((state) => {
    let frames = {
        loc: [],
    };
    let positionX = 0;
    for (let j = 0; j < state.frames; j++) {
        positionX = j * state.width;
        frames.loc.push({ x: positionX, y: positionY });
        positionX += state.width; // Increment positionX for the next frame
    }
    spriteAnimations[state.name] = frames;
    
    positionY += state.height; // Increment positionY for the next animation state
});

delay = 7;
function animate(action, frameIndex = 0) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(
        playerImage,
        spriteAnimations[action].loc[frameIndex].x,
        spriteAnimations[action].loc[frameIndex].y,
        animationStates.find((state) => state.name === action).width,
        animationStates.find((state) => state.name === action).height,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
    );

    frameIndex = (Math.floor(gameFrame/delay)) % spriteAnimations[action].loc.length; // Move to the next frame
    gameFrame++;
    animationId = requestAnimationFrame(() => animate(action, frameIndex));
}

let gameFrame = 0;
animate(playerState); // Change the parameter to a valid animation state from the list below

//in image: attack, climb, dead, glide, jump-throw, jump-attack, jump-throw, run, slide, throw, idle
