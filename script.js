//Global variables for the game

let humanScore = 0;
let computerScore = 0;

// Function - getComputerChoice

function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function - getHumanChoice

function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:");
  return choice;
}

// Function - playRound

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();

  if (human === computerChoice) {
    console.log(`It's a tie! Both chose ${human}.`);
  } else if (
    (human === "rock" && computerChoice === "scissors") ||
    (human === "paper" && computerChoice === "rock") ||
    (human === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${human} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${human}.`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Human:", humanScore, "Computer:", computerScore);