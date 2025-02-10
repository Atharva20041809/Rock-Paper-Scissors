let a=Math.floor((Math.random())*3+1)
let b=0
let boxes=document.querySelectorAll("#you");
let play=document.querySelector(".move");
let winner=document.querySelector(".winner");
let s="";
let x=0;
let y=0;
document.querySelector(".yo").innerText
document.querySelector(".op").innerText
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        s=box.getAttribute("class");
        winner.innerText="";
        b=0;
        document.querySelector(".rock-player").style.width="0px";
        document.querySelector(".paper-player").style.width="0px";
        document.querySelector(".scissors-player").style.width="0px";
        document.querySelector(".rock-computer").style.width="0px";
        document.querySelector(".paper-computer").style.width="0px";
        document.querySelector(".scissors-computer").style.width="0px";
    })
})
play.addEventListener("click",()=>{
    if(s=="rock-you"){
        b=1
        document.querySelector(".rock-player").style.width="400px";
        document.querySelector(".paper-player").style.width="0px";
        document.querySelector(".scissors-player").style.width="0px";
    }else if(s=="paper-you"){
        b=2
        document.querySelector(".rock-player").style.width="0px";
        document.querySelector(".paper-player").style.width="400px";
        document.querySelector(".scissors-player").style.width="0px";
    }else if(s=="scissors-you"){
        b=3
        document.querySelector(".rock-player").style.width="0px";
        document.querySelector(".paper-player").style.width="0px";
        document.querySelector(".scissors-player").style.width="400px";
    }
    if(a==1){
        document.querySelector(".rock-computer").style.width="400px";
        document.querySelector(".paper-computer").style.width="0px";
        document.querySelector(".scissors-computer").style.width="0px";
    }else if(a==2){
        document.querySelector(".rock-computer").style.width="0px";
        document.querySelector(".paper-computer").style.width="400px";
        document.querySelector(".scissors-computer").style.width="0px";
    }else if(a==3){
        document.querySelector(".rock-computer").style.width="0px";
        document.querySelector(".paper-computer").style.width="0px";
        document.querySelector(".scissors-computer").style.width="400px";
    }
    if(a==b){
        winner.innerText="Tie";
    }else if((b==1 && a==3) || (b==2 && a==1) || (b==3 && a==2)){
        winner.innerText="You won";
        document.querySelector(".yo").innerText=parseInt(document.querySelector(".yo").innerText)+1

    }else{
        winner.innerText="Computer won";
        document.querySelector(".op").innerText=parseInt(document.querySelector(".op").innerText)+1
    }
})
