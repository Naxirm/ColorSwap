const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn-hero");
const main = document.querySelector("body");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  main.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
