const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const paragraph = document.querySelector("#paragraph");

const computerChoice = getComputerChoice();

function getComputerChoice() {
    const rps = [
        "rock",
        "paper",
        "scissors"
      ];
    const randomItem = rps[Math.floor(Math.random()*rps.length)];
    return randomItem;
}

rock.addEventListener("click", () => {
    if(computerChoice == "scissors") {
        paragraph.textContent = "win";
    } else if(computerChoice == "paper") {
        paragraph.textContent = "lose";
    } else {
        paragraph.textContent = "tie";
    }
})

paper.addEventListener("click", () => {
    if(computerChoice == "rock") {
        paragraph.textContent = "win";
    } else if(computerChoice == "scissors") {
        paragraph.textContent = "lose";
    } else {
        paragraph.textContent = "tie";
    }
})

scissors.addEventListener("click", () => {
    if(computerChoice == "paper") {
        paragraph.textContent = "win";
    } else if(computerChoice == "rock") {
        paragraph.textContent = "lose";
    } else {
        paragraph.textContent = "tie";
    }
})