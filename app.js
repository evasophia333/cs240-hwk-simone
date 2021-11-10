let playButton = document.querySelector("#play");
let redButton = document.querySelector("#redSq");
let blueButton = document.querySelector("#blueSq");
let greenButton = document.querySelector("#greenSq");
let yellowButton = document.querySelector("#yellowSq");
/**
 * Changes the color of the buttons when they are mouse over and out 
 */
//RED MOUSEOVER
redButton.addEventListener("mouseover", function () {
    redButton.style.border = "solid #eeeeee 0.5px";
});
redButton.addEventListener("mouseout", function () {
    redButton.style.border = "";
});
//BLUE MOUSEOVER
blueButton.addEventListener("mouseover", function () {
    blueButton.style.border = "solid #eeeeee 0.5px";
});
blueButton.addEventListener("mouseout", function () {
    blueButton.style.border = "";
});
//GREEN MOUSEOVER
greenButton.addEventListener("mouseover", function () {
    greenButton.style.border = "solid #eeeeee 0.5px";
});
greenButton.addEventListener("mouseout", function () {
    greenButton.style.border = "";
});
//YELLOW MOUSEOVER
yellowButton.addEventListener("mouseover", function () {
    yellowButton.style.border = "solid #eeeeee 0.5px";
});
yellowButton.addEventListener("mouseout", function () {
    yellowButton.style.border = "";
});


/**
 * Changes the color of the boxes when they are clicked 
 */
//RED CLICK
redButton.addEventListener("mousedown", function () {
    redButton.style.backgroundColor = '#FF7F7F';
});
redButton.addEventListener("mouseup", function () {
    redButton.style.backgroundColor = '#ff0000';
});
//BLUE BUTTON
blueButton.addEventListener("mousedown", function () {
    blueButton.style.backgroundColor = "lightblue";
});
blueButton.addEventListener("mouseup", function () {
    blueButton.style.backgroundColor = "#0000bb";
});
//GREEN BUTTON
greenButton.addEventListener("mousedown", function () {
    greenButton.style.backgroundColor = "lightgreen";
});
greenButton.addEventListener("mouseup", function () {
    greenButton.style.backgroundColor = "forestgreen";
});
//YELLOW BUTTON
yellowButton.addEventListener("mousedown", function () {
    yellowButton.style.backgroundColor = "lightyellow";
});
yellowButton.addEventListener("mouseup", function () {
    yellowButton.style.backgroundColor = "goldenrod";
});


/**
 * Plays the sound when buttons are clicked
 */
redButton.addEventListener("click", function () {
    new Audio("sounds/red.wav").play();
});
blueButton.addEventListener("click", function () {
    new Audio("sounds/blue.wav").play();
});
greenButton.addEventListener("click", function () {
    new Audio("sounds/green.wav").play();
});
yellowButton.addEventListener("click", function () {
    new Audio("sounds/yellow.wav").play();
});


const welcomeDelay = 120;

/**
 * Plays the welcome pattern on the screen 
 */
async function playWelcome() {
    let welcomePattern = ["G", "R", "Y", "Y", "B", "B", "R", "B", "Y", "Y", "G", "G"];
    for (let i = 0; i < welcomePattern.length; i++) {
        if (welcomePattern[i] == "R") {
            await changeColor(redSq, "#FF69B4");
            new Audio("sounds/red.wav").play();
            await changeColor(redSq, "#ff0000");
        }
        if (welcomePattern[i] == "B") {
            await changeColor(blueSq, "lightblue");
            new Audio("sounds/blue.wav").play();
            await changeColor(blueSq, "#0000bb");
        }
        if (welcomePattern[i] == "G") {
            await changeColor(greenSq, "lightgreen");
            new Audio("sounds/green.wav").play();
            await changeColor(greenSq, "forestgreen");
        }
        if (welcomePattern[i] == "Y") {
            await changeColor(yellowSq, "lightyellow");
            new Audio("sounds/yellow.wav").play();
            await changeColor(yellowSq, "goldenrod");
        }
    }
}

/**
 * Changes the color based off the input to the color that it wants to become with a delay in time shown 
 * @param {} inputCol 
 * @param {*} newCol 
 * @returns 
 */
function changeColor(inputCol, newCol) {
    return new Promise((resolve) => {
        setTimeout(() => {
            inputCol.style.backgroundColor = newCol;
            resolve(); // promise is resolved
        }, welcomeDelay);
    });
}


playButton.addEventListener("click", function () {
    playWelcome();
});


