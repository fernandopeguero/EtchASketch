let gridSize = 1;
const containerWidth = 500;

const userInput = document.querySelector(".grid-size");

let currentColor = "black";
const grayScale = ["#dddddd", "#bbbbbb", "#565656", "#484848", "#3a3a3a", "#2c2c2c", "#1b1b1b", "#000"];

const buttonControler = document.querySelector(".buttons-controler");

userInput.addEventListener("input", (e) => {
    gridSize = e.target.value || 1;

    createGrid(gridSize);
})


function createGrid(size) {
    
    gridSize = Number(size);

    const container = document.querySelector(".grid-container");

    const gridWidth = 500 / Number(size);

    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("block");
            div.style.minWidth = gridWidth +"px";

            div.addEventListener("mouseover" , function (e) {

                if(currentColor === "black"){
                    this.style.backgroundColor = "black";
                } else if (currentColor === "gray-scale"){
                    this.style.backgroundColor = grayScale[Math.ceil(Math.random() * grayScale.length)];
                }
                
            })
            container.appendChild(div)
        }
    }
}

createGrid(1);


function reset() {
    userInput.value = 1;
    gridSize = 1;
    createGrid(1);
}

// Buttons event listeners 

buttonControler.addEventListener("click" , (e) => {

    const target = e.target.classList[0];

    switch(target) {
        case "reset":
            reset();
            break;
        default :
            currentColor = e.target.classList[0];
    }
    
})



