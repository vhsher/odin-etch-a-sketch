const sketchpadHTML = document.querySelector('.sketchpad');
const changeGridHTML = document.querySelector('#change-grid');

for (let i = 0; i < 256; i++) {
  const pixelHTML = document.createElement('div');
  sketchpadHTML.appendChild(pixelHTML);
  pixelHTML.classList.add('pixel')
  pixelHTML.style.width = '32px';
  pixelHTML.style.height = '32px';
}

changeGridHTML.addEventListener("click", changeGrid);

function changeGrid() {
  let amount = prompt("Type 1-100 (Example: 10 = 10x10)", 16);
  let grid = amount ** 2;
  let size = 512 / amount;

  document.querySelectorAll(".pixel").forEach(e => e.remove());

  for (let i = 0; i < grid; i++) {
    const pixelHTML = document.createElement('div');
    sketchpadHTML.appendChild(pixelHTML);
    pixelHTML.classList.add('pixel')
    pixelHTML.style.width = `${size}px`;
    pixelHTML.style.height = `${size}px`;
  }

}