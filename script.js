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

console.log(getHumanChoice());