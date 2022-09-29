function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*choice.length)];
}

function getPlayerChoice(){
    const choice = prompt('please enter "rock", "paper", or "scissors"').toLowerCase();;
    return choice;

}

function playRound(a, playerSelection, computerSelection){

    playerSelection = this.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    const result = document.querySelector('.hand');
    const counter = document.querySelector('.counter');


    if (playerSelection===computerSelection){
        result.textContent = "Its a tie! Select a hand again!";
        return;
    }

    if (playerSelection==='rock'){
        if (computerSelection === 'scissors'){
            counter.textContent = `Win count: ${++winCounter}`;
            result.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}. You Win!`
        }
        else {
            result.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}. You Lose!`
        }
    }
    if (playerSelection==='paper'){
        if (computerSelection === 'rock'){
            counter.textContent = `Win count: ${++winCounter}`;
            result.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}. You Win!`
        }
        else result.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}. You Lose!`
    }
    if (playerSelection==='scissors'){
        if (computerSelection==='paper'){
            counter.textContent = `Win count: ${++winCounter}`;
            result.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}. You Win!`
        }
        else result.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}. You Lose!`
    }

    if (winCounter === 5) {
        counter.textContent = `Win count: ${winCounter}  You are the winner!`
    }


}
 
const buttons = document.querySelectorAll('button')
let winCounter = 0;


buttons.forEach(button => button.addEventListener('click', playRound));



/*
function game(){
    let count = 0;
    let rounds = 5;
    let finalScore = "";
    let roundScore = "";
    for (i=1; i<=rounds; i++){
        alert(`round ${i}`)
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        roundScore=playRound(playerSelection, computerSelection);
        console.log(roundScore);
        if (roundScore.slice(0,8)==="You win!"){
            count++;
        }
        console.log(count);
    }
    if (count>Math.floor(rounds/2)){
        finalScore = "Winner";
    }
    else finalScore = "Loser";
    
    console.log(`The score is ${count}/${rounds}. You are a ${finalScore}!`)
}
*/

