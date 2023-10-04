const simbolo = [['X','♣','♠'],['O','♦','♥']]//Criação dos simbolos que serão utilizados no jogo, separados os para cada player.



const currentPlayer = document.querySelector(".currentPlayer");


let matriz;
let player1 = simbolo[0][Math.floor(Math.random()*3)];//inicia um símbolo aleatório para o player1
let player2= simbolo[1][Math.floor(Math.random()*3)];//inicia um símbolo aleatório para o player2
let player=player1; // O primeiro a jogar será o player1
let contador = 0//!
// Criar uma matriz vazia 7x7
function criarMatrizVazia(linhas, colunas) {
  return Array.from({ length: linhas }, () => Array(colunas).fill(''));
}
const matrizVazia = criarMatrizVazia(7, 7);
  
 

// Agora você tem uma matriz 7x7 preenchida com valores vazios ('')

function init() {
  matriz = [...matrizVazia]; // Utilização do spread para clonar a matriz criada pela função matrizVazia
console.log(matriz)
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`; // Apresenta qual o atual jogador da vez

  document.querySelectorAll(".cell button").forEach((item) => {//!
    item.innerHTML = ""; // Transforma todos os textos dos botões em vazios 
    item.addEventListener("click", newMove); // Adiciona a ação de clique em cada botão da matriz
  });
}
init();


function newMove(e) {
  const index = e.target.getAttribute("id");
  e.target.innerHTML = player; // Vai inserir o simbolo do jogador dentro do texto do botão clicado
  e.target.removeEventListener("click", newMove);// Remove a ação de clique do botão já selecionado 
  linha = e.target.value[0] // Define a linha do botão acionado
  coluna = e.target.value[1] // Define a coluna do botão acionado 
  matriz[parseInt(linha)][parseInt(coluna)] = player // Adiciona o simbolo na matriz criada por meio dos indexes da respectiva linha e coluna
  setTimeout(() => {
    if (verificarMatriz(matriz)) { // Verifica a matriz se algum jogador ganhou por meio da função verificarMatriz 
  alert(`JOGADOR ${contador%2?player1:player2} GANHOU`) // Apresenta o jogador vencedor
}
    else if(contador==49){ // Termina o jogo em um empate se a matriz está completa
  alert(`DEU EMPATE`)
}
}, [100]);
  contador=contador+1;
  if(contador%4 == 0){player1 = simbolo[0][Math.floor(Math.random()*3)];//na 4ª partida, troca o símbolo do player 1
                      player = player1;}else{
    if((contador-1)%4 == 0){player2 = simbolo[1][Math.floor(Math.random()*3)]//na 5ª partida, troca o símbolo do player 1
                            player = player2;}else{
       if(contador%2 == 0){player = player1;}else{//se a jogada for par, quem joga é o player 1
         if(contador%2 == 1){player = player2;}//se a jogada for impar, quem joga é o player 2
       }
                              
                            }
  }
  //player = simbolo[contador%2][Math.floor(Math.random()*3)];
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

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
    if (símbolo !== '') 
    // Verifica se há uma sequência em alguma das direções possíveis
    
    //vai pegar a matriz e ler ela tentando achar silbolos que bata e caso esteja vazio ela apenas assa para o proximo,se nao ela guarda a i dormação e procura de existe outros simbolos iguais nas diagonais linha ou colunas
    {
      return directions.some(([di, dj]) => verificarSequencia(matriz, símbolo, i, j, di, dj))
    }

    return false;
  }
//
  return matriz.some((row, i) => row.some((_, j) => verificaPosicao(i, j)))
}
