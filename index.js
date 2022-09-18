   
var canvas= document.getElementById('can');
var ctx = canvas.getContext("2d");


let x =100;
let y = 100;
let radius =50;
let speed = 10;


let upressed = false;
let downpressed =false;
let leftpressed = false;
let rightpressed = false;

function drawgame(){
    requestAnimationFrame(drawgame);
   clearscreen();   
   inputs();
   drawgreenblob();
}

function inputs() {
    if (upressed) {
        y = y - speed;
    }
    if (downpressed) {
        y = y + speed;
    }
    if(leftpressed){
        x= x-speed;
    }
    if (rightpressed) {
        x = x + speed;
    }
}

function drawgreenblob() {
   ctx.fillStyle = "green";
   if(upressed){
    ctx.fillStyle = "red";
   }
   if(downpressed){
    ctx.fillStyle = "blue";
   }
   if(leftpressed){
    ctx.fillStyle = "yello";
   }
   if(rightpressed){
    ctx.fillStyle = "purple";
   }
    
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function clearscreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keydown);
document.body.addEventListener("keyup", keyup);

function keydown(event) {
    
    //UP
    if (event.keycode == 38){
        uppressed = true;
     }
      //down
    if (event.keycode == 40){
        downpressed = true;
     }
      //left
    if (event.keycode == 37){
        leftpressed = true;
     }
      //dright
    if (event.keycode == 39){
        rightpressed = true;
     }
}
function keyup(event) {
    if (event.keycode == 40){
        downpressed = false;
    }
     //UP
     if (event.keycode == 38){
        uppressed = false;
     }
      //left
    if (event.keycode == 37){
        leftpressed = false;
     }
      //right
    if (event.keycode == 39){
        rightpressed = false;
     }
}

drawgame()