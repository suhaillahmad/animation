const grid = document.querySelector(".grid");
const initialPlayerPosi = 203;

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

squares[initialPlayerPosi].classList.add("player");
