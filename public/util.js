let interval = 1;
const colorArray = ["#DAA520", "#BC8F8F", "#ccccff", '#ff7f7f']

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
  document.body.style.webkitTransition = `${color} 2000ms linear`;
  document.body.style.transition = `${color} 2000ms linear`
}

changeColors();
