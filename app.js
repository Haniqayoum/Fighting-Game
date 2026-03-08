alert("press Q for left chatacter to move right\nPress P for right character to move left\nPress SPACE for both characters to fight");
var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var left1 = 0;
var left2 = 1000;

function animateChar(e){

if(e.keyCode == 81 && left1 < 800){
left1 += 10;
char1.style.left = left1 + "px";
char1.src = "./gif/left walking.gif";
}

if(e.keyCode == 80 && left2 > 200){
left2 -= 10;
char2.style.left = left2 + "px";
char2.src = "./gif/right walking.gif";
}


if(e.keyCode == 32){

char1.src = "./gif/left fighting.gif";
char2.src = "./gif/right-fighting.gif";

setTimeout(function(){

char1.src = "./gif/left standing.gif";
char2.src = "./gif/right standing.gif";

},800);

}

}

window.onkeydown = animateChar;