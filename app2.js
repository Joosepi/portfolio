const hireMeBox = document.getElementById("hire-me-box");

// create canvas element
const canvas = document.createElement("canvas");

// set canvas size
canvas.width = hireMeBox.clientWidth;
canvas.height = hireMeBox.clientHeight;

// get canvas context
const ctx = canvas.getContext("2d");

// create background pattern
const patternSize = 20;
for (let x = 0; x < canvas.width; x += patternSize) {
  for (let y = 0; y < canvas.height; y += patternSize) {
    if (Math.random() < 0.5) {
      ctx.fillStyle = "#e7eff6";
    } else {
      ctx.fillStyle = "#f7e7e7";
    }
    ctx.fillRect(x, y, patternSize, patternSize);
  }
}

// set background image to the canvas pattern
hireMeBox.style.backgroundImage = `url(${canvas.toDataURL()})`;