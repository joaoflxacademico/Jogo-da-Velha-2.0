//teste
//Criação dos simbolos utilizados no jogo
const simbolo = ['x','!','$','o','?','%']//Criação dos simbolos que serão utilizados no jogo.
//const atual = document.querySelector(".atual")//Criação de uma constante por meio da busca com o 'querySelector' dentro do document.

//atual.innerHTML = `ATUAL JOGADA: ${simbolo[0]}`//Representação de qual jogador detém a atual jogada.

const jogada_da_vez = (jogada,simboloA,simboloB) =>{//Função com o objetivo de alterenar o simbolo da jogada atual.
  if(jogada==simboloA){return simboloB}
  else{return simboloA} 
}

const simbolos = (num) =>{switch (num) {// Função auxiliar que irá selecionar qual é o simbolo sorteado pelo 'Math.random'
  case 0: return simbolo[0]
  case 1: return simbolo[1]
  case 2: return simbolo[2]
  case 3: return simbolo[3]
  case 4: return simbolo[4]
  case 5: return simbolo[5]
}
}

const turno = (simboloA=simbolo[0],simboloB=simbolo[3],cont=0) => { /**  Função que irá utilizar da recursividade para repetir os turnos com os simbolos diferentes,
  esses que serão sorteados pela função auxiliar 'simbolos' */ //Essa função já inicia o jogo com os simbolos 'x' e 'o', isso pode ser alterado posteriormente.
  if (cont=4){
    const num1 = Math.floor(Math.random()*3)//Utilização da função 'Math.random' para randomizar as escolhas do simbolos.
    const num2 = Math.floor(Math.random()*3)+3
    return turno(simbolos(num1),simbolos(num2),cont=0)}//Retorno de uma nova rodada, após duas rodadas, com novos simbolos e o seu contador zerado.
    else{
      return turno(simboloA,simboloB,cont+1/**função de rodada, ou função clique*/)
    }
}
/*const simbolos = ["x", "$", "!", "?", "o", "%"]

const jogador = (contador) => {
  if (contador === 2) {
    const num1 = Math.floor(Math.random() * 3) + 1; // usa a função random para criar um numero ente 0 e 99999999999 e multiplica por uma valor x depois usa o float para transformar esse número em um inteiro ente x e y 
 const num2 = (Math.floor(Math.random() * 3) + 4) % 6

    console.log(`Jogador 1: ${simbolos[num1]}`)
    console.log(`Jogador 2: ${simbolos[num2]}`)
    return jogador(0); // Reinicia o jogo com novos símbolos
  } else {
    const jogadorAtual = contador % 2 === 0 ? "Jogador 1" : "Jogador 2"
    const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)] //define de forma aleatoria qual sera o simbolo do jogador
    console.log(`${jogadorAtual}: ${simbolo}`)
    return jogador(contador + 1) // Chama recursivamente para o próximo turno
  }
};

// Inicia o jogo com o jogador 1
jogador(0)*/ 



//código para verificar vitória  

// Função tem como parametro uma matriz ,um simbolo que vai ser verificado,linha da matriz,coluna da matriz e as direçoes)
function verificarSequencia(matriz, símbolo, linha, coluna, direcaoLinha, direcaoColuna, contador = 0) {
  const linhas = matriz.length
  const colunas = matriz[0].length
//vai verificar se determinado elemento reaalmente pertence a matriz dada se n exister ouse o simbolo é diferente do simbolo que o código esta prcurando e retorna false caso essapreposições anterioress sejam verdadeiras   
  if (linha < 0 || linha >= linhas || coluna < 0 || coluna >= colunas || matriz[linha][coluna] !== símbolo) {
    return false
  }

  if (contador === 3) {
    return true
  }
//chamada recursiva da propria função porem avançando uma casa da matriz para verificar toda a funçãp
  return verificarSequencia(matriz, símbolo, linha + direcaoLinha, coluna + direcaoColuna, direcaoLinha, direcaoColuna, contador + 1)
}

// Função para verificar se existem 4 símbolos iguais em qualquer direção
function verificarMatriz(matriz) {
  const directions = [
    [0, 1],   // Direita
    [1, 0],   // baixo
    [1, 1],   // Diagonal  direita
    [1, -1],  // Diagonal  esquerda
  ];
//vai ver se existe uma sequencia de simbolos em uma posição nao sendo ele vazio
  const verificaPosicao = (i, j) => {
    const símbolo = matriz[i][j]
// Verifica apenas se a posição não está vazia
    if (símbolo !== ' ') 
    // Verifica se há uma sequência em alguma das direções possíveis
    
    
    {
      return directions.some(([di, dj]) => verificarSequencia(matriz, símbolo, i, j, di, dj))
    }

    return false;
  }
//
  return matriz.some((row, i) => row.some((_, j) => verificaPosicao(i, j)))
}
//exemplo de jogo
const minhaMatriz =  [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  ['H', 'K', 'J', 'K', 'L', 'M', 'N'],
  ['O', 'P', 'A', 'R', 'S', 'T', 'U'],
  ['V', 'W', 'X', 'A', 'Z', '0', '1'],
  ['2', '3', '4', '5', '6', '7', '8'],
  ['9', '!', '@', '#', '$', '%', '^'],
  ['&', '*', '(', ')', '_', '+', '=']
]

if (verificarMatriz(minhaMatriz)) {
  console.log('Existem 4 símbolos iguais na matriz.')
} else {
  console.log('Não existem 4 símbolos iguais na matriz.')
}



//codigo do jogo da velha original modificado para rodar no tbuleiro 7x7 e marcar pontos com sequencias de 4-Jorge(usando a matriz feita por Jackson)
const atual = document.querySelector(".atual");

let selected;
let player = "X";

const positions = [
  [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7],
  [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], [11, 12, 13, 14],
  [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [18, 19, 20, 21],
  [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [25, 26, 27, 28],
  [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35],
  [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], [39, 40, 41, 42],
  [43, 44, 45, 46], [44, 45, 46, 47], [45, 46, 47, 48], [46, 47, 48, 49],
  [1, 8, 15, 22], [2, 9, 16, 23], [3, 10, 17, 24], [4, 11, 18, 25],
  [5, 12, 19, 26], [6, 13, 20, 27], [7, 14, 21, 28], [8, 15, 22, 29],
  [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33],
  [13, 20, 27, 34], [14, 21, 28, 35], [15, 22, 29, 36], [16, 23, 30, 37],
  [17, 24, 31, 38], [18, 25, 32, 39], [19, 26, 33, 40], [20, 27, 34, 41],
  [21, 28, 35, 42], [22, 29, 36, 43], [23, 30, 37, 44], [24, 31, 38, 45],
  [25, 32, 39, 46], [26, 33, 40, 47], [27, 34, 41, 48], [28, 35, 42, 49],
  [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27], [4, 12, 20, 28],
  [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34], [11, 19, 27, 35],
  [15, 23, 31, 39], [16, 24, 32, 40], [17, 25, 33, 41], [18, 26, 34, 42],
  [22, 30, 38, 46], [23, 31, 39, 47], [24, 32, 40, 48], [25, 33, 41, 49],
  [4, 10, 16, 22], [5, 11, 17, 23], [6, 12, 18, 24], [7, 13, 19, 25],
  [11, 17, 23, 29], [12, 18, 24, 30], [13, 19, 25, 31], [14, 20, 26, 32],
  [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38], [21, 27, 33, 39],
  [25, 31, 37, 43], [26, 32, 38, 44], [27, 33, 39, 45], [28, 34, 40, 46]
];

function init() {
  selected = [];

  atual.innerHTML = `JOGADOR DA VEZ: ${player}`;

  document.querySelectorAll(".cell button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("id");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  atual.innerHTML = `JOGADOR DA VEZ: ${player}`;
  linha = e.target.value[0]
  coluna = e.target.value[1]
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + playerLastMove + "' GANHOU!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 49) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}