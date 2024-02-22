let userCount = 0;
let computerCount = 0;
let winner = "";
let limit = 5;
let ultimateWin = "" 

function getComputerChoice() {
  // This function gets response from computer by indexing value by random function in math
  let arr = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  let computerSelect = arr[index];
  return computerSelect;
}

function setUserSelection(selection) {
  const userSelection = selection;
  let computerSelection = getComputerChoice();
  playRound(computerSelection, userSelection);
}

function playRound(computerSelection, userSelection) {

  if (computerSelection === userSelection) {
    // THIS CHECK BOTH USER AND COMPUTER CHOICE ARE SAME AND CONSOLE PRINTS DRAW
    winner = "Draw";
  } else if (userSelection === "Rock") {
    // THIS CHECK IF USER SELECTS ROCK
    if (computerSelection === "Paper") {
      // AND COMPUTER SELECTS PAPER CONSOLE PRINT COMPUTER WIN
      winner = "COMPUTER WIN!!!";
    } else if (computerSelection === "Scissors") {
      winner = "USER WIN!!!"; // OR COMPUTER SELECTS SCISSORS CONSOLE PRINT USER WIN
    }
  } else if (userSelection === "Paper") {
    // THIS CHECKS IF USER SELECTS PAPER
    if (computerSelection === "Rock") {
      // AND COMPUTER SELECTS ROCK
      winner = "USER WIN!!!"; // CONSOLE PRINT USER WIN
    } else if (computerSelection === "Scissors") {
      winner = "COMPUTER WIN!!!"; // OR COMPUTER SELECTS SCISSORS CONSOLE PRINT COMPUTER WIN
    }
  } else if (userSelection === "Scissors") {
    // THIS CHECKS IF USER SELECTS SCISSORS
    if (computerSelection === "Rock") {
      // AND COMPUTER SELECT ROCK COMPUTER WIN
      winner = "COMPUTER WIN!!!";
    } else if (computerSelection === "Paper") {
      //OR COMPUTER SELECT PAPER USER WIN
      winner = "USER WIN!!!";
    }
  }
    ultimateWinner(winner) ;
    document.getElementById("result").innerHTML =
`    ${winner} <br> You Select: ${userSelection} <br> Computer Select: ${computerSelection} <br> User Count ${userCount} <br> Computer Count ${computerCount} <br> ${ultimateWin}`;
}
function ultimateWinner(winner) {
  if (winner === "USER WIN!!!") {
    userCount++;

  } else if (winner === "COMPUTER WIN!!!") {
    computerCount++;
   
  }
  if (userCount === limit) {
    userCount = 0;
    computerCount = 0;
    ultimateWin = "User Is Ultimate Winner"
    
  }
  else if(computerCount === limit) {
    userCount = 0;
    computerCount = 0;
    ultimateWin = "Computer Is Ultimate Winner"
  }
} 
