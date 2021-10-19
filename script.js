function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a tie!";
    }else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
        playerScore = playerScore + 1;
        return `${playerSelection} beats ${computerSelection}. You win!`;
    }else if ((playerSelection == "ROCK" && computerSelection == "PAPER") ||
    (playerSelection == "SCISSORS" && computerSelection == "ROCK") ||
    (playerSelection == "PAPER" && computerSelection == "SCISSORS")){
        computerScore = computerScore + 1;
        return `${computerSelection} beats ${playerSelection}. I win!`;
    }
            
}

var computerSelection;
var playerScore = 0;
var computerScore = 0;
var playerChoice;
var choices = ["ROCK", "PAPER", "SCISSORS"];

for (var i = 0; i < 5; i++){
    do{
    playerChoice = prompt("Choose Rock, Paper, or Scissors");
    }while (choices.includes(playerChoice.toUpperCase()) == false);
    computerSelection = computerPlay();
    alert(playGame(playerChoice.toUpperCase(), computerSelection));
    console.log(`Your Score: ${playerScore} My Score: ${computerScore}`);
}

if (playerScore > computerScore){
    alert("COngratulations! You win the game!");
}else if (computerScore > playerScore){
    alert("I'm sorry. I win the game!");
}else {
    alert("We tied!");
}