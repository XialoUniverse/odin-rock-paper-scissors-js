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
    let humanChoice = prompt('Enter your choice: rock, paper, scissors');
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
    console.log(`The computer chose: ${computerChoice}`)
    switch (humanChoice) {
        case 'Rock':
            if (computerChoice == 'Rock') {
                console.log('Tie');
                return '';
            } else if (computerChoice == 'Paper') {
                console.log('You Lose, Paper beats Rock');
                return 'computer';
            } else {
                console.log('You Win! Rock beats Scissors');
                return 'human';
            }
        case 'Paper':
            if (computerChoice == 'Paper') {
                console.log('Tie');
                return '';
            } else if (computerChoice == 'Scissors') {
                console.log('You Lose, Scissors beat Paper');
                return 'computer';
            } else {
                console.log('You Win! Paper beats Rock');
                return 'human';
            }
        case 'Scissors':
            if (computerChoice == 'Scissors') {
                console.log('Tie');
                return '';
            } else if (computerChoice == 'Rock') {
                console.log('You Lose, Rock beats Scissors');
                return 'computer';
            } else {
                console.log('You Win! Scissors beat Paper');
                return 'human';
            }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log(humanScore);
    console.log(computerScore);
    
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    winner = playRound(humanChoice, computerChoice);
    if (winner == 'human') {
        humanScore += 1;
    } else if (winner == 'computer') {
        computerScore += 1;
    }
    
        console.log(humanScore);
        console.log(computerScore);
}

playGame();