const btn = document.querySelector(".btn-hero");
const main = document.querySelector("body");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const hexColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
