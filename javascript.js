let randNum = Math.floor(Math.random() * 3) 

function getComputerChoice(){ 
    if (randNum == 0){
        return "rock" 
    } 
    else if (randNum == 1){
        return "paper" 
    }
    return "scissor" 
}