const grid = document.querySelector(".grid");
let indexPlayer = 203;

for (let i = 0; i < 210; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));

const invadersArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 37,
];

function draw() {
  for (let i = 0; i < invadersArray.length; i++) {
    squares[invadersArray[i]].classList.add("invader");
  }
}

draw();

squares[indexPlayer].classList.add("player");

const movePlayer = function (event) {
  console.log(event);
  squares[indexPlayer].classList.remove("player");
  if (event.key === "ArrowLeft" || event.key === "a") {
    if (indexPlayer > 196 && indexPlayer <= 210) {
      indexPlayer--;
    }
  } else if (event.key === "ArrowRight" || event.key === "d") {
    if (indexPlayer >= 196 && indexPlayer < 209) {
      indexPlayer++;
    }
  }
  squares[indexPlayer].classList.add("player");
};

document.addEventListener("keydown", movePlayer);
