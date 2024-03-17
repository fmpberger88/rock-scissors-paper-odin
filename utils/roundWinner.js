const roundWinner = (userChoice, computerChoice) => {
    if (userChoice === "rock" && computerChoice === "scissors"
        || userChoice === "paper" && computerChoice === "rock"
        || userChoice === "scissors" && computerChoice === "paper") {
        return "Player wins the match"
    } else if (userChoice === "scissors" && computerChoice === "rock"
        || userChoice === "rock" && computerChoice === "paper"
        || userChoice === "paper" && computerChoice === "scissors") {
        return "Computer wins the match"
    } else {
        return "It's a tie"
    }
}

export { roundWinner };