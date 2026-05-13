let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
    let randomInt = getRandomIntInclusive(1,3);
    if (randomInt == 1){
        return "rock";
    }else if (randomInt == 2){
        return "paper";
    }else if (randomInt == 3){
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?");
    choice = choice.toLowerCase();
    return choice;
}

let numberOfPlays = 5;
function playGame(){
    while(numberOfPlays > 0){
       function playRound(humanChoice, computerChoice) {
        if(humanChoice == 'rock' && computerChoice == 'scissors'){
            console.log ("You win! rock beats scissors");
            humanScore += 1;
            return humanScore;
        }else if (humanChoice == 'paper' && computerChoice == 'rock'){
            console.log("You win! paper beats rock");
            humanScore += 1;
            return humanScore;
        }else if (humanChoice == 'scissors' && computerChoice == 'paper'){
            console.log("You win! scissors beats paper");
            humanScore += 1;
            return humanScore;
        }else if (humanChoice == computerChoice){
            console.log("You made the same choice, play again!");
            return;
        }else{
            console.log("Computer Wins, you loose")
            computerScore += 1;
            return computerScore;
        }
    }
        playRound(getHumanChoice(), getComputerChoice());
        numberOfPlays -= 1;
    }
    if(humanScore > computerScore){console.log("you win! you scored: " + humanScore + " points, Computer scored: " + computerScore + " points");}
    else if(computerScore > humanScore){
        console.log("you lost! Computer scored: " + computerScore + " points, you scored: " + humanScore + " points" );
    } else if (computerScore == humanScore){
        console.log("Tie! want to play Again?");
    }
}

playGame();