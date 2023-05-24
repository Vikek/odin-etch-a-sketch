document.querySelector(".boxAmount").addEventListener("click", function() {
    let numberOfBoxes = prompt("Enter number of boxes per side");
    addBoxes(numberOfBoxes);
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", changeBoxColor));
});
const chosenColor = "blue";

function addBoxes(numberOfBoxesPerSide) {
    const container = document.getElementById("container");
    container.replaceChildren();

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
