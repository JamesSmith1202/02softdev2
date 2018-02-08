var canvas = document.getElementById("myCanvas");
var stopButton = document.getElementById("stop");
var clearButton = document.getElementById("clear");
var growButton = document.getElementById("grow");
var dvdButton = document.getElementById("dvd");
var context = canvas.getContext('2d');
var frame;
var increment = 1;
var radius = 1;
var dx = 2;
var dy = 2;
var x = 20 + Math.random() * (canvas.width - 40);
var y = 20 +  Math.random() * (canvas.height - 40);

context.lineWidth = 5; 
context.fillStyle = "red";

var stop = function(){
    window.cancelAnimationFrame(frame);
}

var clear = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    radius = 1;
    increment = 1;
    x = 20 + Math.random() * (canvas.width - 40);
    y = 20 +  Math.random() * (canvas.height - 40);
}

var animateGrow = function(){
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

var animateDVD = function(){
    var checkBounds = function(){
        if (x-20 <= 0 || x + 20 >= canvas.width){
            dx *=-1;
        } 
        if(y - 20 <= 0 | y + 20 >= canvas.height){
            dy *= -1;
        }
    }

    var drawCircle = function(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(x, y, 20, 0, 2 * Math.PI, false);
        context.fill();     
        context.stroke();
        frame = window.requestAnimationFrame(drawCircle);
        x += dx;
        y += dy;
        checkBounds();
    }
    stop();
    drawCircle();
}

growButton.addEventListener("click", animateGrow);
dvdButton.addEventListener("click", animateDVD);
stopButton.addEventListener("click", stop);
clearButton.addEventListener("click", clear);
