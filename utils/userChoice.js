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
            user.textContent = `User chose ${userChoice}`;
            document.querySelector("#show").appendChild(user);
            // Append Computer Choice
            const computer = document.createElement("p");
            computer.textContent = `Computer chose ${computerChoice}`;
            document.querySelector("#show").appendChild(computer);
            // Append result
            const resultText = document.createElement("p");
            resultText.textContent = `${result}`;
            document.querySelector("#show").appendChild(resultText);
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
            document.querySelector("#show").appendChild(resetButton);
            resetButton.addEventListener("click", () => {
                document.querySelector("#show").textContent = "";
                document.body.removeChild(overlay);
            });

        })
    })
}

export { addClickEventToImages };