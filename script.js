const sketchpadHTML = document.querySelector('.sketchpad');
const changeGridHTML = document.querySelector('#change-grid');

changeGridHTML.addEventListener('click', changeSketchPixels);

for (let i = 0; i < 256; i++) {
  let sketchPixelHTML = document.createElement("div");
  sketchPixelHTML.classList.add('sketchpixel');
  sketchpadHTML.appendChild(sketchPixelHTML);
}

function changeSketchPixels() {

  let input = prompt("Enter a value (Example: 16 = 16x16)", 10);
  let amount = input ** 2;

  document.querySelectorAll('.sketchpixel').forEach(item => {
    item.remove();
  })

  for (let i = 0; i < amount; i++) {
    let sketchPixelHTML = document.createElement("div");
    sketchPixelHTML.classList.add('sketchpixel');
    sketchpadHTML.appendChild(sketchPixelHTML);
  }

}

const sketchpadEvents = ['mousedown', 'mouseup', 'mouseleave'];
sketchpadEvents.forEach(event => {

  sketchpadHTML.addEventListener(event, (e) => {

    if (e.type == "mousedown") {
      document.querySelectorAll('.sketchpixel').forEach(item => {
        item.addEventListener('mousemove', turnBlack);
      });
    } else {
      document.querySelectorAll('.sketchpixel').forEach(item => {
        item.removeEventListener('mousemove', turnBlack);
      });
    }

  });

});

function turnBlack(e) {
  e.target.classList.add("black");
}