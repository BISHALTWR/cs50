let colorcode = 0;
start = function () {
    canvas = document.getElementById("gameloopy");
    context = canvas.getContext("2d");
    main_loop();
}

function update() {
    colorcode = (colorcode + 1)%3;
}

function changecolor () {
    var color =["red","green","blue"];
    context.fillStyle = color[colorcode];
    context.fillRect(0,0,canvas.width,canvas.height);
}

function main_loop() {
    update();
    changecolor();
    window.setTimeout(main_loop,1000/1); //after 1000ms or 1sec, load main_loop?
}
document.addEventListener("DOMContentLoaded",start);
