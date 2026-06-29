function getComputerChoice() {
  // returns value from 0 to 2
  let randomChoice = Math.floor(Math.random() * 3);

  return randomChoice == 0 ? "rock" : randomChoice == 1 ? "paper" : "scissors";
}

function getHumanChoice() {
  return prompt("Your choice is rock, paper or scissors?").trim().toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(
      `You won! Your score is ${humanScore} and computer score is ${computerScore}`,
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lose! Your score is ${humanScore} and computer score is ${computerScore}`,
    );
  } else {
    console.log(
      `It's tie! Your score is ${humanScore} and computer score is ${computerScore}`,
    );
  }

  function playRound(humanChoice, computerChoice) {
    const rules = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
    const isWin = rules[humanChoice] === computerChoice;

    const isTie = humanChoice === computerChoice;

    if (isWin) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
    } else if (isTie) {
      console.log(`It's tie! ${humanChoice} and ${computerChoice}`);
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
    }
  }
}

playGame();
