let randNum = Math.floor(Math.random() * 3) 
let humanInput
let humanScore = 0
let computerScore = 0

function getComputerChoice(){ 
    if (randNum == 0){
        return "rock" 
    } 
    else if (randNum == 1){
        return "paper" 
    }
    return "scissor" 
}

function getHumanChoice(){
    humanInput = prompt("Choose: rock, paper, or scissor")
    return humanInput.toLowerCase()
}

// function playRound(humanChoice, playerChoice){
//     if (humanChoice == playerChoice){
//         return "Draw! Both sides picked " + humanChoice
//     }
//     else if (humanChoice == playerChoice)
// }