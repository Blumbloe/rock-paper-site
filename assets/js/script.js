/* Help button */
$(document).ready(function(){
    $("button#help").click(function(){
        $("#hide").toggle();
    });
});

/* Game */

function newGame() {
    game.cScore = 0;
}



const elements = document.querySelectorAll(".gameBtn");
elements.forEach(button =>  {
    button.addEventListener("click", (e) => {
       let buttonOutcome = e.target.getAttribute("data-button-type")

      
       
        console.log(result(buttonOutcome))
    });
});



function computerValue(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    
    switch(randNum){
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
    return computer;
}

function result(buttonValue){
    let computedValue = computerValue()
    let playerValue = buttonValue
    let gameResult = ""

    if(playerValue == computedValue){
        gameResult = "Draw!";
    }
    else if(computedValue == "rock"){ 
       if (playerValue == "paper"){
            gameResult = "You Win!"
            incrementScore()
       } else {
            gameResult = "You Lose!"
       }
    }
    else if(computedValue == "paper"){ 
       if (playerValue == "scissors"){
            gameResult = "You Win!"
            incrementScore()
       } else {
            gameResult = "You Lose!"
       }
    }
    else if(computedValue == "scissors"){ 
       if (playerValue == "rock"){
            gameResult = "You Win!"
            incrementScore()
       } else {
            gameResult = "You Lose!"
       }
    }
    const matchOutcome = document.querySelector("#Outcome");
    matchOutcome.innerText = gameResult 
} 

function incrementScore() {
    let oldScore = parseInt(document.getElementById("current-score").innerText);
    document.getElementById("current-score").innerText = ++oldScore;
}











