/**
 * Created by itc_user on 6/22/2016.
 */


var currentColor = "black";

// COLORS

var color = ["black", "white", "blue", "red", "green", "yellow", "erase"];

for (var i = 0; i < color.length; i++) {

    var recColors = document.createElement('button');
    recColors.className = "paint " + color[i];
    recColors.addEventListener("click", chooseColor);
    document.body.appendChild(recColors);
}

// CREATING THE CANVAS
var canvasSize = 1000;
var ismousedown = false;

function drawCanvas() {
    var toRemove = document.getElementsByClassName("canvas")[0];
    if (toRemove) {
        toRemove.parentElement.removeChild(toRemove);
    }
    var canvasSize = document.getElementById('sizeinput').value;
    var bordCanvas = document.createElement('div');
    bordCanvas.className = "canvas";
    document.body.appendChild(bordCanvas);

    for (var j = 0; j < (canvasSize / 10); j++) {

        var row = document.createElement('div');
        row.className = "line";
        bordCanvas.appendChild(row);

        for (var i = 0; i < (canvasSize / 10); i++) {
            var pixel = document.createElement('div');
            pixel.className = "pixel";

            pixel.addEventListener('click', painting);
            pixel.addEventListener('mousedown', clickMouseDown);
            pixel.addEventListener('mouseover', changeColor);
            pixel.addEventListener('mouseup', clickMouseUp);

            row.appendChild(pixel);
        }
    }
}

// CHOOSING THE COLOR

function chooseColor(clickEvent) {
    var btn = clickEvent.target;
    currentColor = window.getComputedStyle(btn).backgroundColor;
}

// PAINTING

function painting(clickEvent) {
    clickEvent.target.style.backgroundColor = currentColor;
}

function changeColor(clickEvent) {
    if (ismousedown === true) {
        var currentPixel = clickEvent.target;
        currentPixel.style.backgroundColor = currentColor;
    }
}

function clickMouseDown(clickEvent) {
    ismousedown = true;
}

function clickMouseUp(clickEvent) {
    ismousedown = false;
}


//EREASER

var eraseButton = document.createElement('button');
eraseButton.className = "erease ";
document.body.appendChild(eraseButton);
document.getElementsByClassName("erease")[0].textContent = "erase";

eraseButton.addEventListener('click', erase);

function erase(clickEvent) {

    var array = document.getElementsByClassName("pixel");
    for (var i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = "white";
    }
}

// //CANVAS SIZE

var spanSize = document.createElement('span');

var canvasTextSize = document.createElement('p');
canvasTextSize.className = "text";
canvasTextSize.textContent = "chosse canva's size";


var size = document.createElement("input");
size.type = "number";
size.id = "sizeinput";

var confirmButton = document.createElement('button');
confirmButton.className = "comfirm";
confirmButton.textContent = "Confirm";


confirmButton.addEventListener('click', drawCanvas);

spanSize.appendChild(canvasTextSize);
spanSize.appendChild(size);
document.body.appendChild(spanSize)
spanSize.appendChild(confirmButton);





