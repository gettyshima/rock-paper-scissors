console.log("hello world");
const humanScore = 0;
const computerScore = 0;

function getComputerChoice(){
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }
    let randomInt = getRandomIntInclusive(1,3);
    if (randomInt == 1){
        return "rock";
    }else if (randomInt == 2){
        return "paper";
    }else {
        return "scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("rock, paper or scissors?");
   humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
console.log(getHumanChoice());

