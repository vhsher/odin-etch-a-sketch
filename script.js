let sketchpadHTML = document.querySelector('.sketchpad');

for (let i = 0; i < 256; i++) {
  let sketchPixelHTML = document.createElement("div");
  sketchPixelHTML.classList.add('sketchpixel');
  sketchpadHTML.appendChild(sketchPixelHTML);
}

function turnBlack(e) {
  e.target.classList.add("black");
}

['mousedown', 'mouseup', 'mouseleave'].forEach(event => {
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