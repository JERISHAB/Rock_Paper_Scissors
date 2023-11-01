var choices = ["ROCK", "PAPER", "SCISSOR"];
var i = 0;
var j = 0;
var n = 0;

function getComputerChoice() {
  let compchoice = Math.floor(Math.random() * 3);
  return choices[compchoice];
}

function playRound(playerSelection, computerSelection) {
  // playerSelection = playerSelection.toUpperCase();
  console.log("player: " + playerSelection + " computer: " + computerSelection);

  if (playerSelection === computerSelection) {
    console.log("Its a tie");
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSOR" && computerSelection === "PAPER")
  ) {
    i++;
    console.log(playerSelection + " beats " + computerSelection);
  } else {
    j++;
    console.log(computerSelection + " beats " + playerSelection);
  }
  if (n === 4) {
    determineWinner();
  }
}

function determineWinner() {
  if (i === j) {
    console.log("It's a TIE");
  } else if (i < j) {
    console.log("Computer is the winner");
  } else {
    console.log("Player is the winner");
  }
}

var button = document.getElementById("myButton");

button.addEventListener("click", function () {
  if (n < 5) {
    var userchoice = document.getElementById("userchoice").value.toUpperCase();
    playRound(userchoice, getComputerChoice());
    n++;
  }
});
