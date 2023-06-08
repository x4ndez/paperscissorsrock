let score = { // Record scores

    player: 0,
    computer: 0,
    draw: 0,

};

const hand = {

    1: "Paper",
    2: "Scissors",
    3: "Rock",

}

function newGame() {

    let pVal = playerTurn();

    let cVal = computerTurn();

    analyseResults(pVal, cVal);

    window.alert(`
        Player Score: ${score.player}. Computer Score: ${score.computer}.
        Results: ${hand[pVal]}(Player) x ${hand[cVal]}(Computer)
    `);

    let playAgain = window.confirm("Do you want to play again?");

    if (playAgain) {

        newGame();

    } else {

        window.close();

    }

}

function playerTurn() {

    let x = prompt("Please enter paper, scissors or rock.");
    let y = processpVal(x);
    return y;

}

//Function: Process validity of pVal, return their option as a number

function processpVal(x) {

    let forceLowerCase = x.toLowerCase();
    let truepVal;

    switch (forceLowerCase) {

        case "paper":
            truepVal = 1;
            break;

        case "scissors":
            truepVal = 2;
            break;

        case "rock":
            truepVal = 3;
            break;

        default:
            break;

    }

    if (truepVal === undefined) {

        let valUndefined = window.confirm("You need to type in paper, scissors or rock. Your value was invalid... Do you want to play again?");

        if (valUndefined) {

            newGame();

        } else {

            window.close();

        }

    }

    return truepVal;

}

function computerTurn() {

    //Function: return computer's value
    //1 === Paper
    //2 === Scissors
    //3 === Rock

    let x = Math.floor(Math.random() * 3 + 1);
    return x;

}

function analyseResults(pVal, cVal) {

    //Compare computer and player's value
    //Player 1 and Computer 1 = draw
    //Player 1 and Computer 2 = Computer win
    //Player 1 and Computer 3 = Player win

    //Player 2 and Computer 1 = Player win
    //Player 2 and Computer 2 = draw
    //Player 2 and Computer 3 = Computer win

    //Player 3 and Computer 1 = Computer win
    //Player 3 and Computer 2 = Player win
    //Player 3 and Computer 3 = draw

    if (pVal === cVal) { // Draw

        console.log("DRAW");
        score.draw++;

    }

    if (pVal === 1 && cVal === 2 || pVal === 2 && cVal === 3 || pVal === 3 && cVal === 1) { // Computer wins

        console.log("Computer wins!");
        console.log(`${hand[pVal]}(Player) x ${hand[cVal]}(Computer)`);
        score.computer++;

    } else if (pVal === 1 && cVal === 3 || pVal === 2 && cVal === 1 || pVal === 3 && cVal === 2) { // Player wins

        console.log("Player wins!");
        console.log(`${hand[pVal]}(Player) x ${hand[cVal]}(Computer)`);
        score.player++;

    }

}

newGame(); // Start game