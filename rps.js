function getComputerChoice(){                                               // This function gets response from computer by indexing value by random function in math
    let arr = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random()*3);
    let computerselect = (arr[index]);
    return computerselect
    
}
let computerSelection = getComputerChoice();

function getUserChoice(){                                                       // This function collects response from user from prompt
    let promptValue = prompt("Enter Your Choice: Rock, Paper, Scissors");
    let lowerCase = promptValue.toLowerCase();
    let userSelection = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return userSelection;

}

let userSelection = getUserChoice();

if (computerSelection === userSelection) {                                  // THIS CHECK BOTH USER AND COMPUTER CHOICE ARE SAME AND CONSOLE PRINTS DRAW
    console.log("Draw");
} 

else if (userSelection === "Rock") {                                        // THIS CHECK IF USER SELECTS ROCK
    if (computerSelection === "Paper") {                                            // AND COMPUTER SELECTS PAPER CONSOLE PRINT COMPUTER WIN
        console.log("COMPUTER WIN!!!");                                             
        
    }
    else if(computerSelection === "Scissors") {
        console.log("USER WIN!!!");                                                 // OR COMPUTER SELECTS SCISSORS CONSOLE PRINT USER WIN

    }
}

else if (userSelection === "Paper") {                                      // THIS CHECKS IF USER SELECTS PAPER 
    if (computerSelection === "Rock") {                                          // AND COMPUTER SELECTS ROCK
        console.log("USER WIN!!!")                                               // CONSOLE PRINT USER WIN
                                                     
        
    }

    else if(computerSelection === "Scissors") {                         
        console.log("COMPUTER WIN!!!")                                          // OR COMPUTER SELECTS SCISSORS CONSOLE PRINT COMPUTER WIN

    }


}

else if (userSelection === "Scissors") {                                            // THIS CHECKS IF USER SELECTS SCISSORS
    if (computerSelection === "Rock") {                                                     // AND COMPUTER SELECT ROCK COMPUTER WIN
        console.log("COMPUTER WIN!!!");                                                                             
        
    }

    else if (computerSelection === "Paper") {                                               //OR COMPUTER SELECT PAPER USER WIN  
        console.log("USER WIN!!!");
    
    }

}

console.log("YOU SELECT:",userSelection);
console.log("COMPUTER SELECT:",computerSelection);
