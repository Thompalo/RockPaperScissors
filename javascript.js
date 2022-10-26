// Generate a random choice for the computer
function getComputerChoice() {
    const computerChoiceArray = ["Rock", "Paper", "Scissors"];
    const computerChoice = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
    console.log(computerChoice);
    return computerChoice;
}
getComputerChoice();

// Play a round

function playOneRound(playerSelection, computerSelection) {

}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();


// Display winner and loser
// Make the game five rounds long