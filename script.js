const choice = document.querySelector("#choice");
const computerChoice = getComputerChoice();

function getComputerChoice() {
    const rps = [
        "rock",
        "paper",
        "scissors"
      ];
    const randomItem = rps[Math.floor(Math.random()*rps.length)];
    choice.textContent = randomItem;
    return randomItem;
}

function play() {
    if (computerChoice == "scissors") {
        console.log("win");
    } else if (computerChoice == "paper") {
        console.log("lose");
    }
    else {
        console.log("tie");
    }
}

play();