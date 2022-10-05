const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let speed = 5;
let stars = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function generateStars(ctx, location) {
  let radius = 2 + Math.random() * 2;
  ctx.beginPath();
  ctx.arc(location.x, location.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
}

function update(location) {
  let center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  let angle = Math.atan2(location.y - center.y, location.x - center.x);
  location.x += speed * Math.cos(angle);
  location.y += speed * Math.sin(angle);
}

for (let i = 0; i < 100; i++) {
  let loc = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
  };
  stars.push(loc);
  generateStars(ctx, loc);
}
