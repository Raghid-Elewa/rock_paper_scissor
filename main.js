function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay(){
    let randomInt  = getRandomInt(3);

    if (randomInt === 0){
        return 'rock';
    }
    else if(randomInt === 1){
        return 'paper';
    }
    else if(randomInt ===2){
        return 'scissors';
    }
}



function play(computerSelection, playerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt('rock,paper or scissors?');


    if (computerSelection === 'rock' && playerSelection ==='rock'){
        return 0; //tie
    }
    else if (computerSelection === 'rock' && playerSelection ==='paper'){
        return 1; //win
    }
    else if (computerSelection === 'rock' && playerSelection ==='scissors'){
        return 2; //loss
    }
    else if (computerSelection === 'paper' && playerSelection ==='rock'){
        return 2;
    }
    else if (computerSelection === 'paper' && playerSelection ==='paper'){
        return 0;
    }
    else if (computerSelection === 'paper' && playerSelection ==='scissors'){
        return 1;
    }
    else if (computerSelection === 'scissors' && playerSelection ==='rock'){
        return 1;
    }
    else if (computerSelection === 'scissors' && playerSelection ==='paper'){
        return 2;
    }
    else if (computerSelection === 'scissors' && playerSelection ==='scissors'){
        return 0;
    }
}


function game(rounds){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < rounds; i++){
        let result = play();
        if (result === 0){
            console.log("Tie! Player: " + playerScore + " --- Computer Score: " + computerScore);
        }
        else if(result ===1){
            playerScore++;
            console.log("Won Round! Player: " + playerScore + " --- Computer Score: " + computerScore);
        }
        else if(result===2){
            computerScore++;
            console.log("Lost Round! Player: " + playerScore + " --- Computer Score: " + computerScore);
        }
    }
    
    if (playerScore == computerScore){
        return "Tie Game! Player: " + playerScore + " --- Computer Score: " + computerScore
    }
    else if(playerScore > computerScore){
        return "Won Game! Player: " + playerScore + " --- Computer Score: " + computerScore
    }
    else if(playerScore < computerScore){
        return "Lost Game! Player: " + playerScore + " --- Computer Score: " + computerScore
    }
}


