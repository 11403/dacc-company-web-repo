"strict mode";
console.log("REFREASH");

let title = "Difference between === and ==";
/*
console.log(`${"1" == 1} ( == )`);
console.log(`${"1" === 1} ( === )`);
*/

title = "Switch Statements";
/* 
const age = 16;

switch (age) {
  case 11: // basically 11 === age
    console.log("11 years old");
    break;
  case 16:
    console.log("ew 16");
    break;
  default:
    console.log("space alien");
} // don't need ; at end
*/

title = "ternary operator + OR AND ";
/* 
const age = 16;

//bad way
if (age >= 13 && age <= 19) {
  console.log("your a teen");
} else {
  console.log("your not a child, your a monster");
}

//better way
age >= 13 && age <= 19 ? console.log("teen") : console.log("no teen");

// Or and AND

//OR
console.log(0 || null || 1 || undefined);
console.log(0 || null); // last one will always be evaluated even if it is falsey
// And
console.log(4 && 0 && "hello"); // basically opposite of Or
console.log(4 && 5 && "hi"); // last one will go like OR

// Shorter Way
(age >= 13 && age <= 19) || console.log("not a teen"); // prints if age isn't a teen
const level = 5;
const player = level || 1;
console.log(player);
*/
title = 'arrow functions and "this" keyword';
/* 
// regualr function
function calcAge(birthYear, currentYear) {
  return currentYear - birthYear;
}
console.log(calcAge(2005, 2021));

//Arrow Functions
calcAge2 = (birthYear) => 2021 - birthYear;
const age = calcAge2(2005);
console.log(age);

yearsUntilRetirement = (birthYear, currentYear) => {
  const age = currentYear - birthYear;
  age >= 60
    ? console.log("already in retirement")
    : console.log(`Have ${60 - age} years left`);
};

yearsUntilRetirement(2005, 2021);

// * is special becasue it doesn't have
// a this keyword

const me = {
  birthYear: 2005,
  firstName: "Sebastian",
  interest: ["basketball", "tennis"],
  calcAge3: function () {
    let age = 2021 - this.birthYear;
    yearsUntilRetirement2 = () => {
      console.log(`${this.firstName} is ${age} years old.`);
    };
    yearsUntilRetirement2();
  },
};

me.calcAge3();
eh(); // can't call before like a function expression
eh = () => console.log("eh");
*/
title = "DOM Manipulation";
// YEEEEEEEEEEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS tooooooooooooggle world is da best
// ALT Z 
// Setting it up 
const letters = 'abcdefghijklmnopqrstuvwxyz',
  [...lettersUpperCase] = letters.toUpperCase(),
  [...lettersLowerCase] = letters.toLowerCase(),
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  symbols = ['!', '@', '?', '$', '%', "&", '*', '#'],
  responses = ["I Kno yoU Can dO It!", "Wow You Exist!", "I Hear Every Door You Open", "I Get Angerier Every Problem You Get Wrong", "I Hear Math That Bad", "yOu SilLy bIlY", "You Got The Same Score", "NEw HIghScORE", ">:( ):< >:( ):< >:( ):< >:( ):<", "AR YOU REDDDDY?!?!??!?", "BEEEEEEEGIN!!!!"];

let
  currentSpyCode,
  gameMode = false,
  completelyReset = true;
wrongCounter = 0,
  score = 8,
  time = 0;
highScore = 0,
  letterAmount = 1,
  numSymAmount = 1;


// console.log(lettersUpperCase);
// console.log(lettersLowerCase);
// console.log(numbers);
// console.log(symbols);
//console.log("------------- 1st STEP -------------")

// Establish Before Anything Even starts 
document.querySelector("#questionText").textContent = responses[0];


// Creating the Code (like the actual spy code)
function spyCode(letters = 1, numSym = 1) {
  // Making the Code Peices
  let codePieces = [];
  for (i = 0; i < letters; i++) {
    const letterRandomU = lettersUpperCase[Math.trunc(Math.random() * lettersUpperCase.length)];
    const letterRandomL = lettersLowerCase[Math.trunc(Math.random() * lettersLowerCase.length)];
    codePieces.push(letterRandomU, letterRandomL);
    // for arrays 0 is good and actual length is undefined
  }
  for (i = 0; i < numSym; i++) {
    const numberRandom = numbers[Math.trunc(Math.random() * numbers.length)];
    const symbolRandom = symbols[Math.trunc(Math.random() * symbols.length)];
    codePieces.push(numberRandom, symbolRandom)
  }
  // console.log(codePieces)
  //console.log("---------- 2nd STEP -------------");
  // Randomizing the Codepieces 
  let codePiecesNew = [];
  const codePiecesLength = codePieces.length;

  for (i = 0; i < codePiecesLength; i++) {
    codePieceRandom = Math.trunc(Math.random() * codePieces.length);
    codePiecesNew.push(codePieces[codePieceRandom]);
    codePieces.splice(codePieceRandom, 1);
  }
  // console.log(codePiecesNew)
  //console.log("---------- 3rd STEP --------------");
  // Putting the Pieces Together to make one Secret Code! 
  let finalCode = "";
  for (i = 0; i < codePiecesNew.length; i++) {
    finalCode += codePiecesNew[i];
  }
  // console.log(finalCode)
  //console.log("---------- 4th STEP --------------")
  return finalCode;
}
//console.log(spyCode(2, 2) + " - Horray!");

// link the code to DOM and save it 
// START GAME //////////////////////////////////////////////////////////////
document.querySelector('#start').addEventListener("click", function startGame() {
  if (gameMode) {
    alert("Game has already began");
    return;
  }
  gameMode = true;
  document.querySelector("#questionText").textContent = responses[9]
  currentSpyCode = spyCode(letterAmount, numSymAmount);
  // Countdown Interval 
  time = 5;
  const startingTimer = setInterval(function () {
    // console.log(time);
    document.querySelector("span.time").textContent = time;
    time--;
    if (time === 0) {
      clearInterval(startingTimer);
      document.querySelector('.code').textContent = currentSpyCode;
      completelyReset = false;
      document.querySelector("#questionText").textContent = responses[10]
      return;
    }
  }, 1000);
});

// END AND RESET GAME //////////////////////////////////////////////
document.querySelector('#end').addEventListener("click", function endGame() {
  if (completelyReset) {
    alert("Please Start Game");
    return;
  }
  wrongCounter = 0;
  document.querySelector(".score").textContent = "000";
  document.querySelector("#questionText").textContent = responses[0];
  document.querySelector(".time").textContent = "000";
  document.querySelector(".code").textContent = "...";
  gameMode = false;
  completelyReset = true;
  time = 0;
  scoring();
  document.querySelector("input").value = "";
  return;
});

// CHECKS ANSWER ////////////////////////////////////////////////////////////
document.querySelector('#enter').addEventListener("click", function check() {
  if (!gameMode) {
    alert("Please Start Game");
    return;
  } else if (document.querySelector("input").value === "") {
    document.querySelector("#questionText").textContent = responses[5];
    document.querySelector("#questionText").title = "PUT IN YOR anSWER"
  } else if (document.querySelector("input").value === currentSpyCode) {
    scoring();
    wrongCounter = 0;
    currentSpyCode = spyCode(letterAmount, numSymAmount);
    document.querySelector('.code').textContent = currentSpyCode;
    document.querySelector("#questionText").textContent = responses[1];
  } else if (document.querySelector("input").value !== currentSpyCode) {
    wrongCounter += 1;
    switch (wrongCounter) {
      case 1:
        document.querySelector("#questionText").textContent = responses[2];
        break;
      case 2:
        document.querySelector("#questionText").textContent = responses[3];
        break;
      case 3:
        document.querySelector("#questionText").textContent = responses[4];
        document.querySelector("#questionText").title = "GAME OVER"
        gameMode = false;
        scoring();
    }
  } else {
    alert("ERROR")
  }
  document.querySelector("input").value = "";
})

// Scoring 
function scoring() {
  if (gameMode) {
    score++;
    if (score <= 9) {
      document.querySelector('.score').textContent = `00${score}`;
    } else if (score > 9) {
      document.querySelector('.score').textContent = `0${score}`;
    } else if (score > 99) {
      document.querySelector('.score').textContent = score;
    } else if (score === 999) {
      document.querySelector("#questionText").textContent = "MAX SCORE!!!!"
      gameMode = false;
    } else {
      alert("Error");
    }
    return;
  } else if (!gameMode) {
    if (score < highScore) {
      document.querySelector("#questionText").textContent = responses[8];
      return;
    } else if (score > highScore) {
      highScore = score;
      document.querySelector("#questionText").textContent = responses[7];
    } else if (score === highScore) {
      document.querySelector("#questionText").textContent = responses[6];
    }
    if (highScore <= 9) {
      document.querySelector("span.highScore").textContent = `00${highScore}`;
    } else if (highScore > 9) {
      document.querySelector("span.highScore").textContent = `0${highScore}`;
    } else if (highScore > 99) {
      document.querySelector("span.highScore").textContent = `00${highScore}`;
    } else if (highScore >= 999) {
      document.querySelector("#questionText").textContent = "MAX SCORE!!!!"
    } else {
      alert("Error");
    }
    return;
  } else {
    alert("Error");
  }
}
// can't put if/ else statements in the beginnning or it will immedietly trigger
//gameMode ? alert("Game has already began") : console.log("game begin");

/*
let test = 0;
switch (test) {
  case (test < 1):
    console.log("Smaller than 1");
    break;
  case test > 1:
    console.log("bigger than 1");
    break;
  case test === 1:
    console.log("NUMBER ONE");
    break;
  default: alert("ERROR");
}
*/