let gridSize = 1;
const containerWidth = 500;

// element to show current drawing status make user have a eye queue of what going on

const currentStatus = document.querySelector(".status");

const userInput = document.querySelector(".grid-size");

let currentColor = "black";

const grayScale = [
    "#e5e6e5",
    "#c9cac9",
    "#aeafae",
    "#939493",
    "#797a79",
    "#616161",
    "#494a49",
    "#323332",
    "#1d1e1d",
    "#030503",
];
const rainbowList = [
    "#9400D3",
    "#4B0082",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#FF0000",
];

// color ranges
const currentGrayColor = nextColor(grayScale);
const currentRainbowColor = nextColor(rainbowList);

const buttonControler = document.querySelector(".buttons-controler");

const colorPicker = document.querySelector(".color-picker");

userInput.addEventListener("input", (e) => {
    gridSize = e.target.value || 1;

    createGrid(gridSize);
});

function createGrid(size) {
    gridSize = Number(size);

    const container = document.querySelector(".grid-container");

    const gridWidth = 500 / Number(size);

    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("block");
            div.style.minWidth = gridWidth + "px";

            div.addEventListener("mouseover", function (e) {
                if (currentColor === "black") {
                    this.style.backgroundColor = "black";
                } else if (currentColor === "erase") {
                    this.style.backgroundColor = "white";
                } else if (currentColor === "gray-scale") {
                    this.style.backgroundColor = currentGrayColor();
                } else if (currentColor === "rainbow") {
                    this.style.backgroundColor = currentRainbowColor();
                } else {
                    this.style.backgroundColor = currentColor;
                }
            });
            container.appendChild(div);
        }
    }
}

createGrid(1);

function reset() {
    if (gridSize > 1) {
        createGrid(gridSize);
    } else {
        userInput.value = 1;
        gridSize = 1;
        createGrid(1);
    }
}

function nextColor(list) {
    let counter = 0;

    return () => {
        if (counter === list.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        return list[counter];
    };
}

function setStatus(status) {
    currentStatus.textContent = status;
}

// Buttons event listeners

buttonControler.addEventListener("click", (e) => {
    const target = e.target.classList[0];

    if (target === "reset") {
        reset();
    } else {
        currentColor = e.target.classList[0];
    }

    changeStatusText();
});

// color picker

colorPicker.addEventListener("change", (e) => {
    currentColor = e.target.value;
    changeStatusText();
});

function changeStatusText() {
    switch (currentColor) {
        case "black":
            setStatus("Drawing in black...");
            break;
        case "gray-scale":
            setStatus("Gray scaling the canvas...👌");
            break;
        case "rainbow":
            break;
        case "erase":
            setStatus("Erasing...");
            break;
        case "reset":
            setStatus("🌈 Let there be color 🌈");
            break;
        default:
            setStatus("Choosing my own color..🖼️🖌️");
            break;
    }
}
