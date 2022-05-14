// NodeList that selects all div containers 
// for node of NodeList... loop, create and append 16 divs per node
// Create 16x16 grid of square divs and append to containers
let rainbow = false;
const gridContainer = document.querySelector(".grid-container");
const resizeButton = document.querySelector(".resize-button");
const rainbowButton = document.querySelector(".rainbow-button");
const clearButton= document.querySelector(".clear-button");
resizeButton.addEventListener("click", sizePrompt);
clearButton.addEventListener("click", clearGrid);
rainbowButton.addEventListener("click", () => rainbow = !rainbow);

function sizePrompt() {
    const size = parseInt(prompt("Please enter desired number of rows or columns up to a maximum of 100", "16"));
    resizeGrid(size);
}

function resizeGrid(size=16) {

    const containerList = document.querySelectorAll(".container");
    for (const container of containerList) {
        container.remove();
    }

    let i = 1;
    while (i <= size) {
        let tempRow = document.createElement("div");
        tempRow.setAttribute("class", `row-${i} container`);
        gridContainer.appendChild(tempRow);
        let j = 1;
            while (j <= size) {
            let tempDiv = document.createElement("div");
            tempDiv.addEventListener("mouseover", hoverChange);
            tempRow.appendChild(tempDiv);
            j++
            }
        i++;
    }
}

function hoverChange(e) {
    //TODO: change toggle to add, then add clear button option
    // if-else statement, if class toggled then darken, if not generate random numbers 
    // if-else to check if colored option is toggled
    const tempDiv = e.target;
    if (rainbow) {
        tempDiv.style["background-color"] = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
    } else {
        tempDiv.style["background-color"] = "black";
    }
}

function clearGrid() {
    const tempDivList = document.querySelectorAll(".container div");
    for (const tempDiv of tempDivList) {
        tempDiv.removeAttribute("style");
    }
}

resizeGrid();