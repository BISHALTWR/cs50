# PewPew - Shooter Game
#### Video Demo: https://youtu.be/2j8OouPq0H8

## Description
PewPew(for lack of better name) is a web game developed using canvas element and JavaScript.
Use of css is minimal and LAB.js was used to dynamically load .js files.

It requires mouse or device of similar function to work(for now).
It is responsive to change in window size but isn't suitable for smart phones.

## Introduction

My goal with this project was to learn the fundamentals of javascript and use it to create a simple game. 
This is why I opted to not use anything other than canvas and plain JavaScript.
I started by watching some youtube videos mainly from 
>@frankslaboratory.
Then, I went on to read a book 
>Building JavaScript Games for Phones, Tablets, and Desktop. (Arjan Egges)
Rest was trial and error and frequently googling stuff and scratching my head. 
The project took a few weeks of my holidays to complete since I wasn't familiar with the stuff i used here at all.
Breakdown of planning and time allocated to each part of programming is described at the end.

## File Arrangement
Inside the project folder I have *index.html* and *LAB.min.js*.
There are two subfolders *assets* and **scripts*. The former one contains image files used for the game and latter one contains JavaScript files.

## Brief breakdown of each file:
*Game.js* contains code to load assets and mainloop of game.

*Canvas2D.js* contains all the methods related to canvas element like drawImage and drawText along with initialization.
        Canvas2D.canvas points to the canvas element which was obtained via Id.
        Canvas2D.context was set to 2d context which consists of methods like drawImage, drawText etc to make changes to the canvas.

*GameWorld.js* contains parts of code unique to the game.
    It consists of code to load the main menu, and start the game.
    Also, it consists of update, draw and handleInput methods that called those same methods for other game objects. It also initializes ball, cannon and enemies.

input folder contains *Keyboard.js* and *Mouse.js* which contains event handler functions.
    Event handlers for mouse and keyboard allowed me to associate certain events with some function.

references folder contains *Color.js* and *Keys.js* which contain dictionaries for color-hexcode and keys-keyCode pair.

Game_objects folder contains *ThreeColorGameObject.js* file which contains class declaration which is inherited by class declared in *Ball.js*, *Cannon.js*, and *Enemy.js* files.

ThreeColorGameObject consists of draw method which draws the object on canvas, update method which changes velocity of the object with time. Also there are setters and getters to set or obtain color, position and size.

Besides the properties of ThreeColorGameObject which was inherited, ball object contains changes to those methods to make it more suitable for ball object.

Similarly, for Cannon, the draw method and update method are changed since it requires calculation of rotation angle (which was measured using simple trigonometry and position of cannon and object).

Also, handleInput method was changes to make it uniquely suited for Cannon and ball objects.

Enemy.js doesn't require any handling of Input. But, they need to go towards the cannon and after they reach it, collision was detected and their position was changed to a new one. To calculate the random positon, I used Math.random() and scaled and shifted the output such that enemies would summon just outside the play area and I used the same method with little modification to choose a random color too. To detect collision, enemies were treated as circles and when the distance between center of enemy-circle and center of cannon was less than sum of radius, it was inferred that the objects collided after which life was deducted and position of enemy was reset.

*Vector.js* consists of declaration of Vector type along with methods to work with it. It helped me work more easily with position, velocity, size and other entities with x and y values.

## How to run it?
Just download the entire folder and run index.html

## Game Structure
When you open index.html, you are greeted by the main menu where you have three options:
Play : To start the game.
Help : To get a brief rundown of how to play the game.
About : About me and credit.

## Planning and work



    i) Learn the basics from YouTube videos and articles. (Week 1) - Done(Took 1 week)
    ii) Read the Book (Week 2) - Done (Took 2 weeks)


    iii) Actual Development
    1) Start by making folders to arrange file. 
    2) inside input folder create keyboard.js, mouse.js 
    3) inside game objects folder create ball.js, enemy.js, cannon.js and ThreeColorGameObject.js
        //Here, ThreeColorGameObject class will act as parent class whose property will be inherited by ball.js, balloon.js and cannon.js
    4) inside reference create color.js and keys.js
    5) Other objects Canvas2D.js, Game.js, GameWorld.js for asset loading, gameloop, canvas initialization, and initializing gameloop and such
    6) New data structure Vector.js defines object with x and y component and methods that let you work. Vector can be used to represent position, origin, velocity and such.
    7) index.html just contains div with canvas element and uses LAB.js to load the js files.
    8) game-layout.css for making it look better. Complete this at last. Try to make page responsive.

    Step 1-8 done.

    9) Complete color.js and keys.js - Just copy
    10) Complete Keyboard.js
        //create the object
        //create function to handle keyDown
        //create function to handle keyUp
    11) Complete Mouse.js
        //create the object
        //create function to handle MouseMove
        //create function to handle MouseClick
    12) Complete Game.js
        //start method to initialize canvas2D, call loadAssets(), call assetLoadingLoop()
        //loadAssets method
        //loadSprite method with imageSrc parameter
        //Keep track of sprites being loaded using spritesStillLoading variable which is incremented by loadSprite method
        //in assetLoadingLoop, add event listener funciton for image.onload to decrement count of sprites being loaded //nope do this in loadSprite method
        //mainLoop should be called after all sprites loaded.
        //In mainloop, you call gameWorld.handleInput, gameWorld.update, clear canvas, gameWorld.draw(), reset mouse and call mainLoop again
    13) Complete Canvas2D.js
        //initialize method to initialize canvas and canvasContext(using canvas.getContext('2d'))
        //clear method to clear the canvas using clearRect method
        //drawImage method with parameter sprite, position, rotation, scale, origin
            //use save(), tranaslate(), rotate(), drawImage() and restore()
        //drawText to be able to draw text //do this at last
    14) Complete Vector.js
        //define with x and y value. if parameters undefined, assign 0
        //create addTo, multiply(scalar), 

    Step 9-13 done (except drawText) (Week 3)

    Now, for the different part unique to this particular game (Week )
    14) Complete shooterGameWorld.js
        //initialize method that calls gameobject initializer
        //handleInput method that calls event handler for mouse and keyboard
        //update method that calls draw and update method for gameobjects

    15) Complete ThreeColorGameObject class
        //should contain position, velocity, color properties i guess
        //should contain initialize method, draw and update method maybe

    16) Use inheritance to complete ball, enemy, cannon classes

    Steps 14-16 done
    How the game should work:


    //Re-evaluate extraSpeed part. (Done)
    //Increasing difficulty with time.
    //Make a home screen
    //Change gameover screen, background, lives(hearts).

    All Steps Completed. (Programming took around 2 weeks)

## Complexity and Uniqueness
Overall, it took me 5-6 weeks to complete this. I spent 2-5 hrs a day depending on my state of mind.
To the best of my knowledge, i haven't found similar project from other cs50x students and I believe the specifics are unique to the project. Some portion of code was inspired by the resources I studied but I did most of the task myself. 

## It was fun