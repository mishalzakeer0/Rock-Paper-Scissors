function getComputerChoice(){
    let arr = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random()*3);
    let computerselect = (arr[index]);
    return computerselect
    
}
let computerSelection = getComputerChoice();

function getUserChoice(){
    let promptValue = prompt("Enter Your Choice: Rock, Paper, Scissors");
    let lowerCase = promptValue.toLowerCase();
    let userSelection = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return userSelection;

}

let userSelection = getUserChoice();

if (computerSelection === userSelection) {
    console.log("Draw");
} 

else if (userSelection === "Rock") {
    if (computerSelection === "Paper") {
        console.log("COMPUTER WIN!!!");
        
    }
    else if(computerSelection === "Scissors") {
        console.log("USER WIN!!!");

    }
}

else if (userSelection === "Paper") {
    if (computerSelection === "Rock") {
        console.log("USER WIN!!!")
        
    }

    else if(computerSelection === "Scissors") {
        console.log("COMPUTER WIN!!!")

    }


}

else if (userSelection === "Scissors") {
    if (computerSelection === "Rock") {
        console.log("COMPUTER WIN!!!");
        
    }

    else if (computerSelection === "Paper") {
        console.log("USER WIN!!!");
    
    }

}

console.log("YOU SELECT:",userSelection);
console.log("COMPUTER SELECT:",computerSelection);
