//cria uma matriz de 7por 7 que vai servir como base para o nosso jogo
const criarMatriz = (linhas, colunas, geradorValorCélula) =>
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

imprimirMatriz(matrizDePosições)




//Criação dos simbolos utilizados no jogo
const simbolo1 = "x"
const simbolo2 = "$"
const simbolo3 = "!"
const simbolo4 = "?"
const simbolo5 = "o"
const simbolo6 = "%"

const simbolos = (num) =>{switch (num) {// Função auxiliar que irá definir qual é o simbolo sorteado pelo 'Math.random'
  case 0: return simbolo1
  case 1: return simbolo2
  case 2: return simbolo3
  case 3: return simbolo4
  case 4: return simbolo5
  case 5: return simbolo6
}
}
const turno = (simbolo1,simbolo2,cont) =>{ /**  Função que irá utilizar da recursividade para repetir os turnos com os simbolos diferentes,
  esses que serão sorteados pela função auxiliar 'simbolos' */ 
  if (cont=4){
    const num1 = Math.floor(Math.random()*3)/**Através dos número gerados entre 0 e 1 pelo Math.random utilizamos de uma multiplicação por 3 para deifinir os números entre 0 e 2 ou 3 e 5,
     então usamos do Math.floor para aproximar o resultado da multiplicação ao valor mais próximo.*/
    const num2 = Math.floor(Math.random()*3)
    return turno(simbolos(num1),simbolos(num2),cont=0)}//Retorno de uma nova rodada, após duas rodadas, com novos simbolos e o seu contador zerado.
    else{
      return turno(simbolo1,simbolo2,cont/**função de rodada, ou função clique*/)
    }
}
