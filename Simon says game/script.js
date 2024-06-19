let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let gameseq = [];
let userseq = [];

let btncolor = ["red","green","yellow","purple"]

let started = false;
let level = 0;
let highestscore = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("started!!");
        started = true;
        levelup();
    }
});

function bflash(btn){
    btn.classList.add("flashc");
    setTimeout(function(){
        btn.classList.remove("flashc");
    },250);
}

function levelup(){
    userseq = [];  
    level++;
    h2.innerText = `level ${level}`;

    let randno = Math.floor(Math.random() * 3);
    let rancolor = btncolor[randno];
    let colorBtn = document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    bflash(colorBtn);
}

function anscheck(idx){
    if(gameseq[idx] === userseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
            h3.innerHTML = `highest score till now is ${highest()}`;
        }
    }
    else{
        h2.innerHTML = `Game over! your score is <b>${level}</b> <br> press any key to start the game!!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn = this;
    bflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    // console.log(userseq);
    anscheck(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".colorbutton");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
}

function highest(){
    if(highestscore < level){
        highestscore = level;
    }
    return highestscore;
}


