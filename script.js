const WINNER_SCORE = 5;
const RULES = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

let userScore = 0;
let botScore = 0;

let userChoice = "";
let botChoice = "";

const userScoreSpan = document.querySelector("#user-score");
const botScoreSpan = document.querySelector("#bot-score");

const userChoiceSpan = document.querySelector(".battle-log__user-choice");
const botChoiceSpan = document.querySelector(".battle-log__bot-choice");

const winModalTitle = document.querySelector(".win-modal__title");
const winModalSubtitle = document.querySelector(".win-modal__subtitle");

const userControls = document.querySelector(".user-controls");
const modal = document.querySelector(".win-modal");
const restartBtn = document.querySelector(".restart-btn");

restartBtn.addEventListener("click", () => {
  reset();
  modal.close();
});

userControls.addEventListener("click", (event) => {
  const btn = event.target.closest(".user-controls__btn");
  if (!btn) return;

  userChoice = btn.value;
  botChoice = getBotChoice();

  playRound(userChoice, botChoice);
  updateInterface();
  checkWinner();
});

function getBotChoice() {
  // returns value from 0 to 2
  let randomChoice = Math.floor(Math.random() * 3);

  return randomChoice == 0 ? "rock" : randomChoice == 1 ? "paper" : "scissors";
}

function playRound(userChoice, botChoice) {
  const isWin = RULES[userChoice] === botChoice;

  const isTie = userChoice === botChoice;

  if (isTie) return;

  if (isWin) {
    ++userScore;
  } else {
    ++botScore;
  }
}

function checkWinner() {
  if (userScore >= WINNER_SCORE) {
    let title = "you win!";
    let subtitle = `You won! Your score is ${userScore} and computer score is ${botScore}`;
    updateModalInterface(title, subtitle);
    modal.showModal();
  } else if (botScore >= WINNER_SCORE) {
    let title = "you lose!";
    let subtitle = `You lose in this fight against machine... Your score is ${userScore} and computer score is ${botScore}`;
    updateModalInterface(title, subtitle);
    modal.showModal();
  } else {
    return;
  }
}

function updateInterface() {
  userScoreSpan.textContent = userScore;
  botScoreSpan.textContent = botScore;

  userChoiceSpan.textContent = userChoice;
  botChoiceSpan.textContent = botChoice;
}

function updateModalInterface(title, subtitle) {
  winModalTitle.textContent = title;
  winModalSubtitle.textContent = subtitle;
}

function reset() {
  userScore = 0;
  botScore = 0;

  userChoice = "";
  botChoice = "";

  updateInterface();
  updateModalInterface("", "");
}
