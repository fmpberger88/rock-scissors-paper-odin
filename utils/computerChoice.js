const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*3)];
};

export { getComputerChoice };
