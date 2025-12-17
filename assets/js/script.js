
highScore()

/* Game */

function newGame() {
   document.getElementById("current-score").innerText = 0;
}

function resetGame() {
   document.getElementById("current-score").innerText = 0;
   document.getElementById("Outcome").innerText = "";
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
            highScore()
       } else {
            gameResult = "You Lose!"
            newGame()
       }
    }
    else if(computedValue == "paper"){ 
       if (playerValue == "scissors"){
            gameResult = "You Win!"
            incrementScore()
            highScore()
       } else {
            gameResult = "You Lose!"
            newGame()
       }
    }
    else if(computedValue == "scissors"){ 
       if (playerValue == "rock"){
            gameResult = "You Win!"
            incrementScore()
            highScore()
       } else {
            gameResult = "You Lose!"
            newGame()
       }
    }
    const matchOutcome = document.querySelector("#Outcome");
    matchOutcome.innerText = gameResult 
} 

function incrementScore() {
    let currentScore = parseInt(document.getElementById("current-score").innerText);
    ++currentScore
    document.getElementById("current-score").innerText = currentScore;
}

function highScore() {
   let currentScore = (document.getElementById("current-score").innerText);
   let highScore = localStorage.getItem("hs")
   if (!highScore){
     localStorage.setItem("hs", 0)
   } else {
      document.getElementById("high-score").innerText = highScore
   }

    
    if (highScore < currentScore) {
        localStorage.setItem("hs", currentScore)
        newScore = localStorage.getItem("hs")
        document.getElementById("high-score").innerText = newScore
    }

}










