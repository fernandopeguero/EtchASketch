let gridSize = 1;
const containerWidth = 500;

const userInput = document.querySelector(".grid-size");

let currentColor = "black";
const currentGrayColor = nextGrayColor();
const grayScale = ["#e5e6e5", "#c9cac9", "#aeafae", "#939493", "#797a79", "#616161", "#494a49", "#323332", "#1d1e1d", "#030503"];

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
                    this.style.backgroundColor = currentGrayColor();
                }
                
            })
            container.appendChild(div)
        }
    }
}

createGrid(1);


function reset() {
    if(gridSize > 1){
        createGrid(gridSize);
    } else {
        userInput.value = 1;
    gridSize = 1;
    createGrid(1);
    }
    
}

function nextGrayColor () {
    let counter = 0 ;

    return () => {
        if(counter === grayScale.length - 1) {
            counter = 0;
        } else {
            counter++
        }
        return grayScale[counter];
    }
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



