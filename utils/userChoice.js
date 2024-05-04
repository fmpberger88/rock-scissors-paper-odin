import { getComputerChoice } from "./computerChoice.js";
import { roundWinner } from "./roundWinner.js";

function addClickEventToImages() {
    const buttons = document.querySelectorAll(".icons")
    const imageContainer = document.querySelector("#icons")
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const userChoice = button.dataset.choice; // use data-* attribute to get choice type
            const computerChoice = getComputerChoice();
            const result = roundWinner(userChoice, computerChoice);
            console.log(userChoice, computerChoice, result);

            // Append User choice
            const user = document.createElement("p");
            const userImage = document.createElement("img");

            user.textContent = `User chose ${userChoice}`;
            userImage.src = `../images/${userChoice}.svg`;

            document.querySelector("#showUser").appendChild(user);
            document.querySelector("#showUser").appendChild(userImage);

            // Append Computer Choice
            const computer = document.createElement("p");
            const computerImage = document.createElement("img");

            computer.textContent = `Computer chose ${computerChoice}`;
            computerImage.src = `../images/${computerChoice}.svg`;

            document.querySelector("#showComputer").appendChild(computer);
            document.querySelector("#showComputer").appendChild(computerImage);
            // Append result
            const resultText = document.createElement("p");
            resultText.textContent = `${result}`;
            document.querySelector("#result").appendChild(resultText);
            // deactivat buttons
            buttons.forEach(button => button.disabled = true)

            // Deaktivieren der Bilder durch Hinzufügen eines Overlays
            const overlay = document.createElement("div");
            overlay.id = "overlay";
            overlay.style.position = "absolute";
            overlay.style.top = imageContainer.offsetTop + "px";
            overlay.style.left = imageContainer.offsetLeft + "px";
            overlay.style.width = imageContainer.offsetWidth + "px";
            overlay.style.height = imageContainer.offsetHeight + "px";
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)"; // Leicht transparent, um die Deaktivierung zu zeigen
            document.body.appendChild(overlay);
            // reset button
            const resetButton = document.createElement("button");
            resetButton.textContent = "Play again"
            document.querySelector("#result").appendChild(resetButton);
            resetButton.addEventListener("click", () => {
                document.querySelector("#result").textContent = "";
                document.body.removeChild(overlay);
                document.querySelector('#showUser').removeChild(userImage);
                document.querySelector("#showUser").removeChild(user);
                document.querySelector('#showComputer').removeChild(computerImage);
                document.querySelector("#showComputer").removeChild(computer);
            });

        })
    })
}

export { addClickEventToImages };