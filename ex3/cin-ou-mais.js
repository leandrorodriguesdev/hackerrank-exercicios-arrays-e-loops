const precos = [100, 100, 100, 50];

let menor_valor = precos[0];
let soma = 0;
let valor_total = 0;
let mais_de_cinco_pecas;

for(let preco of precos){
  if(precos.length >= 5){
    if(preco < menor_valor){
      menor_valor = preco;
    }
    mais_de_cinco_pecas = true;
    soma += preco;
  } else {
    soma += preco;
  }
}

valor_total = soma - menor_valor;

if(mais_de_cinco_pecas){
  console.log(valor_total);
} else {
  console.log(soma);
}