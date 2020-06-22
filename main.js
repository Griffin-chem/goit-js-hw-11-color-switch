const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const res = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  target: document.querySelector("body")
};

let switchID = null;

const startSwitch = function () {
  switchID = setInterval(() => {
      i = randomIntegerFromInterval(0, colors.length-1);
      console.log(i);
      console.log(colors[i]);
      res.target.style.backgroundColor = colors[i];
    },
    1000);
  res.start.removeEventListener("click", startSwitch);
};

const stopSwitch = function () {
  clearInterval(switchID);
  res.start.addEventListener("click", startSwitch);
}

res.start.addEventListener("click", startSwitch);
res.stop.addEventListener("click", stopSwitch)