const currentPlayer = document.querySelector(".currentPlayer");
//criei a matriz que vai servir como base de posição do jogo,além disso criei o botão que atualiza de acordo com o indice e o jogadoe que esta a fazer a jogada
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