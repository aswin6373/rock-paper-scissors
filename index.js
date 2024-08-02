let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxScore = 10;

const game = document.querySelector('.game');
const newGameBtn = document.querySelector('.new-btn');
const resultDiv = document.querySelector('.result');
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const hum = document.querySelector('.hum');
const com = document.querySelector('.com');

game.addEventListener('click', function getHumanChoice(e) {
  if (humanScore >= maxScore || computerScore >= maxScore) {
    return; // Do nothing if either player has reached the maximum score
  }

  if (e.target.classList.contains('player')) {
    let humanChoice;
    switch (e.target.classList[1]) { // Use classList to get the specific class
      case 'rock':
        humanChoice = 'rock';
        break;
      case 'paper':
        humanChoice = 'paper';
        break;
      case 'scissors':
        humanChoice = 'scissors';
        break;
      default:
        alert('Unknown choice');
        return; // exit the function if an unknown choice is detected
    }

    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      return choices[Math.floor(Math.random() * 3)];
    }

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
      } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
      ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      } else {
        computerScore++;

        resultDiv.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
      }

      // Update the scores on the page
      playerScoreDiv.textContent = humanScore;
      computerScoreDiv.textContent = computerScore;
    }

    const computerChoice = getComputerChoice();
    hum.textContent = humanChoice;
    com.textContent = computerChoice;
    playRound(humanChoice, computerChoice);

    if (humanScore >= maxScore || computerScore >= maxScore) {
      if (humanScore > computerScore) {
        resultDiv.textContent = `Congratulations! You have won ${humanScore} times. You are the overall winner!`;
      } else if (computerScore > humanScore) {
        resultDiv.textContent = `You lose. The computer has won ${computerScore} times and is the overall winner.`;
      } else {
        resultDiv.textContent = `It's a tie overall. Both you and the computer won ${humanScore} times.`;
      }
      newGameBtn.style.display = 'block'; // Show the "New Game" button
    }
  }
});

// Reset game on 'New Game' button click
newGameBtn.addEventListener('click', function () {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  hum.textContent = '';
  com.textContent = '';
  playerScoreDiv.textContent = humanScore;
  computerScoreDiv.textContent = computerScore;
  resultDiv.textContent = "";
  newGameBtn.style.display = 'none'; // Hide the "New Game" button
});
