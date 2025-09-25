let randNum
let humanInput
let humanScore = 0
let computerScore = 0


function getComputerChoice(){ 
    randNum = Math.floor(Math.random() * 3)
    if (randNum == 0){
        return "rock" 
    } 
    else if (randNum == 1){
        return "paper" 
    }
    return "scissor" 
}

let humanChoice = document.querySelectorAll("button")
let scoreboard = document.querySelector("div")

humanChoice.forEach(btn => {
    btn.style.fontSize = "80px"
    btn.style.border = "10px, solid, gray"
    btn.style.color = "black"})

    scoreboard.style.fontSize = "80px"  




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

function playGame(){
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice() 
    console.log(playRound(humanSelection, computerSelection))
    
    console.log(determineRoundWinner())
}

function determineRoundWinner(human, computer){
    if (human > computer){
        return "Player Wins! (" + human + " : " + computer + ")"
    }
    else if (computer > human){
        return "Computer Wins! (" + human + " : " + computer + ")"
    }
    return "Draw! (" + human + " : " + computer + ")"
}

function determineGameWinner(humanPoints, computerPoints){
    if (humanPoints == 5){
        humanScore = 0
        computerScore = 0
        return "This game's winner is Human!"
    }
    else if (computerPoints == 5) {
        humanScore = 0
        computerScore = 0
        return "This game's winner is Computer!"
    }
}

humanChoice.forEach(btn => {
    btn.addEventListener("click", () => {
        humanInput = btn.textContent.toLowerCase()

        const computerInput = getComputerChoice()
        console.log(playRound(humanInput, computerInput))

        console.log(determineRoundWinner(humanScore, computerScore))
        //If statement prevents undefined from printing every turn
        if (humanScore == 5 || computerScore == 5){
            console.log(determineGameWinner(humanScore, computerScore))
        }
        
        scoreboard.textContent = `Score: ${humanScore} - ${computerScore}`
    })
})