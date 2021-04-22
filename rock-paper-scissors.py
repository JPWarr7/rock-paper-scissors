def rock_paper_scissors():

    import random

    user = None 

    computer = random.choice(['rock', 'paper', 'scissors']) # <- computer makes a random choice of rock, paper, or scissors.

    while user == None:
        user = input("Rock, paper, or scissors: ")
        
        if user not in ['rock', 'paper', 'scissors']: # <- continues to iterate until the user inputs a valid choice of rock, paper, or scissors.
            print("not a valid input!")
            user = None 
            
    print(f"You picked {user} and the computer picked {computer}.") # <- uses string formatting to output the result to the user.
    
    # program decides whether game was a draw, or resulted in user win or loss.
    
    if user == computer: 
        return "Draw!"

    if user == "rock" and computer == "scissors":
        return "You win!"

    if user == "rock" and computer == "paper":
        return "You lose!"

    if user == "scissors" and computer == "paper":
        return "You win!"

    if user == "scissors" and computer == "rock":
        return "You lose!"

    if user == "paper" and computer == "rock":
        return "You win!"

    if user == "paper" and computer == "scissors":
        return "You lose!"
