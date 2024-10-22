document.addEventListener("DOMContentLoaded",function(){
const nave = document.getElementById("nave");
let posY = 0;
let posX = 80;

document.addEventListener("keydown",function(event){
    const key = event.key;
    if(key == "w" || key == "ArrowUp"){
        keys = true;
        posY+=20;
    }else if(key == "s" || key == "ArrowDown"){
        keys = true;
        posY-=20;
    }else if(key == "d" || key == "ArrowRight"){
        keys = true;
        posX+=20;
    }else if(key == "a" || key == "ArrowLeft"){
        keys = true;
        posX-=20;
    }
    nave.style.bottom = posY+"px"
    nave.style.left = posX+"px"
});
});
