"use strict"

const nightLight = document.querySelector(".nightlight"); 
const zoom = document.querySelector(".zoom");
const body = document.querySelector("*"); 
//let nightLightOn = false; 

nightLight.addEventListener("click", function () { 
    //console.log("working"); 
    //nightLightOn ? body.classList.remove("invert") : body.classList.add("invert"); 
    body.classList.toggle("invert"); 
})

zoom.addEventListener("click", function () { 
    alert("will zoom one day")
})

//!0 ? console.log("false") : console.log("true"); 