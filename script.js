function getComputerChoice() {
    let choice;
    let randomNumber = (Math.floor(Math.random() * 100)) % 3;
    console.log(randomNumber);
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

