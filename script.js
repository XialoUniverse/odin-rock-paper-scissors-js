function getComputerChoice() {
    let choice;
    let randomNumber = (Math.floor(Math.random() * 100)) % 3;
    if (randomNumber == 0) {
        choice = 'Rock';
    }
    else if (randomNumber == 1) {
        choice = 'Paper';
    }
    else {
        choice = 'Scissors';
    }
    return choice;
}

function getHumanChoice() {
    humanChoice = prompt('Enter your choice: rock, paper, scissors');
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case 'rock':
            return 'Rock';
        case 'paper':
            return 'Paper';
        case 'scissors':
            return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'Rock':
            if (computerChoice == 'Rock') {
                console.log('Tie');
            } else if (computerChoice == 'Paper') {
                console.log('You Lose, Paper beats Rock')
                computerScore += 1;
            } else {
                console.log('You Win! Rock beats Scissors')
                humanScore += 1;
            }
            break;
        case 'Paper':
            if (computerChoice == 'Paper') {
                console.log('Tie');
            } else if (computerChoice == 'Scissors') {
                console.log('You Lose, Scissors beat Paper')
                computerScore += 1;
            } else {
                console.log('You Win! Paper beats Rock')
                humanScore += 1;
            }
            break;
        case 'Scissors':
            if (computerChoice == 'Scissors') {
                console.log('Tie');
            } else if (computerChoice == 'Rock') {
                console.log('You Lose, Rock beats Scissors')
                computerScore += 1;
            } else {
                console.log('You Win! Scissors beat Paper')
                humanScore += 1;
            }
            break;
    }
}

let humanScore = 0;
let computerScore = 0;
