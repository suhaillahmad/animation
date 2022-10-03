const spaceShips = document.querySelectorAll(".space");
const flag = true;
let lastIndex;

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
  }, 700);
}

document.querySelector(".start").addEventListener("click", () => {
  setInterval(gameStarted, 1000);
});
