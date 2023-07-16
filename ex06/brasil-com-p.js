const palavras = ["aveia","manha","ave"];

const primeiraLetra = "a";
const segundaLetra = "v";
let concatenacao = primeiraLetra + segundaLetra;
let encontrada;
for(let i = 0; i < palavras.length; i++){
  if(palavras[i].substr(0, 2) === concatenacao){
    
    console.log(palavras[i]);
    encontrada = true;
  }
}
if(!encontrada){
  console.log("NENHUMA");
}
