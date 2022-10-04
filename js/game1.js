const spaceShips = document.querySelectorAll(".space");
const aliens = document.querySelectorAll(".alien");
const cursor = document.querySelector(".cursor");
const start = document.querySelector(".start");
const scores = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
let flag = true;
let score = 0;
let highScores = 0;
let lastIndex;
let gameEnd = 1;

function hammer() {
  window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });

  window.addEventListener("mousedown", () => {
    cursor.classList.add("active");
  });
  window.addEventListener("mouseup", () => {
    cursor.classList.remove("active");
  });
}

function removeHammer() {
  window.addEventListener("mousemove", (e) => {
    cursor.style.top = 110 + "px";
    cursor.style.left = 100 + "px";
  });
}

function indexCalculator() {
  let index = Math.floor(Math.random() * 6);
  return index;
}

function gameStarted() {
  let idx = indexCalculator();
  if (idx === lastIndex) {
    return gameStarted();
  }
  lastIndex = idx;
  spaceShips[idx].classList.add("up");
  setTimeout(() => {
    spaceShips[idx].classList.remove("up");
    if (gameEnd) gameStarted();
  }, 700);
}
start.addEventListener("click", () => {
  hammer();
  if (gameEnd === 0 || flag === true) {
    scores.textContent = 0;
    score = 0;
    gameEnd = 1;
    flag = false;
    gameStarted();
    setTimeout(() => ((gameEnd = 0), removeHammer()), 20000);
  }
});

function scoreUpdate(e) {
  if (e.isTrusted) {
    score++;
    scores.textContent = score;
  }

  if (score >= highScores) {
    console.log(score);
    highScores = score;
    console.log(highScores);
    highScore.textContent = highScores;
  }
}

aliens.forEach((alien) => alien.addEventListener("click", scoreUpdate));
