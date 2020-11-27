function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowDown") {
    moveVertical(player, 50);
  } else if (e.key === "ArrowUp") {
    moveVertical(player, -50);
  } else if (e.key === "ArrowRight") {
    moveHorizontal(player, 50);
  } else if (e.key === "ArrowLeft") {
    moveHorizontal(player, -50);
  }
  if (isTouching(player, coin)) moveCoin();
});

const moveVertical = (element, amount) => {
  if (!element.style.top) element.style.top = "100px";
  element.style.top = `${parseInt(element.style.top) + amount}px`;
};

const moveHorizontal = (element, amount) => {
  if (amount < 0) {
    player.style.transform = "scale(-1,1)";
  } else {
    player.style.transform = "scale(1,1)";
  }
  if (!element.style.left) element.style.left = "10px";
  element.style.left = `${parseInt(element.style.left) + amount}px`;
};

const moveCoin = () => {
  const y = Math.floor(Math.random() * window.innerHeight);
  const x = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
