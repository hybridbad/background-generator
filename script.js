var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");

//Put initial values from page load on the app and sets background
background();
//function for setting gradient 
function background(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")"; 

    css.textContent = body.style.background + ";";
}

//generate 5 character hexdecimal number

function generateHex(){
    var hash = "#";
    var letters = "0123456789ABCDEF";
    for (var i = 0; i <6; i++) {
        hash += letters[Math.floor(Math.random() * 16)];
    }
    return hash;
}

//
function randomGradient(){
    body.style.background = 
    "linear-gradient(to right, " + generateHex() + "," + generateHex() + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", background);
color2.addEventListener("input", background);
button.addEventListener("click", randomGradient);
