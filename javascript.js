function getComputerChoice()
{
    const num = Math.random() * 10;
    console.log(num)

    let choice = " "

    if(num < 3)
    {
        choice = "rock"
    } 
    else if (num >= 3 && num < 6)
    {
        choice = "paper"
    }
    else if (num >=6 && num < 10)
    {
        choice = "scissors"
    }

    return choice
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


