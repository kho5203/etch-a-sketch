const container = document.querySelector("#container");
const createButton = document.querySelector(".create");
function createGrid(size) {
  const totalSize = size * size;
  for (let i = 0; i < totalSize; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("box");
    gridBox.style.width = `calc(100% / ${size})`;
    gridBox.style.height = `calc(100% / ${size})`;

    gridBox.addEventListener("mouseover", () => {
      if (gridBox.style.backgroundColor === "") {
        gridBox.style.backgroundColor = getRandomRGB();
        gridBox.style.opacity = "1";
      } else {
        const currentOpacity = Number(gridBox.style.opacity);
        gridBox.style.opacity = Math.max(0, +(currentOpacity - 0.1).toFixed(1));
      }
    });
    container.appendChild(gridBox);
  }
}
createGrid(16);

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

createButton.addEventListener("click", () => {
  const numberInput = Number(
    prompt("Enter the number of squares per side (max 100):"),
  );
  if (numberInput === 0) {
    return;
  } else if (
    numberInput > 100 ||
    numberInput < 1 ||
    !Number.isInteger(numberInput)
  ) {
    alert("Please enter a number between 1 and 100.");
  } else {
    container.replaceChildren();
    createGrid(numberInput);
  }
});
