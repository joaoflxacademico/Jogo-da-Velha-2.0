const currentPlayer = document.querySelector(".currentPlayer");

const positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const updateDisplay = (index, player) => {
  const button = document.querySelector(`.game button[data-i="${index}"]`);
  button.innerHTML = player;
  button.removeEventListener("click", () => newMove(index));
};