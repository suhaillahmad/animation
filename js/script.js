const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let speed = 3;
let stars = [];
let radius = 2 + Math.random() * 2;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function generateStars(ctx, location) {
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

  if (
    location.x > window.innerWidth ||
    location.x < 0 ||
    location.y > window.innerHeight ||
    location.y < 0
  ) {
    location.x = Math.random() * window.innerWidth;
    location.y = Math.random() * window.innerHeight;
  }
  let distance = Math.sqrt(
    Math.pow(location.x - center.x, 2) + Math.pow(location.y - center.y, 2)
  );
  radius = 1 + (3 * distance) / window.innerWidth;
}

for (let i = 0; i < 400; i++) {
  let loc = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
  };
  stars.push(loc);
  generateStars(ctx, loc);
}
animate();

function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();

  for (let i = 0; i < stars.length; i++) {
    update(stars[i]);
    generateStars(ctx, stars[i]);
  }
  window.requestAnimationFrame(animate);
}
