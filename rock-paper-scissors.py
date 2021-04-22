def rock_paper_scissors():

    import random

    user = None

    computer = random.choice(['rock', 'paper', 'scissors'])

    while user == None:
        user = input("Choose rock, paper, or scissors: (surround final option with quotes) ")
        if user not in ['rock', 'paper', 'scissors']:
            print("not a valid input!")
            user = None


    if user == computer:
        print('You picked', user, 'and the computer picked', computer,'.')
        print("Draw!")

    if user == "rock" and computer == "scissors":
        print('You picked', user, 'and the computer picked', computer,'.')
        print("You win!")

    if user == "rock" and computer == "paper":
        print('You picked', user, 'and the computer picked', computer,'.')
        print("You lose!")

    if user == "scissors" and computer == "paper":
        print('You picked', user, 'and the computer picked', computer,'.')
        print("You win!")

    if user == "scissors" and computer == "rock":
        print('You picked', user, 'and the computer picked', computer,'.')
        print("You lose!")

    if user == "paper" and computer == "rock":
        print('You picked', user, 'and the computer picked', computer,'.')
        print("You win!")

    if user == "paper" and computer == "scissors":
        print('You picked', user, 'and the computer picked', computer,'.')
        print("You lose!")
