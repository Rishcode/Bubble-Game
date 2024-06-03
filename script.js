var timerint=6;
var hitint=1;
var score=0;


function makebubble(){
var clutter="";
 for(var i =1 ; i<=133; i++){
    var rn = Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;

 }
document.getElementById('panelbtm').innerHTML=clutter;
}



function timerun(){
    var timerval=setInterval(() => {
        if(timerint>0){
            timerint--;
            document.getElementById('timer').textContent=timerint;

        }
        else{
            clearInterval(timerval);
            document.querySelector("#panelbtm").innerHTML=`<h1>Game Over <h1>`;
        }
    }, 1000);
}
 function gethit(){
    hitint=Math.floor(Math.random()*10);
    document.getElementById('hit').textContent=hitint;

 }

function newscore(){
    score+=10;
    document.getElementById('score').textContent=score;

}
document.querySelector('#panelbtm')
.addEventListener('click', function(det){
    var num=(Number(det.target.textContent));
    if(num===hitint){
        newscore();
        gethit();
    }
    
})


   
makebubble();
timerun();
gethit();










