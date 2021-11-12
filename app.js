const playButton = document.querySelector("#play");
const redButton = document.querySelector("#redSq");
const blueButton = document.querySelector("#blueSq");
const greenButton = document.querySelector("#greenSq");
const yellowButton = document.querySelector("#yellowSq");
const background = document.querySelector('body');
const printedText = document.querySelector('#status');
var arrOfClicked = [];
const defaultRound = 10;
var inputArr = ['B', 'Y', 'B', 'G', 'B', 'R'];
var displayList = []
const welcomeDelay = 120;
const firstRoundDelay = 4000;
let roundStart = 1;

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
    arrOfClicked.push('R');
    checkEquality();
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
    arrOfClicked.push('B');
    checkEquality();
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
    arrOfClicked.push('G');
    checkEquality();
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
    arrOfClicked.push('Y');
    checkEquality();

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



/**
 * Plays the welcome pattern on the screen 
 */
async function playWelcome() {
    try {
        let welcomePattern = ["B", "G", "B", "R", "G", "R", "R", "B", "G", "G", "G", "R"];
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
    } catch (error) {
        console.log(error);
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
            resolve();
        }, delayTime);
    });
}

/**
 * Plays the welcome sequence when the play button is clicked
 */
playButton.addEventListener("click", function () {
    //reset the screen and the lists here 
    playWelcome();
    playFirstRound(inputArr, roundStart);
});

/**
 * prints the next round next to the screen 
 * @returns 
 */
function printNextRound() {
    return new Promise((resolve) => {
        setTimeout(() => {
            printedText.innerHTML = 'Great Work!! Next Round...';
            resolve();
        }, 800);
    });
}
/**
 * prints the round number to the screen
 * @returns 
 */
function printRoundNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            printedText.innerHTML = 'Round ' + roundStart + ' of ' + rounds.value + " !!";
            resolve();
        }, 800);
    });
}


/**
 * checks for the equality of the displayed colors in a string and the user input string 
 */
async function checkEquality() {
    try {
        let lengthLeft = 0;
        if (arrOfClicked.length >= 1 && displayList.length >= 1) { //ensures that it doesnt come in here on the first round
            if (arrOfClicked.length === displayList.length) { //ensures that it waits for user to input all the optinos
                if (arrayEquals(displayList, arrOfClicked)) {
                    if (roundStart < rounds.value) {
                        await printNextRound();
                        roundStart++;
                        await printRoundNumber();
                        playRound(inputArr, roundStart);

                    } else {
                        winningScreen();
                    }
                } else {
                    loosingScreen();
                }
            } else {
                lengthLeft = displayList.length - arrOfClicked.length;
                printedText.innerHTML = 'So far so good! ' + lengthLeft + ' more to go!';
            }
        }
    } catch (error) {
        console.log(error);
    }
}


/**
 * prints the sequence to the screen 
 * @param {*} inputVal the color sequence 
 * @param {*} roundNumber the round number that we are on
 */
async function playRound(inputSequence, roundNumber) {
    try {
        round = roundNumber;
        if (roundNumber <= rounds.value) { //base case if we call it recursivley 
            let delay = 400;
            displayList = [];
            for (let i = 0; i < roundNumber; i++) {
                if (inputSequence[i] == "R") {
                    await changeColor(redSq, "#FF69B4", delay);
                    new Audio("sounds/red.wav").play();
                    delay = 400;
                    await changeColor(redSq, "#ff0000", delay);
                    displayList.push('R');
                }
                if (inputSequence[i] == "B") {
                    await changeColor(blueSq, "lightblue", delay);
                    new Audio("sounds/blue.wav").play();
                    delay = 400;
                    await changeColor(blueSq, "#0000bb", delay);
                    displayList.push('B');
                }
                if (inputSequence[i] == "G") {
                    await changeColor(greenSq, "lightgreen", delay);
                    new Audio("sounds/green.wav").play();
                    delay = 400;
                    await changeColor(greenSq, "forestgreen", delay);
                    displayList.push('G');
                }
                if (inputSequence[i] == "Y") {
                    await changeColor(yellowSq, "lightyellow", delay);
                    new Audio("sounds/yellow.wav").play();
                    delay = 400;
                    await changeColor(yellowSq, "goldenrod", delay);
                    displayList.push('Y');
                }
            }
        }
        arrOfClicked = [];
    } catch (error) {
        console.log(error);
    }
}

/**
 * Changes the bacjground color and prints to the screen and plays the sound when the user wins
 */
function winningScreen() {
    background.style.backgroundColor = 'DeepSkyBlue';
    new Audio("sounds/win.mp3").play();
    printedText.innerHTML = 'YAY! You Won :)';
}

/**
 * Displays the loosing screen, chaning background, sounds and printing to the screen
 */
function loosingScreen() {
    background.style.backgroundColor = 'hotpink';
    new Audio("sounds/wrong.wav").play();
    new Audio("sounds/nextRound.wav").play();
    printedText.innerHTML = 'Incorrect! You lost :(';

}
/**
 * Determines the equality between two different arrays 
 * @param {} a 
 * @param {*} b 
 * @returns 
 */
function arrayEquals(a, b) {
    if (a.length == b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                console.log('here')
                return false;
            }
        }
        return true;
    }
    return false;
}


/**
 * prints the sequence to the screen for just the first round because the delay is longer
 * @param {*} inputVal the color sequence 
 * @param {*} roundNumber the round number that we are on
 */
async function playFirstRound(inputSequence, roundNumber) {
    try {
        round = roundNumber;
        if (roundNumber <= rounds.value) { //base case if we call it recursivley 
            let delay = 400; //
            displayList = [];
            for (let i = 0; i < roundNumber; i++) {
                if (inputSequence[i] == "R") {
                    await changeColor(redSq, "#FF69B4", firstRoundDelay);
                    new Audio("sounds/red.wav").play();
                    delay = 400;
                    await changeColor(redSq, "#ff0000", delay);
                    displayList.push('R');
                }
                if (inputSequence[i] == "B") {
                    await changeColor(blueSq, "lightblue", firstRoundDelay);
                    new Audio("sounds/blue.wav").play();
                    delay = 400;
                    await changeColor(blueSq, "#0000bb", delay);
                    displayList.push('B');
                }
                if (inputSequence[i] == "G") {
                    await changeColor(greenSq, "lightgreen", firstRoundDelay);
                    new Audio("sounds/green.wav").play();
                    delay = 400;
                    await changeColor(greenSq, "forestgreen", delay);
                    displayList.push('G');
                }
                if (inputSequence[i] == "Y") {
                    await changeColor(yellowSq, "lightyellow", firstRoundDelay);
                    new Audio("sounds/yellow.wav").play();
                    delay = 400;
                    await changeColor(yellowSq, "goldenrod", delay);
                    displayList.push('Y');
                }
            }
        }
        arrOfClicked = [];
    } catch (error) {
        console.log(error);
    }
}