addBoxes(100);
const chosenColor = "blue";

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("mouseover", changeBoxColor));

function addBoxes(numberOfBoxesPerSide) {
    const container = document.getElementById("container");

    const width = container.clientWidth / numberOfBoxesPerSide;
    const height = container.clientHeight / numberOfBoxesPerSide;

    for (let i = 0; i < numberOfBoxesPerSide * numberOfBoxesPerSide; i++) {
        let box = document.createElement("div");
        box.classList.add("box");

        box.style.width = `${width}px`;
        box.style.height = `${height}px`;

        container.appendChild(box);
    }
}

function changeBoxColor(e) {
    e.target.style.backgroundColor = chosenColor;
}
