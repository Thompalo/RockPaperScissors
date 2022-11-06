// Generate a random choice for the computer
function getComputerChoice() {
    const computerChoiceArray = ["rock", "paper", "scissors"];
    const computerChoice = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];

    // Display computers choice in console
    //    console.log(computerChoice);
    return computerChoice;

    //

}

// Play five rounds
function game() {
    for (let i = 1; i <= 5; i++) {
    //    console.log(playOneRound(playerSelection, computerSelection));
        let round = playOneRound(playerSelection, computerSelection);
            scoreDiv.textContent = round;
            console.log(round);
            if (round.includes("win")) {
            playerScore++;
            } else if (round.includes("loose")) {
            computerScore++;
            }
            scoreDiv.textContent = "Player score: " + playerScore + " and Computer score: " + computerScore;
            console.log("Player score: " + playerScore + " and Computer score: " + computerScore);
            
        }
    if (playerScore > computerScore) {
        scoreDiv.textContent = "You won this game!"
        console.log("You won this game!")
    } else if (playerScore < computerScore) {
        scoreDiv.textContent = "You won this game!"
        console.log("You won this game!")
    } else {
        scoreDiv.textContent = "It's a tie. Refresh page to try again."
        console.log("It's a tie. Refresh page to try again.")
    }
}


// Play a single round
function playOneRound(playerSelection, computerSelection) {
    //playerSelection = buttons;
    console.log(playerSelection);
    
    computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        scoreDiv.textContent = "You win... Rock beats scissors."
        return "You win... Rock beats scissors.";
    } else if
        (playerSelection === "rock" && computerSelection === "paper") {
            scoreDiv.textContent = "You loose... Paper beats rock."
            return "You loose... Paper beats rock.";
    } else if
        (playerSelection == "paper" && computerSelection == "rock") {
            scoreDiv.textContent = "You win... Paper beats rock."
            return "You win... Paper beats rock.";
    } else if
        (playerSelection == "paper" && computerSelection == "scissors") {
            scoreDiv.textContent = "You loose... Scissors beats paper."
            return "You loose... Scissors beats paper.";
    } else if
        (playerSelection == "scissors" && computerSelection == "paper") {
            scoreDiv.textContent = "You win... Scissors beats paper."
            return "You win... Scissors beats paper.";
    } else if
        (playerSelection == "scissors" && computerSelection == "rock") {
            scoreDiv.textContent = "You loose... Rock beats scissors."
            return "You loose... Rock beats scissors.";
    } else if
        (playerSelection == computerSelection) {
            scoreDiv.textContent = "It's a tie... Try again."
            return "It's a tie... Try again.";
    } else
    scoreDiv.textContent = "Hmmm... Something went horribly wrong."
            return "Hmmm... Something went horribly wrong.";

}

// Define initial variables and initial value
let playerSelection = "rock";
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

// Start the game
// game();

// DOM manipluations and UI

//Score
const scoreDiv = document.querySelector("#score");
scoreDiv.textContent = "The computer choose: " + getComputerChoice();



// Buttons
const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target.innerText);
        playerSelection = e.target.innerText;
        //game();
        playOneRound(playerSelection);
        
    });
});