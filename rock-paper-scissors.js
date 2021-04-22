// def rock_paper_scissors():

//     import random

//     user = None

//     computer = random.choice(['rock', 'paper', 'scissors'])

//     while user == None:
//         user = input("Rock, paper, or scissors: ")
//         if user not in ['rock', 'paper', 'scissors']:
//             print("not a valid input!")
//             user = None

//     print(f"You picked {user} and the computer picked {computer}.")
//     if user == computer:
//         return "Draw!"

//     if user == "rock" and computer == "scissors":
//         return "You win!"

//     if user == "rock" and computer == "paper":
//         return "You lose!"

//     if user == "scissors" and computer == "paper":
//         return "You win!"

//     if user == "scissors" and computer == "rock":
//         return "You lose!"

//     if user == "paper" and computer == "rock":
//         return "You win!"

//     if user == "paper" and computer == "scissors":
//         return "You lose!"


// rock_paper_scissors()


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
