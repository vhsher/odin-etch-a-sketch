let sketchpadHTML = document.querySelector('.sketchpad');
let gridSliderHTML = document.querySelector("#grid-slider");
let gridValueHTML = document.querySelector("#grid-value");

gridSliderHTML.addEventListener("input", changeGrid);

function changeGrid(e) {
  let amount = e.target.value;
  let grid = amount ** 2;
  let size = 512 / amount;

  const oldPixelsHTML = document.querySelectorAll('.pixel');
  oldPixelsHTML.forEach(e => e.remove());

  for (let i = 0; i < grid; i++) {
    const pixelHTML = document.createElement('div');
    sketchpadHTML.appendChild(pixelHTML);
    pixelHTML.classList.add('pixel')
    pixelHTML.style.width = `${size}px`;
    pixelHTML.style.height = `${size}px`;
  }
  
  let pixelsHTML = document.querySelectorAll('.pixel');

  pixelsHTML.forEach(item => {
    item.addEventListener('click', turnBlack);
  });

  gridValueHTML.textContent = e.target.value;
}

function turnBlack(e) {
  e.target.classList.add('black');
}

gridValueHTML.textContent = gridSliderHTML.value;

function updateValue(e) {
  gridValueHTML.textContent = e.target.value;
}