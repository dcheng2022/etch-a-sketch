let rainbow = false;
const gridContainer = document.querySelector(".grid-container");
const resizeButton = document.querySelector(".resize-button");
const rainbowButton = document.querySelector(".rainbow-button");
const clearButton = document.querySelector(".clear-button");
resizeButton.addEventListener("click", sizePrompt);
clearButton.addEventListener("click", clearGrid);
rainbowButton.addEventListener("click", () => rainbow = !rainbow);

function sizePrompt() {
    const size = parseInt(prompt("Please enter desired number of rows or columns up to a maximum of 100", "16"));
    resizeGrid(size);
}

function resizeGrid(size = 16) {

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
    const tempDiv = e.target;
    if (rainbow) {
        if (tempDiv.style["background-color"]) {
            // Replaces all chars not 0 to 9 with '', returns replaced string with decimal
            const brightnessNum = tempDiv.style.filter.replace(/[^0-9.]/g,'');
            tempDiv.style.filter = `brightness(${brightnessNum - 0.10})`;
        } else {
            tempDiv.style["background-color"] = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
            tempDiv.style.filter = "brightness(1)";
        }
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