const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const bodyRef = document.querySelector("body");
const startBtnRef = document.querySelector("button[data-action=start]");
const stopBtnRef = document.querySelector("button[data-action=stop]");
let timerId = null;
let isActive = false;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  console.log(colorIndex);
  bodyRef.style.backgroundColor = colors[colorIndex];
}

startBtnRef.addEventListener("click", () => {
  if (isActive) {
    return;
  }

  isActive = true;
  timerId = setInterval(() => changeColor(), 1000);
});

stopBtnRef.addEventListener("click", () => {
  clearInterval(timerId);
  isActive = false;
});
