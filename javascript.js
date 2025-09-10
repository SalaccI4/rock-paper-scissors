let randNum = Math.floor(Math.random() * 3) 
let humanInput
let humanScore = 0
let computerScore = 0
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

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

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "Draw! Both sides picked " + humanChoice
    }
    else if (humanChoice == "rock" && computerChoice == "scissor"){
        humanScore++
        return "You Win! Rock beats Scissor!"
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++
        return "You Lose! Paper beats Rock!"
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        return "You Win! Paper beats Rock!"
    }
    else if (humanChoice == "paper" && computerChoice == "scissor"){
        computerScore++
        return "You Lose! Scissor beats Paper!"
    }
    else if (humanChoice == "scissor" && computerChoice == "rock"){
        computerScore++
        return "You Lose! Rock beats Scissor!"
    }
    else if (humanChoice == "scissor" && computerChoice == "paper"){
        humanScore++
        return "You Win! Scissor beats Paper!"
    }
    return "error"
}