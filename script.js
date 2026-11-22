container = document.querySelector("#container");
function createGrid(size) {
  const totalSize = size * size;
  for (let i = 0; i < totalSize; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("box");
    gridBox.addEventListener("mouseover", () => {
      gridBox.classList.add("hovered");
    });
    container.appendChild(gridBox);
  }
}
createGrid(16);
