const spaceShips = document.querySelectorAll(".space");
const aliens = document.querySelectorAll(".alien");
let flag = true;
let score = 0;
let highScores = 0;
let lastIndex;
let gameEnd = 1;
let namee;

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
  }, 7000);
}
document.querySelector(".start").addEventListener("click", () => {
  if (gameEnd === 0 || flag === true) {
    document.querySelector(".score").textContent = 0;
    score = 0;
    gameEnd = 1;
    flag = false;
    gameStarted();
    setTimeout(() => (gameEnd = 0), 20000);
  }
});
