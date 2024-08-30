
let button=["red","blue","green","yellow"];
let gamePattern=[];
let userClickPattern=[];
let btn = document.querySelectorAll(".btn");
let bool=true;
let level=0;
let h1=document.querySelector("#level-title");
let body=document.querySelector("body");



document.addEventListener("keypress",()=>{
    if(bool){
        compTurn();
        bool=false;

    }

})
btn.forEach((bt)=>{

    bt.addEventListener("click",(evt)=>{
        let button=evt.target.id;
        //console.log(button);
        userClickPattern.push(button);
        console.log(userClickPattern);
        playSound(button); 
        animatePress(button);
        checkAnswer(userClickPattern.length-1);
    });

})




let flash=(color)=>{

    $("#"+ color).fadeOut(100).fadeIn(100);

}

let compTurn=()=>{
    userClickPattern=[];
    level++;
    h1.innerText="LeveL "+level;

    let random=Math.floor(Math.random()*4);
    let randomChooseColor=button[random]
    gamePattern.push(randomChooseColor);
    flash(randomChooseColor);
    playSound(randomChooseColor);
    animatePress(randomChooseColor);

}
let playSound=(sound)=>{
    let audio = new Audio(sound + ".mp3")
    audio.play();

}

let animatePress=(color)=>{

    let animate=document.querySelector("#"+color);
    animate.classList.add("pressed");
    setTimeout(()=>{
        animate.classList.remove("pressed");



    },100);

}

let checkAnswer=(index)=>{
    if(gamePattern[index]===userClickPattern[index]){
        if(userClickPattern.length===gamePattern.length){

            setTimeout(()=>{
                compTurn();


            },1000)
        }
    
        


    }
    else{

        playSound("wrong");
           body.classList.add("game-over");
           setTimeout(()=>{
            body.classList.remove("game-over");


           },200)
           h1.innerText="Game over, Press Any Key to Restart";
          
        startOver();
    }


}

let startOver=()=>{
    bool=true;
    gamePattern=[];
    level=0;



}






