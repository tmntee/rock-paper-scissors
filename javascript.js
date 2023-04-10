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

function game()
{   
    let playerPoints = 0
    let computerPoints = 0

    console.log("Welcome to a game of Rock, Paper, Scissors!")
    for (let num = 0; num < 5; num++)
    {
        console.log("Please input a move.")
        let playerChoice = prompt()
        const result = playRound(playerChoice, getComputerChoice())
        if (result.includes("Win"))
        {
            playerPoints++

        } else if (result.includes("Lose"))
        {
            computerPoints++
        }
        console.log(result)
        console.log ("Player matches won: " + playerPoints + " | Computer matches won: " + computerPoints)
    }

    if (computerPoints < playerPoints)
    {
        console.log("You won! :D")
    } 
    else if (computerPoints > playerPoints)
    {
        console.log("You lost! :C")
    } 
    else 
    {
        console.log("Tie! :O")
    }
}

game()