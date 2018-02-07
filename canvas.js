var canvas = document.getElementById("myCanvas");
var stopButton = document.getElementById("stop");
var clearButton = document.getElementById("clear");
var context = canvas.getContext('2d');
var frame;
var increment = 1;
var radius = 1;

context.lineWidth = 5; 
context.fillStyle = "red";

var stop = function(){
    window.cancelAnimationFrame(frame);
}

var clear = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    radius = 1;
    increment = 1;
}

var animate = function(){
    var checkBounds = function(){
        if (radius == canvas.width/2 || radius == canvas.height/2 || radius == 0){
            increment *= -1;
        }
    }

    var drawCircle = function(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(canvas.width/2, canvas.height/2, radius, 0, 2 * Math.PI, false);
        context.fill();     
        context.stroke();
        frame = window.requestAnimationFrame(drawCircle);
        checkBounds(); 
        radius += increment;
    }
    stop();
    drawCircle();
}

canvas.addEventListener("click", animate);
stopButton.addEventListener("click", stop);
clearButton.addEventListener("click", clear);
