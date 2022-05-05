// NodeList that selects all div containers 
// for node of NodeList... loop, create and append 16 divs per node
// Create 16x16 grid of square divs and append to containers
// Future: Also add event listener for hover 
const containerList = document.querySelectorAll(".container");

for (container of containerList) {
    let i = 0;
    while (i < 16) {
        let tempDiv = document.createElement("div");
        tempDiv.addEventListener("mouseover", hoverChange);
        container.appendChild(tempDiv);
        i++;
    }    
}

function hoverChange(e) {
    const tempDiv = e.target;
    tempDiv.classList.toggle("hover-active");
}