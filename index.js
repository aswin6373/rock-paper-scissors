let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let result;
  let computerChoice;

  result = Math.floor(Math.random() * 3 + 1);

  if (result === 1) {
    computerChoice = 'rock';
  } else if (result === 2) {
    computerChoice = 'paper';
  } else if (result === 3) {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

function getHumanChoice() {
  let result;
  let humanChoice;

  result = prompt('Please choose rock, paper, or scissors:').toLowerCase();

  if (result === 'rock' || result === 'paper' || result === 'scissors') {
    humanChoice = result;
  } else {
    console.log("Invalid input. Please enter rock, paper, or scissors.");
    return getHumanChoice();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Your score: ${humanScore}, Computer score: ${computerScore}`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${humanScore}, Computer score: ${computerScore}`);
  } else {
    computerScore++;
    console.log(`You lose. ${computerChoice} beats ${humanChoice}. Your score: ${humanScore}, Computer score: ${computerScore}`);
  }
}

function playGame() {
  const rounds = parseInt(prompt('How many times do you want to play?'), 10);
  if (isNaN(rounds) || rounds <= 0) {
    console.log("Invalid number of rounds. Exiting the game.");
    return;
  }
  for (let timePlay = 0; timePlay < rounds; timePlay++) {
    const humanSelection = getHumanChoice();
    if (humanSelection === null) {
      return;  // Exit if the input was cancelled
    }
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  
  if (humanScore > computerScore) {
    console.log(`Congratulations! You have won ${humanScore} times. You are the overall winner!`);
  } else if (computerScore > humanScore) {
    console.log(`You lose. The computer has won ${computerScore} times and is the overall winner.`);
  } else {
    console.log(`It's a tie overall. Both you and the computer won ${humanScore} times.`);
  }
}

playGame();
