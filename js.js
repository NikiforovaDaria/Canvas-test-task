number1 = number (6, 9);    
summa = number (11, 14);
number2 = summa - number1;

document.getElementById('num1').innerHTML = number1;
document.getElementById('num2').innerHTML = number2;
document.getElementById('sum').innerHTML = summa;

var canvas = document.querySelector('#canvas');
context = canvas.getContext('2d');
context.strokeStyle = '#A020F0';
context.weight = 875;
context.height = 166;

// Initialize coordinates
var x = 12;
var y = 93;
var cm = 13.4;

drawArrow(0, number1);
drawArrow(number1, summa);

function number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawArrow(start, end) {
// Coordinates
var fromx = x + start * cm; 
var fromy = y;
var tox = x + end * cm;
var toy = y;
var qX = fromx + (end - start) / 2 * cm;
var qY = y - (end - start) / 2 * cm;

// Arrow
context.beginPath();
context.moveTo(fromx, fromy);
context.quadraticCurveTo(qX, qY, tox, toy);
context.stroke();
}