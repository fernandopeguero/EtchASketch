let gridSize = 1;
const containerWidth = 500;

const userInput = document.querySelector(".grid-size");

userInput.addEventListener("input", (e) => {
    gridSize = e.target.value || 1;

    createGrid(gridSize);
})


function createGrid(size) {

    const container = document.querySelector(".grid-container");

    const gridWidth = 500 / Number(size);

    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("block");
            div.style.minWidth = gridWidth +"px";
            container.appendChild(div)
        }
    }

}


createGrid(1);


