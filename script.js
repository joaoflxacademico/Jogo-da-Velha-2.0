const simbolo = [['X','♣','♠'],['O','♦','♥']]//Criação dos simbolos que serão utilizados no jogo.


const simbolos = (num) =>{switch (num) {// Função auxiliar que irá selecionar qual é o simbolo sorteado pelo 'Math.random'
  case 0: return simbolo[0]
  case 1: return simbolo[1]
  case 2: return simbolo[2]
  case 3: return simbolo[3]
  case 4: return simbolo[4]
  case 5: return simbolo[5]
}
}

const currentPlayer = document.querySelector(".currentPlayer");


let matriz;
let player1 = simbolo[0][Math.floor(Math.random()*3)];
let player2= simbolo[1][Math.floor(Math.random()*3)];
let player=player1;
// Criar uma matriz vazia 7x7
const matrizVazia = new Array(7);

for (let i = 0; i < 7; i++) {
    matrizVazia[i] = new Array(7).fill('');
}

// Agora você tem uma matriz 7x7 preenchida com valores vazios ('')

function init() {
  matriz = [...matrizVazia];
console.log(matriz)
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  document.querySelectorAll(".cell button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}
init();

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

let contador=0;
function newMove(e) {
  const index = e.target.getAttribute("id");
  // pegaria a matriz vazia e adicionaria o player com o getelementbyid e utilizamos o id para colocar o item com o index certo dentro da matriz
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  linha = e.target.value[0]
  coluna = e.target.value[1]
  matriz[parseInt(linha)][parseInt(coluna)] = player
  setTimeout(() => {
    verificarMatriz(matriz);//**************AINDA NÃO ESTÁ VERIFICANDO A MATRIZ PARA COMPUTAR A VITÓRIA OU EMPATE********************
  }, [100]);
  contador=contador+1;
  if(contador%4 == 0){player1 = simbolo[0][Math.floor(Math.random()*3)];
                      player = player1;}else{
    if((contador-1)%4 == 0){player2 = simbolo[1][Math.floor(Math.random()*3)]
                            player = player2;}else{
       if(contador%2 == 0){player = player1;}else{
         if(contador%2 == 1){player = player2;}
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
