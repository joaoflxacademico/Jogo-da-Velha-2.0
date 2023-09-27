//cria uma matriz de 7por 7 que vai servir como base para o nosso jogo
/**const criarMatriz = (linhas, colunas, geradorValorCélula) =>
  Array.from({ length: linhas }, (_, i) =>
    Array.from({ length: colunas }, (_, j) => geradorValorCélula(i, j))
  )

const imprimirMatriz = (matriz, índice = 0) => {
  if (índice === matriz.length) return
  console.log(matriz[índice].join('\t'))
  imprimirMatriz(matriz, índice + 1)
};

const gerarMatrizDePosições = (linhas, colunas) =>
  criarMatriz(linhas, colunas, (i, j) => [i, j])

const linhas = 7
const colunas = 7

const matrizDePosições = gerarMatrizDePosições(linhas, colunas)

imprimirMatriz(matrizDePosições)*/




//Criação dos simbolos utilizados no jogo
const simbolo = ['x','!','$','o','?','%']

const simbolos = (num) =>{switch (num) {// Função auxiliar que irá definir qual é o simbolo sorteado pelo 'Math.random'
  case 0: return simbolo[0]
  case 1: return simbolo[1]
  case 2: return simbolo[2]
  case 3: return simbolo[3]
  case 4: return simbolo[4]
  case 5: return simbolo[5]
}
}
const turno = (simbolo1,simbolo2,cont) =>{ /**  Função que irá utilizar da recursividade para repetir os turnos com os simbolos diferentes,
  esses que serão sorteados pela função auxiliar 'simbolos' */ 
  if (cont=4){
    const num1 = Math.floor(Math.random()*3)//Utilização da função 'Math.random' para randomizar as escolhas do simbolos.
    const num2 = Math.floor(Math.random()*3)+3
    return turno(simbolos(num1),simbolos(num2),cont=0)}//Retorno de uma nova rodada, após duas rodadas, com novos simbolos e o seu contador zerado.
    else{
      return turno(simbolo[0],simbolo[3],cont+1/**função de rodada, ou função clique*/)
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
