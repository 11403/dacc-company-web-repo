"use strict";

// 1st Part - setting up the question and answer
const signs = ["x", "/", "+", "-"];
let components = 2;
// 2nd Part - conecting the question and answer to HTML
let finalProduct;
let currentAnswer;
let currentQuestion;
let inputAnswer;
let score = 0;
let highScore = 0;
// 3rd Part - adding the pre - timer
let delay = 3;
let trueDelay = `${delay}000`;
let mainTime;
let mainTimerExternal = 15;
// Part 4 - turning the functions on and off
let iteration = 0; // current iteration
//Part 5 - returning elements to their orginal values
const initalTimer = document.querySelector(".timer").textContent;
const initalUpdate = document.querySelector(".update").textContent;
let currentTimer = initalTimer;
let currentUpdate = initalUpdate;
let beatHigh;
let restart = 1;

// One day I'll fix this piece of crap aHHHHHHHHHHHHH!
function upDate(variable, x) {
  if (x === 0) {
    currentTimer = variable;
    document.querySelector(".timer").textContent = currentTimer;
  } else if (x === 1) {
    currentUpdate = variable;
    document.querySelector(".update").textContent = currentUpdate;
  }
}
//
//
// storing the set amount of signs and numbers into 2 arrays within one array
function numberAndSign(x) {
  let numberArray = [];
  let signArray = [];
  for (let i = 0; i < x; i++) {
    numberArray.push(Math.trunc(Math.random() * 10) + 1);
    signArray.push(signs[Math.trunc(Math.random() * signs.length)]);
  }
  signArray.pop(); //could also use unshift
  let totalArray = [signArray, numberArray];
  return totalArray;
}
console.log(numberAndSign(2));

// uses the sign and number array stored in the first to produce the quesion in the first array and the previous
//array in the second
function question() {
  let totalArray = numberAndSign(components);
  let fullQuestion;
  for (let i = 0; i < totalArray[1].length; i++) {
    if (i === 0) {
      fullQuestion = `What is ${totalArray[1][i]}`;
      continue;
    }
    fullQuestion =
      fullQuestion + ` ${totalArray[0][i - 1]} ${totalArray[1][i]}`;

    if (i === totalArray[1].length - 1) {
      fullQuestion = fullQuestion + ` ?`;
    }
  }
  let questionAndArray = [fullQuestion, totalArray];
  return questionAndArray;
}
console.log(question());

// uses the sign and number arrays to create the answer and produces the question array and the answer array
// in one big array
function answer() {
  let totalArray = question();
  let numberArray = totalArray[1][1];
  let fullAnswer;
  for (let i = 0; i < numberArray.length; i++) {
    if (i === 0) {
      fullAnswer = numberArray[i];
    } else {
      switch (totalArray[1][0][i - 1]) {
        case "x":
          fullAnswer = fullAnswer * numberArray[i];
          break;
        case "/":
          fullAnswer = fullAnswer / numberArray[i];
          break;
        case "-":
          fullAnswer = fullAnswer - numberArray[i];
          break;
        case "+":
          fullAnswer = fullAnswer + numberArray[i];
          break;
        default:
          console.log(`BROKEN`);
      }
    }
  }
  // console.log(totalArray[0], fullAnswer);
  // console.log(Math.round(fullAnswer));
  let questionAndAnswer = [totalArray[0], Math.round(fullAnswer)];
  return questionAndAnswer;
}
console.log(answer());

//Sets up timer Piece DRY
//blank

//sets up the pre-timer
function timer(preSec) {
  document.querySelector(".question").textContent = "Get Ready..."; // the Time has come...
  upDate(preSec, 0);
  let timerInterval = setInterval(passingSecond, 1000);
  if (restart === 0) {
    upDate(initalTimer, 0);
    return;
  }
  function passingSecond() {
    preSec--;
    upDate(preSec, 0);
    if (restart === 0) {
      clearInterval(timerInterval);
      upDate(initalTimer, 0);
      return;
    }
    if (preSec === 0) {
      ////////////////////////////////the big one //////////////////////////
      clearInterval(timerInterval);
      upDate(mainTimerExternal, 0);
      setTimeout(mainTimer, 500);
      document.querySelector(".button.enter").addEventListener("click", enter);
      start();
      return;
    }
  }
}

// main timer for the game - FOR NOW (rounds)
/* function mainTimer() {
  document.querySelector(".timer").textContent = mainTime;
  let timerInterval = setInterval(passingSecond, 1000);
  function passingSecond() {
    mainTime--;
    document.querySelector(".timer").textContent = mainTime;
    console.log(`Main timer on sec ${mainTime}`);
    if (mainTime === 0) {
      clearInterval(timerInterval);
      /* document.querySelector(".timer").textContent = 1234;
      document.querySelector(".question").textContent = `Game Over!`; // mabey add score *
    }
  }
} */

/*
function mainTimer() {
  upDate(mainTime, 0);
  let timerInterval = setInterval(passingSecond, 1000);
  function passingSecond() {
    mainTime--;
    upDate(mainTime, 0);
    if (mainTime === 0) {
      ////////////////////////////////the big one //////////////////////////
      clearInterval(timerInterval);
      upDate("Game Over!", 1);
      document
        .querySelector(".button.enter")
        .removeEventListener("click", enter);
      return;
    } else {
      document.querySelector(".button.enter").addEventListener("click", enter);
    }
  }
}
*/

function mainTimer() {
  document.addEventListener("keydown", function (keyPress) {
    if (keyPress.key === "Enter") enter();
  });

  mainTime = mainTimerExternal;
  upDate(mainTime, 0);
  let timerInterval = setInterval(passingSecond, 1000);
  if (restart === 0) {
    upDate(initalTimer, 0);
    return;
  }
  function passingSecond() {
    mainTime--;
    upDate(mainTime, 0);
    if (restart === 0) {
      clearInterval(timerInterval);
      upDate(initalTimer, 0);
      return;
    }
    if (mainTime === 0) {
      ////////////////////////////////the big one //////////////////////////
      clearInterval(timerInterval);
      document.querySelector(".input").value = "";
      if (score > highScore) {
        beatHigh = ":) You got the Highscore!";
        highScore = score;
        document.querySelector("#highscore").textContent = highScore;
      } else if (score === highScore) {
        beatHigh = "You tied the Highscore!";
      } else if (score < highScore || score === 0) {
        beatHigh = "Better luck next time...";
      }
      document.querySelector(".update").style.fontSize = "23px";
      upDate(`${beatHigh} -Press AGAIN to restart.`, 1);
      document
        .querySelector(".button.enter")
        .removeEventListener("click", enter);
      document.querySelector(".question").textContent = `Game Over!`;
      return;
    }
  }
}

//when you click the start button the 1st and following times
document
  .querySelector(".button.start")
  .addEventListener("click", startIteration);

function startIteration() {
  if (iteration === 0) {
    iteration++;
    restart++;
    timer(delay);
  } else {
    //start();
    document.querySelector(".update").textContent =
      "The Game has started - press Again to restart";
  }
  return;
}

// sets up the question
function start() {
  finalProduct = answer();
  currentAnswer = finalProduct[1];
  currentQuestion = finalProduct[0];
  document.querySelector(".question").textContent = currentQuestion;
  return;
}

//sets up the answer
function enter() {
  inputAnswer = document.querySelector(".input").value;
  if (inputAnswer == currentAnswer) {
    document.querySelector(".update").textContent = "Correct answer!";
    score++;
    document.querySelector("#score").textContent = score;
    start();
  } else if (inputAnswer !== currentAnswer) {
    document.querySelector(".update").textContent = "Wrong answer!";
  } else if (!iteration) {
    document.querySelector(".update").textContent = "NO ANSWER";
  }
  document.querySelector(".input").value = "";
  return;
}

document.querySelector(".button.again").addEventListener("click", function () {
  restart = 0;
  score = 0;
  iteration = 0;
  mainTime = mainTimerExternal;
  document.querySelector("#score").textContent = score;
  document.querySelector(".question").textContent = `--Question--`;
  document.querySelector(".input").value = "";
  upDate(initalTimer, 0);
  upDate(initalUpdate, 1);
});
