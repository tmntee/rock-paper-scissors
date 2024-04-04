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

const resultDisplay = document.querySelector("#resultDisplay");

let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;


function resetGameValues()
{
    computerScore = 0;
    playerScore = 0;
    roundCounter = 0;
}


function playRound(playerSelection, computerSelection)
{   
    let result
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection.includes("rock"))
    {
        if (computerSelection.includes("paper"))
        {
            result = "You Lose! Paper beats Rock."
        } 
        else if (computerSelection.includes("rock"))
        {
            result = "Tie! Both played Rock."
        }
        else if (computerSelection.includes("scissors"))
        {
            result = "You Win! Rock beats Scissors."
        }
    } 
    else if (playerSelection.includes("paper"))
    {
        if (computerSelection.includes("paper"))
        {
            result = "Tie! Both played Paper."
        } 
        else if (computerSelection.includes("rock"))
        {
            result = "You Win! Paper beats Rock."
        }
        else if (computerSelection.includes("scissors"))
        {
            result = "You Lose! Scissors beats Paper."
        }
    } 
    else if (playerSelection.includes("scissors"))
    {
        if (computerSelection.includes("paper"))
        {
            result = "You Win! Scissors beats Paper."
        } 
        else if (computerSelection.includes("rock"))
        {
            result = "You Lose! Rock beats Scissors."
        }
        else if (computerSelection.includes("scissors"))
        {
            result = "Tie! Both played Scissors."
        }
    }

    if (result.includes("Win"))
    {
        playerScore++;
    }
    else if (result.includes("Lose"))
    {
        computerScore++;
    }

    roundCounter++;
    resultDisplay.textContent = `Round ${roundCounter} out of 5:` + result + `Player Score: ${playerScore} | Computer Score: ${computerScore} `;

    if (roundCounter === 5)
    {   
        if (playerScore > computerScore)
        {
            resultDisplay.textContent += 'Player wins! :D';
        }
        else if (playerScore === computerScore)
        {
            resultDisplay.textContent += 'Tie! :/';
        }
        else if (computerScore > playerScore)
        {
            resultDisplay.textContent += 'Computer wins! :C'
        }
        resetGameValues();
    }
}

const rockBtn = document.querySelector("#rockButton");
const paperBtn = document.querySelector("#paperButton");
const scissorBtn = document.querySelector("#scissorsButton");

rockBtn.addEventListener('click', func = () => { playRound("rock", getComputerChoice())});
paperBtn.addEventListener('click', func = () => { playRound("paper", getComputerChoice())} );
scissorBtn.addEventListener('click', func = () => { playRound("scissors", getComputerChoice())});



