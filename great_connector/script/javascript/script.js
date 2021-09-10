"use strict"

const nightLight = document.querySelector(".nightlight"); 
const zoom = document.querySelector(".zoom");
const body = document.querySelector("html"); 
const easterEgg = document.querySelector("#easter_egg"); 
//let nightLightOn = false; 

nightLight.addEventListener("click", function () { 
    //console.log("working"); 
    //nightLightOn ? body.classList.remove("invert") : body.classList.add("invert"); 
    body.classList.toggle("invert"); 
    if (body.classList.contains("invert")) { 
    //console.log("On") 
    easterEgg.style.opacity = "1"; 
} else { 
        //console.log("Off")
        easterEgg.style.opacity = "0";
    }  
})

zoom.addEventListener("click", function () { 
    alert("will zoom one day")
})

//!0 ? console.log("false") : console.log("true"); 

