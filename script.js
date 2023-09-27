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
const turno = (simbolo[1],simbolo[2],cont) =>{ /**  Função que irá utilizar da recursividade para repetir os turnos com os simbolos diferentes,
  esses que serão sorteados pela função auxiliar 'simbolos' */ 
  if (cont=4){
    const num1 = Math.floor(Math.random()*3)/**Através dos número gerados entre 0 e 1 pelo Math.random utilizamos de uma multiplicação por 3 para deifinir os números entre 0 e 2 ou 3 e 5,
     então usamos do Math.floor para aproximar o resultado da multiplicação ao valor mais próximo.*/
    const num2 = Math.floor(Math.random()*3)+3
    return turno(simbolos(num1),simbolos(num2),cont=0)}//Retorno de uma nova rodada, após duas rodadas, com novos simbolos e o seu contador zerado.
    else{
      return turno(simbolo[0],simbolo[3],cont+1/**função de rodada, ou função clique*/)
    }
}