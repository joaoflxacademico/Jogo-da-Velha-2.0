//Criação dos simbolos utilizados no jogo
const simbolo1 = "x"
const simbolo2 = "$"
const simbolo3 = "!"
const simbolo4 = "?"
const simbolo5 = "o"
const simbolo6 = "%"

const simbolos = (num) =>{switch (num) {// Função auxiliar que irá definir qual é o simbolo sorteado pelo 'Math.random'
  case 1: return simbolo1
  case 2: return simbolo2
  case 3: return simbolo3
  case 4: return simbolo4
  case 5: return simbolo5
  case 6: return simbolo6
}
}
const turno = (simbolo1,simbolo2,cont) =>{ /**  Função que irá utilizar da recursividade para repetir os turnos com os simbolos diferentes,
  esses que serão sorteados pela função auxiliar 'simbolos' */ 
  if (cont=4){
    const num1 = Math.random(1,3)//Utilização da função 'Math.random' para randomizar as escolhas do simbolos.
    const num2 = Math.random(4,6)
    return turno(simbolos(num1),simbolos(num2),cont=0)}//Retorno de uma nova rodada, após duas rodadas, com novos simbolos e o seu contador zerado.
    else{
      return turno(simbolo1,simbolo2,cont/**função de rodada, ou função clique*/)
    }
}