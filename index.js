console.log("hello world");

function getComputerChoice(){
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }
    let randomInt = getRandomIntInclusive(1,3);
    if (randomInt == 1){
        return "Rock";
    }else if (randomInt == 2){
        return "paper";
    }else {
        return "scissors";
    }
}
console.log(getComputerChoice());
