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
    return new Promise((resolve) => {
        let buttons = document.querySelectorAll('button');
        for (const btn of buttons) {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                let humanChoice = btn.innerText;
                resolve(humanChoice);
            })
        }
    }) 
}

function playRound(humanChoice, computerChoice) {
    console.log(`The computer chose: ${computerChoice}`)
    let cpuChoiceDisplay = document.createElement('p');
    cpuChoiceDisplay.innerText = `The Computer Chose: ${computerChoice}`;
    let displayDiv = document.querySelector('.cpu-choice');
    displayDiv.innerText = '';
    displayDiv.appendChild(cpuChoiceDisplay);
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

async function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = await getHumanChoice();
    
        winner = playRound(humanChoice, computerChoice);
        if (winner == 'human') {
            humanScore += 1;
        } else if (winner == 'computer') {
            computerScore += 1;
        }
        let resultString = document.createElement('p');
        resultString.innerText = `Your score: ${humanScore}, computer score: ${computerScore}`;
        let resultsDisplay = document.querySelector('.display-results');
        resultsDisplay.innerText = '';
        resultsDisplay.appendChild(resultString);

        console.log(`Your score is: ${humanScore}`);
        console.log(`Computer score is: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You Won the Game! Final Score is: You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You Lost the Game. Final Score is: You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The Game was a Tie. Final Score is: You: ${humanScore}, Computer: ${computerScore}`);
    }

}

playGame();