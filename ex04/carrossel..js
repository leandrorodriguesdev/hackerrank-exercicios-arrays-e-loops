const sequencia = ">>>>>>>"
// > direita
// < esquerda

let conta_avanco = 0;

//conta avanços e voltas
for(let i = 0; i < sequencia.length; i++){
  if(sequencia[i] === ">"){
    conta_avanco += 1;
    if(conta_avanco > 6){
      conta_avanco = 0;
    }

  } else if(sequencia[i] === "<"){
    conta_avanco -= 1;
    if(conta_avanco < 0){
      conta_avanco = 6
    }
  }
}


console.log(conta_avanco);
