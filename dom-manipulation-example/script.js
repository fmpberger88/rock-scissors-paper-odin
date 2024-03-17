const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// add p
const redText = document.createElement("p");
redText.style.cssText = "color: red;";
redText.textContent = "Hey I'm red!";
container.appendChild(redText);

// add h3
const title = document.createElement("h3");
title.textContent = "I'm a blue h3!";
title.style.cssText = "color: blue;";
container.appendChild(title);

// add a div
const div = document.createElement("div")
div.style.cssText = "border: 1px black solid; background-color: pink;"

// add h1 element to div
divTitle = document.createElement("h1")
divTitle.textContent = "I'm in a div"

// add p element to div
divP = document.createElement("p")
divP.textContent = "ME TOO";

// append both to div before div appends to container
div.appendChild(divTitle);
div.appendChild(divP);

container.appendChild(div);

// event handler with set proberty
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// event listener
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
})

// create the call-back function for button Do it!
const youDidIt = () => {
    return alert("Yah! This is it!");
}

const didIt = document.querySelector("#youDidIt");

didIt.addEventListe
ner("click", youDidIt);

// example from Odin
didIt.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

