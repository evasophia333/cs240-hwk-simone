const playButton = document.querySelector("#play");
const redButton = document.querySelector("#redSq");
const blueButton = document.querySelector("#blueSq");
const greenButton = document.querySelector("#greenSq");
const yellowButton = document.querySelector("#yellowSq");
const background = document.querySelector('body');
const printedText = document.querySelector('#status');
var arrOfClicked = [];
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
    clickedButton();
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
    clickedButton();
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
    clickedButton();
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
    clickedButton();

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

var displayList = []
const welcomeDelay = 120;
const firstRoundDelay = 4000;
var numberOfRounds = 0;

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
    //reset the screen and the lists here 
    //playWelcome();
    for (let i = 0; i < rounds.value; i++) {
        playGame(['Y', 'R'], i);
    }
    //this needs to become an await function I think because it has 

});

var inputSequence = [];
var round = 10;

async function playGame(inputVal, roundNumber) {
    inputSequence = inputVal;
    round = roundNumber;
    if (roundNumber <= rounds.value) {
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
        console.log(arrOfClicked);
        console.log(displayList);
    }
}

/**
 * Changes the bacjground color and prints to the screen and plays the sound when the user wins
 */
function winningScreen() {
    background.style.backgroundColor = 'lightblue';
    new Audio("sounds/win.mp3").play();
    printedText.innerHTML = 'YAY! You Won :)';
}
/**
 * Displays the loosing screen, chaning background, sounds and printing to the screen
 */
function loosingScreen() {
    background.style.backgroundColor = 'pink';
    new Audio("sounds/wrong.wav").play();
    new Audio("sounds/nextRound.wav").play();
    printedText.innerHTML = 'DARN! You lost :(';

}
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

function clickedButton() {
    console.log("arrClicked: " + arrOfClicked);
    console.log("displayLIst: " + displayList);
    if (arrayEquals(arrOfClicked, displayList)) {
        console.log(inputSequence);
        console.log(displayList);

        console.log(arrayEquals(displayList, inputSequence))
        if (arrayEquals(displayList, inputSequence)) {
            winningScreen();
        } else { //go to the next round
            if (round < rounds.value) {
                new Audio("sounds/nextRound.wav").play();
                playGame(inputSequence, round++);
                console.log('newRound');
                arrOfClicked = [];
            } else {
                console.log('here')
                loosingScreen();
            }
        }
    } else {
        loosingScreen();
    }
}

//Find the sequence
//determine the number of rounds
//Split it up into segments
//do the first segement
//if that is right then move to the second
// if that is wrong then display the you loose screen
//if it is the right last spot or last round then display the winning screen
