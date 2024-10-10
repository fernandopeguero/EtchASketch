let gridSize = 1;
const containerWidth = 500;

const userInput = document.querySelector(".grid-size");



const buttonControler = document.querySelector(".buttons-controler");

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

            div.addEventListener("mouseover" , function (e) {

                this.style.backgroundColor = currentColor;
            })
            container.appendChild(div)
        }
    }

}


createGrid(1);



// Buttons event listeners 

buttonControler.addEventListener("click" , (e) => {

    console.log(e.target.classList[0]);
})