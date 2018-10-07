let interval = 1;
const colorArray = ["#4c4cff", "#7f7fff", "#9999ff", "#b2b2ff", "#ccccff"]

const changeColors = () => {
  setInterval(colorPicker, 2000);
}

const colorPicker = () => {
  let color = '';
  const random = Math.floor(Math.random() * colorArray.length);
  if (interval === 1) {
    color = colorArray[random];
    interval++
  } else if (interval === 2) {
    color = colorArray[random];
  }

  document.body.style.backgroundColor = color;
}

changeColors();
