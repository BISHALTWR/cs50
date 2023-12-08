count=0;
changeCanvasColor = function() {
    var canvas = document.getElementById("firstcanvas");
    var context = canvas.getContext("2d");
    if(count%3==0) {
        context.fillStyle = "red";
    } else if(count%3==1) {
        context.fillStyle = "green";
    } else {
        context.fillStyle = "blue"
    }
    context.fillRect(0,0,canvas.width,canvas.height);
    count++;
}
document.addEventListener('click', changeCanvasColor);
