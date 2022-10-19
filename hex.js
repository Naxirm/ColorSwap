const btn = document.querySelector(".btn-hero");
const main = document.querySelector("body");
const color = document.querySelector(".color");

function generateRandomColor() {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

btn.addEventListener("click", function () {
  const couleurRandom = generateRandomColor();
  main.style.backgroundColor = couleurRandom;
  color.textContent = couleurRandom;
});
