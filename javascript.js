let randNum = Math.floor(Math.random() * 3) 
let humanInput

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
    return humanInput
}
