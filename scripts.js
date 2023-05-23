addBoxes(16);

function addBoxes(numberOfBoxesPerSide) {
    const container = document.getElementById("container");

    const width = container.clientWidth / numberOfBoxesPerSide;
    const height = container.clientHeight / numberOfBoxesPerSide;

    for (let i = 0; i < numberOfBoxesPerSide * numberOfBoxesPerSide; i++) {
        let box = document.createElement("div");
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;

        container.appendChild(box);
    }
}