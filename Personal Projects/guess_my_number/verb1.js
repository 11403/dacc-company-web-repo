"use strict";

/////////////////////////version 1 //////////////////////////////////

// document.querySelector("#guess").textContent = "Correct Number!";
// console.log(document.querySelector("#guess").textContent);

// document.querySelector("#number").textContent = 13;
// document.querySelector("#score").textContent = 13;

// console.log(document.querySelector("input").value);
// document.querySelector("input").value = 111;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#input").value);

  if (!guess) {
    document.querySelector("#guess").textContent = "NO NUMEBR";
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector("#number").textContent = secretNumber;
    document.querySelector("#highscore").textContent = highscore;
    document.querySelector("#guess").textContent = "Correct Number!";
  } else if (guess === 120) {
    document.querySelector("#number").textContent = "120!!!";
    document.querySelector("#highscore").textContent = 120 + " -FOOL";
    document.querySelector("#guess").textContent = "YOU SMERT";
  } else if (guess > secretNumber) {
    document.querySelector("#guess").textContent = "Too High!";
  } else if (guess < secretNumber) {
    document.querySelector("#guess").textContent = "Too Low!";
  }
  if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#guess").textContent = "You Lose";
      document.querySelector("#score").textContent = 0;
    }
  }
});

document.querySelector(".button.again").addEventListener("click", function () {
  score = 20;
  // in the future i should just link these things with actual variables instead of just syaing them
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("#number").textContent = "???";
  document.querySelector("#guess").textContent = " start guessing ... ";
  document.querySelector("#score").textContent = score;
  document.querySelector("#input").value = " ";
});
