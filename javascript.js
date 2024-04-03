function getComputerChoice()
{
    const num = Math.floor(Math.random() * 3);
    console.log(num)

    switch (num)
    {
        case 0:
            return "rock";
        
        case 1:
            return "paper";
        
        case 2: 
            return "scissors";
    }
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection)
{   
    let result
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection.includes("rock"))
    {
        if (computerSelection.includes("paper"))
        {
            result = "You Lose! Paper beats Rock"
        } 
        else if (computerSelection.includes("rock"))
        {
            result = "Tie! Both played Rock"
        }
        else if (computerSelection.includes("scissors"))
        {
            result = "You Win! Rock beats Scissors"
        }
    } 
    else if (playerSelection.includes("paper"))
    {
        if (computerSelection.includes("paper"))
        {
            result = "Tie! Both played Paper"
        } 
        else if (computerSelection.includes("rock"))
        {
            result = "You Win! Paper beats Rock"
        }
        else if (computerSelection.includes("scissors"))
        {
            result = "You Lose! Scissors beats Paper"
        }
    } 
    else if (playerSelection.includes("scissors"))
    {
        if (computerSelection.includes("paper"))
        {
            result = "You Win! Scissors beats Paper"
        } 
        else if (computerSelection.includes("rock"))
        {
            result = "You Lose! Rock beats Scissors"
        }
        else if (computerSelection.includes("scissors"))
        {
            result = "Tie! Both played Scissors"
        }
    }
    return result
}

const rockBtn = document.querySelector("#rockButton");
const paperBtn = document.querySelector("#paperButton");
const scissorBtn = document.querySelector("#scissorsButton");

rockBtn.addEventListener('click', func = () => { playRound("rock", getComputerChoice())});
paperBtn.addEventListener('click', func = () => { playRound("paper", getComputerChoice())} );
scissorBtn.addEventListener('click', func = () => { playRound("scissors", getComputerChoice())});


