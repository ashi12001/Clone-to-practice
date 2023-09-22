console.log("Hello boys");



function getComputerChoice(){
    A=  Math.floor(Math.random() * 3);
    if (A==0) {
        return "rock";
    }
    if(A==1){
        return "paper";
    }
    if(A==2){
        return "scissor"
    }
}




function singleRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==computerSelection) return "it's a draw ";
    else if (playerSelection=="rock") {
        if(computerSelection=="scissor") return `you won your opponent chose ${computerSelection}`;
        else return  `you lose your opponent chose ${computerSelection}`;
    }
    else if (playerSelection=="scissor") {
        if(computerSelection=="paper") return `you won your opponent chose ${computerSelection}`;
        else return  `you lose your opponent chose ${computerSelection}`;
    }
    else  {
        if(computerSelection=="scissor") return `you lose your opponent chose ${computerSelection}`;
        else return  `you won your opponent chose ${computerSelection}`;
    }
}

alert(singleRound("rOck",getComputerChoice()));





