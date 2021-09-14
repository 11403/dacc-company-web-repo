'use strict'
/* 
const x = 14; 
console.log(x);

console.log("hello" + 2)

//    /n = new line 

const button = document.querySelector("button"); 
const text = document.querySelector("p");


button.addEventListener("click", function () {
   const input = document.querySelector(".input").value;
   //console.log(input);
    text.innerHTML = `Text Entered: ${input}`;
    text.style.display = "block"; 
    document.querySelector(".input").value = "put in name"; 
}); 

function monkey() { 
    console.log("Monkey comes")
    document.getElementById("image-text").value = "MONKEY"; 
}

function monkeyleaves() { 
    console.log("Monkey leaves"); 
    document.getElementById("image-text").value = ""; 
    console.clear(); 
    }

const currentPosition = 1; 

function swapImage(x) { 
    if (currentPosition = 1) { 
    x.src="monkey2.jfif";
    currentPosition = 2; 
} else { 
    x.src="monki.jpg";
    currentPosition = 1; 
}
} 
*/ 
function gitInput() { 
    //alert("working"); 
    let myText = document.getElementById("tempInputText").value; 
    //console.log(myText)
    document.getElementById("inputPara").innerHTML = myText;  
}

document.getElementById("tempInputSubmit2").addEventListener("click", getInput2);

function getInput2() { 
    let myText2 = document.getElementById("tempInputText2").value; 
    //console.log(myText2)
    document.getElementById("inputPara2").innerHTML = myText2;  
}