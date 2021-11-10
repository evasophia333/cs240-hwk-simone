let playButton = document.querySelector("#play");
let redButton = document.querySelector("#redSq");
let blueButton = document.querySelector("#blueSq");
let greenButton = document.querySelector("#greenSq");
let yellowButton = document.querySelector("#yellowSq");
let background = document.querySelector('body');
let printedText = document.querySelector('#status');
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
redButton.addEventListener("mousedown", function () {
    redButton.style.border = "";
});
//BLUE MOUSEOVER
blueButton.addEventListener("mouseover", function () {
    blueButton.style.border = "solid #eeeeee 0.5px";
});
blueButton.addEventListener("mouseout", function () {
    blueButton.style.border = "";
});
blueButton.addEventListener("mousedown", function () {
    blueButton.style.border = "";
});
//GREEN MOUSEOVER
greenButton.addEventListener("mouseover", function () {
    greenButton.style.border = "solid #eeeeee 0.5px";
});
greenButton.addEventListener("mouseout", function () {
    greenButton.style.border = "";
});
greenButton.addEventListener("mousedown", function () {
    greenButton.style.border = "";
});
//YELLOW MOUSEOVER
yellowButton.addEventListener("mouseover", function () {
    yellowButton.style.border = "solid #eeeeee 0.5px";
});
yellowButton.addEventListener("mouseout", function () {
    yellowButton.style.border = "";
});
yellowButton.addEventListener("mousedown", function () {
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
redButton.addEventListener('mouseout', function () {
    redButton.style.backgroundColor = "#ff0000";
});
//BLUE BUTTON
blueButton.addEventListener("mousedown", function () {
    blueButton.style.backgroundColor = "lightblue";
});
blueButton.addEventListener("mouseup", function () {
    blueButton.style.backgroundColor = "#0000bb";
});
blueButton.addEventListener('mouseout', function () {
    blueButton.style.backgroundColor = "#0000bb";
});
//GREEN BUTTON
greenButton.addEventListener("mousedown", function () {
    greenButton.style.backgroundColor = "lightgreen";
});
greenButton.addEventListener("mouseup", function () {
    greenButton.style.backgroundColor = "forestgreen";
});
greenButton.addEventListener('mouseout', function () {
    greenButton.style.backgroundColor = "forestgreen";
});
//YELLOW BUTTON
yellowButton.addEventListener("mousedown", function () {
    yellowButton.style.backgroundColor = "lightyellow";
});
yellowButton.addEventListener("mouseup", function () {
    yellowButton.style.backgroundColor = "goldenrod";
});
yellowButton.addEventListener('mouseout', function () {
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
const firstRoundDelay = 4000;

/**
 * Plays the welcome pattern on the screen 
 */
async function playWelcome() {
    let welcomePattern = ["B", "B", "B", "R", "G", "R", "R", "B", "G", "G", "G", "R"];
    for (let i = 0; i < welcomePattern.length; i++) {
        if (welcomePattern[i] == "R") {
            await changeColor(redSq, "#FF69B4", welcomeDelay);
            new Audio("sounds/red.wav").play();
            await changeColor(redSq, "#ff0000", welcomeDelay);
        }
        else if (welcomePattern[i] == "B") {
            await changeColor(blueSq, "lightblue", welcomeDelay);
            new Audio("sounds/blue.wav").play();
            await changeColor(blueSq, "#0000bb", welcomeDelay);
        }
        else if (welcomePattern[i] == "G") {
            await changeColor(greenSq, "lightgreen", welcomeDelay);
            new Audio("sounds/green.wav").play();
            await changeColor(greenSq, "forestgreen", welcomeDelay);
        }
        else if (welcomePattern[i] == "Y") {
            await changeColor(yellowSq, "lightyellow", welcomeDelay);
            new Audio("sounds/yellow.wav").play();
            await changeColor(yellowSq, "goldenrod", welcomeDelay);
        }
    }
}

/**
 * Changes the color based off the input to the color that it wants to become with a delay in time shown 
 * @param {} inputCol 
 * @param {*} newCol 
 * @returns 
 */
function changeColor(inputCol, newCol, delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            inputCol.style.backgroundColor = newCol;
            resolve(); // promise is resolved
        }, delayTime);
    });
}

/**
 * Plays the welcome sequence when the play button is clicked
 */
playButton.addEventListener("click", function () {
    //playWelcome();
    playGame(['Y', 'R'], 1);
});

async function playGame(inputSequence, roundNumber) {
    let displayList = [];
    let delay = 0;
    for (let i = 0; i < roundNumber; i++) {
        if (i == 0) {
            delay = 4000;
        } else {
            delay = 120;
        }
        if (inputSequence[i] == "R") {
            await changeColor(redSq, "#FF69B4", delay);
            new Audio("sounds/red.wav").play();
            delay = 120;
            await changeColor(redSq, "#ff0000", delay);
        }
        if (inputSequence[i] == "B") {
            await changeColor(blueSq, "lightblue"), delay;
            new Audio("sounds/blue.wav").play();
            delay = 120;
            await changeColor(blueSq, "#0000bb", delay);
        }
        if (inputSequence[i] == "G") {
            await changeColor(greenSq, "lightgreen", delay);
            new Audio("sounds/green.wav").play();
            delay = 120;
            await changeColor(greenSq, "forestgreen", delay);
        }
        if (inputSequence[i] == "Y") {
            await changeColor(yellowSq, "lightyellow", delay);
            new Audio("sounds/yellow.wav").play();
            delay = 120;
            await changeColor(yellowSq, "goldenrod", delay);
        }
        displayList.push(inputSequence[i]);
    }

    if (displayList.length == inputSequence.length) {
        winningScreen();
    }
}
/**
 * PChanges the bacjground color and prints to the screen and plays the sound when the user wins
 */
function winningScreen() {
    background.style.backgroundColor = 'lightblue';
    new Audio("sounds/win.mp3").play();
    printedText.innerHTML = 'YAY! You Won :)';
}


//Find the sequence
//determine the number of rounds
//Split it up into segments
//do the first segement
//if that is right then move to the second
// if that is wrong then display the you loose screen
//if it is the right last spot or last round then display the winning screen
