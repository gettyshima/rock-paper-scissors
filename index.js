console.log("hello world");
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


function playRound(humanChoice, computerChoice) {
  if(humanChoice == 'rock' && computerChoice == 'scissors'){
    humanScore += 1;
    console.log ("You win! rock beats scissors");
  }else if (humanChoice == 'paper' && computerChoice == 'rock'){
    humanScore +=1;
    console.log("You win! paper beats rock");
  }else if (humanChoice == 'scissors' && computerChoice == 'paper'){
    humanScore +=1;
    console.log("You win! scissors beats paper");
  }else if (humanChoice == computerChoice){
    console.log("You made the same choice, play again!");
  }else{
    computerScore += 1;
    console.log("Computer Wins, you loose")
  }
}


const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();


playRound(humanSelection, computerSelection);

console.log(computerScore);
console.log(humanScore);