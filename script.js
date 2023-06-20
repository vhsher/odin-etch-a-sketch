let sketchpadHTML = document.querySelector('.sketchpad'),
  changeGridHTML = document.querySelector('#change-grid');

for (let i = 0; i < 256; i++) {
  const pixelHTML = document.createElement('div');
  sketchpadHTML.appendChild(pixelHTML);
  pixelHTML.classList.add('pixel')
  pixelHTML.style.width = '32px';
  pixelHTML.style.height = '32px';
}

changeGridHTML.addEventListener("click", changeGrid);

function changeGrid(e) {
  let amount = e.target.value;
  let grid = amount ** 2;
  let size = 512 / amount;

  const pixelsHTML = document.querySelectorAll('.pixel');
  pixelsHTML.forEach(e => e.remove());

  for (let i = 0; i < grid; i++) {
    const pixelHTML = document.createElement('div');
    sketchpadHTML.appendChild(pixelHTML);
    pixelHTML.classList.add('pixel')
    pixelHTML.style.width = `${size}px`;
    pixelHTML.style.height = `${size}px`;
  }
  
  gridValueHTML.textContent = e.target.value;
}

let pixelsHTML = document.querySelectorAll('.pixel');

pixelsHTML.forEach(item => {
  item.addEventListener('click', turnBlack);
});

function turnBlack(e) {
  e.target.classList.add('black');
}

let gridSliderHTML = document.querySelector("#grid-slider");
let gridValueHTML = document.querySelector("#grid-value");

gridValueHTML.textContent = gridSliderHTML.value;

gridSliderHTML.addEventListener("input", changeGrid);

function updateValue(e) {
  gridValueHTML.textContent = e.target.value;
}