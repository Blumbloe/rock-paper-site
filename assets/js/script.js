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











