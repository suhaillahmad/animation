const grid = document.querySelector(".grid");
let indexPlayer = 203;
let width = 14;
let movement = 1;
let flag = true;
let flag2 = false;

for (let i = 0; i < 210; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));

const invadersArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 37,
];

function drawInvaders() {
  for (let i = 0; i < invadersArray.length; i++) {
    squares[invadersArray[i]].classList.add("invader");
  }
}

function removeInvaders() {
  for (let i = 0; i < invadersArray.length; i++) {
    squares[invadersArray[i]].classList.remove("invader");
  }
}

const moveInvader = function () {
  const left = invadersArray[0] % width === 0;
  const right = invadersArray[invadersArray.length - 1] % width === width - 1;

  removeInvaders();

  if (right && flag) {
    for (let i = 0; i < invadersArray.length; i++) {
      invadersArray[i] += width + 1;
      movement = -1;
      flag = false;
      flag2 = true;
    }
  }

  if (left && flag2) {
    for (let i = 0; i < invadersArray.length; i++) {
      invadersArray[i] += width - 1;
      movement = 1;
      flag2 = false;
      flag = true;
    }
  }

  for (let i = 0; i < invadersArray.length; i++) {
    invadersArray[i] += movement;
  }
  drawInvaders();

  if (squares[indexPlayer].classList.contains("invader", "player")) {
    clearInterval(gameStarted);
  }
};

drawInvaders();

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
const gameStarted = setInterval(moveInvader, 500);
