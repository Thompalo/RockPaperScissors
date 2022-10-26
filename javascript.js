// Generate a random choice for the computer
function getComputerChoice() {
    const computerChoiceArray = ["rock", "paper", "scissors"];
    const computerChoice = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
// Display computers choice in console:
    //    console.log(computerChoice);
    return computerChoice;
}

// Play five rounds
function game() {
    for (let i = 1; i <= 5; i++) {
    //    console.log(playOneRound(playerSelection, computerSelection));
        let round = playOneRound(playerSelection, computerSelection);
            console.log(round);
            if (round.includes("win")) {
            playerScore++;
            } else if (round.includes("loose")) {
            computerScore++;
            }
            console.log("Player score: " + playerScore + " and Computer score: " + computerScore);
        }
    if (playerScore > computerScore) {
        console.log("You won this game!")
    } else if (playerScore < computerScore) {
        console.log("You lost this game!")
    } else {
        console.log("It's a tie. Refresh page to try again.")
    }
}

// Play a single round
function playOneRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your hand: rock, paper or scissors.").toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win... Rock beats scissors.";
    } else if
        (playerSelection == "rock" && computerSelection == "paper") {
            return "You loose... Paper beats rock.";
    } else if
        (playerSelection == "paper" && computerSelection == "rock") {
            return "You win... Paper beats rock.";
    } else if
        (playerSelection == "paper" && computerSelection == "scissors") {
            return "You loose... Scissors beats paper.";
    } else if
        (playerSelection == "scissors" && computerSelection == "paper") {
            return "You win... Scissors beats paper.";
    } else if
        (playerSelection == "scissors" && computerSelection == "rock") {
            return "You loose... Rock beats scissors.";
    } else if
        (playerSelection == computerSelection) {
            return "It's a tie... Try again.";
    } else
        return "Hmmm... Something went horribly wrong.";

}

// Define initial variables and initial value
let playerSelection = "rock";
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

// Start the game
game();