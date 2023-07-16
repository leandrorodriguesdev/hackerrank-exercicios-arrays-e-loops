const notas = [100, 100, 100, 50];

let maior_nota = 0;
let menor_nota = notas[0];
let soma = 0;
let media = 0;

//encontrando maior e menor nota
for(let nota of notas){
  if(nota > maior_nota){
    maior_nota = nota;
  }
  if(nota < menor_nota){
    menor_nota = nota;
  }
}

//somando as notas
for(let nota of notas){
    soma += nota;
}

//eliminando a maior e menor nota
soma -= maior_nota;
soma -= menor_nota;

//calculando a media
media = soma / (notas.length - 2);

//imprimindo a media
console.log(media);
