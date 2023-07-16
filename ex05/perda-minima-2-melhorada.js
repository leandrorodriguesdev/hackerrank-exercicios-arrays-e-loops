const preco = [30, 10, 54, 76, 1, 4, 35];

const menor_valor = [];

let sub = 0;
let perda_minima = preco[0];

//fazendo a subtração de todos os valores da lista
//e se o valor for maior que zero, atribuindo esse
//valor a uma variável e depois atribuindo esse 
//valor a uma nova lista
for(let i = 0; i < preco.length; i++){
  for(let j = i + 1; j < preco.length; j++){
    if(preco[i] - preco[j] > 0){
      sub = preco[i] - preco[j];
      menor_valor.push(sub);
    }
  }
}

//lendo a nova lista com o resultado da subtração
//de todos os valores da lista precos. 
//verificando qual o menor valor dessa lista e
//e armazenando em uma variável
for(let i = 0; i < menor_valor.length; i++){
  if(menor_valor[i] < perda_minima){
    perda_minima = menor_valor[i];
  }
}
console.log(perda_minima);