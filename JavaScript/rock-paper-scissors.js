const rockPaperScissors = function() {
    let userChoice = prompt('rock, paper, or scissors?' );
    let computerChoiceNum =  Math.floor((Math.random() * 3) + 1);
    let computerChoice;
    
    // Note: 1 is rock, 2 is paper, and 3 is scissors.
    if (computerChoiceNum === 1) computerChoice = 'rock';
    else if (computerChoiceNum === 2) computerChoice = 'paper';
    else computerChoice = 'scissors';

    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}.`);

    if (userChoice == computerChoice) return "it's a draw!";

    else if (userChoice == 'rock') {
        if (computerChoice == 'scissors') return 'you win!';
        else return 'you lose.';
    }

    else if (userChoice == 'paper') {
        if (computerChoice == 'rock') return 'you win!';
        else return 'you lose.';
    }

    else {
        if (computerChoice == 'paper') return 'you win!';
        else return 'you lose.';
    }
}   

console.log(rockPaperScissors());   
