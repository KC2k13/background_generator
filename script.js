// Declaring variables 
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random_button = document.getElementsByClassName("random_button");

// setGradient sets the background color for color 1 and 2
// Then displays it the screen.
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value
    + ")";
    // Allows the lines above to display to the screen
    css.textContent = body.style.background + ";";
}

// getRandomColor sets the values of color 1 and 2 to a random color
// This will be called in the HTML file within the button
function getRandomColor() {
    color1.value = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    color2.value = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//random_button.addEventListener("click", getRandomColor);