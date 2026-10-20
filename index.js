const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";
const lettersArr = letters.split("");

const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = Math.random() * -100;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = lettersArr[Math.floor(Math.random() * lettersArr.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 35);
