let playerScore = 0;
let computerScore = 0;

// DOM elements
const Responses = ['rock', 'paper', 'scissors'];

const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const playerResponseDisplay = document.getElementById('playerResponse');
const computerResponseDisplay = document.getElementById('computerResponse');

const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');


// Event listener for each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerResponse = button.id;
        const computerResponse = getComputerResponse();
        displayResponses(playerResponse, computerResponse);
        const result = playRound(playerResponse, computerResponse);
        updateScore(result);
        displayResult(result);
    });
});

// get computer's random response
function getComputerResponse() {
    return Responses[Math.floor(Math.random() * Responses.length)];
}

function displayResponses(playerResponse, computerResponse) {
    playerResponseDisplay.textContent = capitalize(playerResponse);
    computerResponseDisplay.textContent = capitalize(computerResponse);
}

function capitalize(Response) {
    return Response.charAt(0).toUpperCase() + Response.slice(1);
}

// play a round and determine the result
function playRound(playerResponse, computerResponse) {
    if (playerResponse === computerResponse) {
        return "Tie!";
    }

    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (winConditions[playerResponse] === computerResponse) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

function updateScore(result) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function displayResult(result) {
    resultDisplay.textContent = result;
}
