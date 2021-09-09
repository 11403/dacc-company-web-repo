"use strict";

// MODAL
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".closeButton");
let round = 0;

function checking() {
  if (window.innerHeight > window.innerWidth) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}
let check = setInterval(checking, 500);

function closeModal() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  clearInterval(check);
  round = 1;
  //console.log("clicked button");
}

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function rechecking() {
  if (round === 1 && window.innerHeight < window.innerWidth) {
    //console.log("restarting");
    check = setInterval(checking, 500);
    round = 0;
  }
}

let recheck = setInterval(rechecking, 500);
// I DID IT!!! Basically just did the Modal Project right here folks

document.addEventListener("keydown", function (key) {
  if (key.key === "Escape") {
    closeModal();
  }
});

//OK now I really did it

// GAMEPLAY

const score0El = document.querySelector("#subScore0");
const score1El = document.querySelector("#subScore1");
const diceEl = document.querySelector(".buttons.image");
const newGame = document.querySelector("#newGame");
const hold = document.querySelector("#hold");
const roll = document.querySelector("#roll");
const player1 = document.querySelector(".subBody.left");
const player2 = document.querySelector(".subBody.right");
let gameRound = 0;
let currentScore = 0;
let activePlayer = 0;
let keepScores = [0, 0];
let mainScore0 = document.querySelector(".bigScore.left");
let mainScore1 = document.querySelector(".bigScore.right");
let mainScores = [mainScore0, mainScore1];
const ugh = ["left", "right"];
//  starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// new game function
newGame.addEventListener("click", function () {
  // 1. display dice
  diceEl.src = `dice-1.png`;
  diceEl.classList.remove("hidden");
  document.querySelector(".body").classList.remove("invert");
  document.querySelector("body").classList.remove("backgroundInvert");
  document.querySelector(".subBody.right").classList.remove("winner");
  document.querySelector(".subBody.left").classList.remove("winner");
  activePlayer = 0;
  player1.classList.add("active");
  player2.classList.remove("active");
  mainScores[0].textContent = 0;
  mainScores[1].textContent = 0;
  keepScores[0] = 0;
  keepScores[1] = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  // 3. my thing
  gameRound = 1;
});

roll.addEventListener("click", function () {
  // check if game has started
  if (gameRound === 1) {
    // 1.generate random dice roll
    const randomRoll = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomRoll}.png`;
    // 2. check if user rolled a one. If so switch to the next player
    if (randomRoll !== 1) {
      currentScore += randomRoll;
      document.querySelector(
        `#subScore${activePlayer}`
      ).textContent = currentScore;
    } else {
      document.querySelector(`#subScore${activePlayer}`).textContent = 0;
      currentScore = 0;
      if (activePlayer === 0) {
        activePlayer = 1;
        player1.classList.remove("active");
        player2.classList.add("active");
      } else {
        activePlayer = 0;
        player1.classList.add("active");
        player2.classList.remove("active");
      }
    }
  } else {
    alert("Please Start the Game");
  }
});

hold.addEventListener("click", function () {
  if (gameRound == !1) {
    alert("Please Start the Game");
    return;
  }
  keepScores[activePlayer] += currentScore;
  mainScores[activePlayer].textContent = keepScores[activePlayer];
  document.querySelector(`#subScore${activePlayer}`).textContent = 0;
  currentScore = 0;

  if (keepScores[activePlayer] >= 100) {
    console.log(keepScores[activePlayer]);
    document.querySelector(".body").classList.add("invert");
    document.querySelector("body").classList.add("backgroundInvert");
    document
      .querySelector(`.subBody.${ugh[activePlayer]}`)
      .classList.add("winner");
    alert(`Congratulations! Player ${activePlayer + 1} Wins!`);
    gameRound = 0; 
  }

  if (activePlayer === 0) {
    activePlayer = 1;
    player1.classList.remove("active");
    player2.classList.add("active");
  } else {
    activePlayer = 0;
    player1.classList.add("active");
    player2.classList.remove("active");
  }
});

// Eh it's done
