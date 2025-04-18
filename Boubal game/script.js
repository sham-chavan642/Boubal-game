var score =0;
var hitrn =0;

//concept of event bubbling -
//jispe click aroge wo element par event raise hoga, aur event listener na milne par,
// event element ke parent par listener dhundega , waha par bhi na milne par 
// parent ke parent ke parent  par listener dhundega
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getnewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
var clutter ="";

for(var i =0; i<70;i++){
    var a = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${a}</div>`;
}

document.querySelector(".pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer(){
    
    //set interval matlab runtime me function chalega , aur 1000 matlab 1 sec me ye funtion chalega
    var timeint = setInterval(function(){
        if(timer > 0){
            
        timer --;
        document.querySelector("#time").textContent =timer;

        }else{
            clearInterval(timeint);
            document.querySelector(".pbtm").innerHTML = `<h1 id="end">GAME OVER</h1>`;
        }
    },1000);
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(hitrn === clickednum){
        increaseScore();
        makeBubble();
        getnewHit();
    }
});

runTimer();


makeBubble();

getnewHit();