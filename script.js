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

// Function - playRound and playGame

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

  // Play 5 rounds with fresh choices each round
    for (let round = 1; round <= 5; round++) {
        console.log(`--- Round ${round} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

  // Final match results
  console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Game over! The computer won the game.");
  } else {
    console.log("The game ended in a tie!");
  }
}

playGame();