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




let computerScore=0 ;
let yourScore=0;

function singleRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==computerSelection) return "it's a draw ";
    else if (playerSelection=="rock") {
        if(computerSelection=="scissor"){ 
            ++yourScore;
            return `you won your opponent chose ${computerSelection}`;
        }
        else {
            ++computerScore;
            return  `you lose your opponent chose ${computerSelection}`;
        }
    }
    else if (playerSelection=="scissor") {
        if(computerSelection=="paper"){
            ++yourScore;
             return `you won your opponent chose ${computerSelection}`;
        }
        else {
            ++computerScore;
            return  `you lose your opponent chose ${computerSelection}`;
        }
    }
    else  {
        if(computerSelection=="scissor") {
            ++computerScore;
            return `you lose your opponent chose ${computerSelection}`;
        } 
        else {
            ++yourScore;
            return  `you won your opponent chose ${computerSelection}`;
        }
    }
}


const btn1 =document.querySelector('#stone');
const btn2 =document.querySelector('#paper');
const btn3 =document.querySelector('#scissor');
const para = document.querySelector('.para');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
const result = document.querySelector('.rps');



btn1.addEventListener('click',()=>{
    para.textContent=singleRound("rock",getComputerChoice());
    cScore.textContent =`${computerScore}`;
    pScore.textContent =`${yourScore}`;

    if(computerScore>=5||yourScore>=5){
        
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        const winner = document.createElement('p');
        winner.classList.add('winner');
        result.appendChild(winner);

        if(computerScore>yourScore){
            winner.textContent="you lose";
        }
        else{
            winner.textContent="you win";
        }


    }
    
   
    

});

btn2.addEventListener('click',()=>{
    para.textContent=singleRound("paper",getComputerChoice());
    cScore.textContent =`${computerScore}`;
    pScore.textContent =`${yourScore}`;
    if(computerScore>=5||yourScore>=5){
        
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        const winner = document.createElement('p');
        winner.classList.add('winner');
        result.appendChild(winner);

        if(computerScore>yourScore){
            winner.textContent="you lose";
        }
        else{
            winner.textContent="you win";
        }


    }
    

});

btn3.addEventListener('click',()=>{
    para.textContent=singleRound("scissor",getComputerChoice());
    cScore.textContent =`${computerScore}`;
    pScore.textContent =`${yourScore}`;
    if(computerScore>=5||yourScore>=5){
        
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        const winner = document.createElement('p');
        winner.classList.add('winner');
        result.appendChild(winner);

        if(computerScore>yourScore){
            winner.textContent="you lose";
        }
        else{
            winner.textContent="you win";
        }


    }
    

});
    

